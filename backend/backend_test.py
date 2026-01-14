#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime

class JakotaAPITester:
    def __init__(self, base_url="http://localhost:8001"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                    return True, response_data
                except:
                    return True, response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append({
                    'test': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200]
                })
                return False, {}

        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection Error: Cannot connect to {url}")
            self.failed_tests.append({
                'test': name,
                'error': 'Connection Error',
                'url': url
            })
            return False, {}
        except requests.exceptions.Timeout:
            print(f"❌ Failed - Timeout: Request timed out")
            self.failed_tests.append({
                'test': name,
                'error': 'Timeout',
                'url': url
            })
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'test': name,
                'error': str(e),
                'url': url
            })
            return False, {}

    def test_health_endpoint(self):
        """Test health check endpoint"""
        success, response = self.run_test(
            "Health Check",
            "GET",
            "api/health",
            200
        )
        if success and isinstance(response, dict):
            if response.get('status') == 'healthy':
                print("   ✅ Health status is healthy")
                return True
            else:
                print(f"   ⚠️  Health status is: {response.get('status')}")
        return success

    def test_inventory_endpoint(self):
        """Test inventory endpoint"""
        success, response = self.run_test(
            "Get Inventory",
            "GET",
            "api/inventory",
            200
        )
        if success and isinstance(response, dict):
            if response.get('success') and 'data' in response:
                inventory = response['data']
                expected_equipment = ['cuplock', 'ringlock', 'ms_ladder', 'slab_props']
                found_equipment = list(inventory.keys())
                print(f"   Found equipment types: {found_equipment}")
                
                missing = [eq for eq in expected_equipment if eq not in found_equipment]
                if missing:
                    print(f"   ⚠️  Missing equipment types: {missing}")
                else:
                    print("   ✅ All expected equipment types found")
                
                # Check structure of first equipment
                first_key = list(inventory.keys())[0]
                first_item = inventory[first_key]
                required_fields = ['name', 'rate_per_ton_per_day', 'min_quantity', 'description']
                for field in required_fields:
                    if field not in first_item:
                        print(f"   ⚠️  Missing field '{field}' in equipment data")
                    else:
                        print(f"   ✅ Field '{field}' present")
                
                return True
        return success

    def test_specific_equipment(self):
        """Test specific equipment endpoint"""
        success, response = self.run_test(
            "Get Cuplock Equipment",
            "GET",
            "api/inventory/cuplock",
            200
        )
        if success and isinstance(response, dict):
            if response.get('success') and 'data' in response:
                equipment = response['data']
                if equipment.get('name') == 'Cuplock Scaffolding':
                    print("   ✅ Correct equipment returned")
                    return True
                else:
                    print(f"   ⚠️  Unexpected equipment: {equipment.get('name')}")
        return success

    def test_invalid_equipment(self):
        """Test invalid equipment endpoint"""
        success, response = self.run_test(
            "Get Invalid Equipment",
            "GET",
            "api/inventory/invalid_equipment",
            404
        )
        return success

    def test_calculate_endpoint(self):
        """Test cost calculation endpoint"""
        test_cases = [
            {
                'name': 'Basic Calculation - Cuplock',
                'data': {
                    'equipment_type': 'cuplock',
                    'quantity_tons': 10,
                    'duration_days': 30
                },
                'expected_base': 10 * 30 * 45,  # 13500
                'expected_discount': 0.05  # 5% for 10+ tons
            },
            {
                'name': 'Large Order - Ringlock',
                'data': {
                    'equipment_type': 'ringlock',
                    'quantity_tons': 25,
                    'duration_days': 60
                },
                'expected_base': 25 * 60 * 55,  # 82500
                'expected_discount': 0.10  # 10% for 20+ tons
            },
            {
                'name': 'Bulk Order - Slab Props',
                'data': {
                    'equipment_type': 'slab_props',
                    'quantity_tons': 60,
                    'duration_days': 45
                },
                'expected_base': 60 * 45 * 30,  # 81000
                'expected_discount': 0.15  # 15% for 50+ tons
            }
        ]

        all_passed = True
        for test_case in test_cases:
            success, response = self.run_test(
                test_case['name'],
                "POST",
                "api/calculate",
                200,
                test_case['data']
            )
            
            if success and isinstance(response, dict) and response.get('success'):
                calc_data = response['data']
                
                # Verify calculations
                expected_base = test_case['expected_base']
                expected_discount_percent = test_case['expected_discount'] * 100
                expected_discount_amount = expected_base * test_case['expected_discount']
                expected_final = expected_base - expected_discount_amount
                
                actual_base = calc_data.get('base_cost')
                actual_discount_percent = calc_data.get('discount_percent')
                actual_final = calc_data.get('final_cost')
                
                print(f"   Expected base: ₹{expected_base}, Actual: ₹{actual_base}")
                print(f"   Expected discount: {expected_discount_percent}%, Actual: {actual_discount_percent}%")
                print(f"   Expected final: ₹{expected_final}, Actual: ₹{actual_final}")
                
                if (abs(actual_base - expected_base) < 0.01 and 
                    abs(actual_discount_percent - expected_discount_percent) < 0.01 and
                    abs(actual_final - expected_final) < 0.01):
                    print("   ✅ Calculations are correct")
                else:
                    print("   ❌ Calculation mismatch")
                    all_passed = False
            else:
                all_passed = False
        
        return all_passed

    def test_invalid_calculate(self):
        """Test calculation with invalid equipment"""
        success, response = self.run_test(
            "Calculate Invalid Equipment",
            "POST",
            "api/calculate",
            400,
            {
                'equipment_type': 'invalid_equipment',
                'quantity_tons': 10,
                'duration_days': 30
            }
        )
        return success

    def test_projects_endpoint(self):
        """Test projects endpoint"""
        success, response = self.run_test(
            "Get Projects",
            "GET",
            "api/projects",
            200
        )
        if success and isinstance(response, dict):
            if response.get('success') and 'data' in response:
                projects = response['data']
                if isinstance(projects, list) and len(projects) > 0:
                    print(f"   Found {len(projects)} projects")
                    
                    # Check structure of first project
                    first_project = projects[0]
                    required_fields = ['id', 'title', 'location', 'client', 'equipment', 'tonnage']
                    for field in required_fields:
                        if field not in first_project:
                            print(f"   ⚠️  Missing field '{field}' in project data")
                        else:
                            print(f"   ✅ Field '{field}' present")
                    
                    return True
                else:
                    print("   ⚠️  No projects found or invalid format")
        return success

    def test_testimonials_endpoint(self):
        """Test testimonials endpoint"""
        success, response = self.run_test(
            "Get Testimonials",
            "GET",
            "api/testimonials",
            200
        )
        if success and isinstance(response, dict):
            if response.get('success') and 'data' in response:
                testimonials = response['data']
                if isinstance(testimonials, list) and len(testimonials) > 0:
                    print(f"   Found {len(testimonials)} testimonials")
                    
                    # Check structure of first testimonial
                    first_testimonial = testimonials[0]
                    required_fields = ['id', 'name', 'designation', 'company', 'quote', 'rating']
                    for field in required_fields:
                        if field not in first_testimonial:
                            print(f"   ⚠️  Missing field '{field}' in testimonial data")
                        else:
                            print(f"   ✅ Field '{field}' present")
                    
                    return True
                else:
                    print("   ⚠️  No testimonials found or invalid format")
        return success

    def test_quote_submission(self):
        """Test quote submission endpoint"""
        test_quote = {
            "name": "Test User",
            "company": "Test Company",
            "phone": "9876543210",
            "email": "test@example.com",
            "equipment_type": "cuplock",
            "quantity_tons": 15,
            "duration_days": 45,
            "project_location": "Gurgaon",
            "message": "Test quote request"
        }
        
        success, response = self.run_test(
            "Submit Quote Request",
            "POST",
            "api/quote",
            200,
            test_quote
        )
        
        if success and isinstance(response, dict):
            if response.get('success') and 'quote_id' in response:
                print(f"   ✅ Quote submitted with ID: {response['quote_id']}")
                return True
            else:
                print("   ⚠️  Quote submission response missing required fields")
        return success

    def test_contact_submission(self):
        """Test contact submission endpoint"""
        test_contact = {
            "name": "Test User",
            "phone": "9876543210",
            "email": "test@example.com",
            "message": "Test contact message"
        }
        
        success, response = self.run_test(
            "Submit Contact Request",
            "POST",
            "api/contact",
            200,
            test_contact
        )
        
        if success and isinstance(response, dict):
            if response.get('success'):
                print("   ✅ Contact message submitted successfully")
                return True
            else:
                print("   ⚠️  Contact submission response missing success field")
        return success

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting Jakota API Tests")
        print("=" * 50)
        
        # Test all endpoints
        tests = [
            self.test_health_endpoint,
            self.test_inventory_endpoint,
            self.test_specific_equipment,
            self.test_invalid_equipment,
            self.test_calculate_endpoint,
            self.test_invalid_calculate,
            self.test_projects_endpoint,
            self.test_testimonials_endpoint,
            self.test_quote_submission,
            self.test_contact_submission
        ]
        
        for test in tests:
            try:
                test()
            except Exception as e:
                print(f"❌ Test {test.__name__} failed with exception: {str(e)}")
                self.failed_tests.append({
                    'test': test.__name__,
                    'error': str(e)
                })
        
        # Print summary
        print("\n" + "=" * 50)
        print(f"📊 Test Summary")
        print(f"Tests Run: {self.tests_run}")
        print(f"Tests Passed: {self.tests_passed}")
        print(f"Tests Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run*100):.1f}%")
        
        if self.failed_tests:
            print(f"\n❌ Failed Tests:")
            for failure in self.failed_tests:
                print(f"  - {failure.get('test', 'Unknown')}: {failure.get('error', failure.get('response', 'Unknown error'))}")
        
        return self.tests_passed == self.tests_run

def main():
    # Use the backend URL from environment
    backend_url = "http://localhost:8001"
    
    print(f"Testing Jakota API at: {backend_url}")
    tester = JakotaAPITester(backend_url)
    
    success = tester.run_all_tests()
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import os
from dotenv import load_dotenv
from pymongo import MongoClient
from datetime import datetime
import uuid

load_dotenv()

app = FastAPI(title="Jakota.in API", version="1.0.0")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Connection
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017/jakota')
client = MongoClient(MONGO_URL)
# Extract database name from MONGO_URL or use default
db_name = MONGO_URL.split('/')[-1].split('?')[0] if '/' in MONGO_URL else 'jakota'
db = client[db_name]

# Models
class QuoteRequest(BaseModel):
    name: str
    company: str
    phone: str
    email: Optional[str] = None
    equipment_type: str
    quantity_tons: float
    duration_days: int
    project_location: str
    message: Optional[str] = None

class ContactRequest(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    message: str

class CalculatorRequest(BaseModel):
    equipment_type: str
    quantity_tons: float
    duration_days: int

# Inventory Data
INVENTORY = {
    "cuplock": {
        "name": "Cuplock Scaffolding",
        "rate_per_ton_per_day": 45,
        "min_quantity": 5,
        "description": "High-rise construction, industrial projects",
        "specs": {
            "material": "Hot-dip galvanized steel",
            "load_capacity": "Up to 30 kN per leg",
            "standard_lengths": "0.5m to 3.0m"
        }
    },
    "ringlock": {
        "name": "Ringlock Scaffolding",
        "rate_per_ton_per_day": 55,
        "min_quantity": 5,
        "description": "Complex structures, curved surfaces",
        "specs": {
            "material": "Q345 Steel, hot-dip galvanized",
            "load_capacity": "Up to 40 kN per leg",
            "rosette_spacing": "500mm intervals"
        }
    },
    "ms_ladder": {
        "name": "MS Ladders",
        "rate_per_ton_per_day": 35,
        "min_quantity": 2,
        "description": "Access solutions, maintenance work",
        "specs": {
            "material": "Mild Steel",
            "rung_spacing": "300mm",
            "width": "450mm standard"
        }
    },
    "slab_props": {
        "name": "Adjustable Slab Props",
        "rate_per_ton_per_day": 30,
        "min_quantity": 50,
        "description": "Slab support, formwork",
        "specs": {
            "material": "Heavy-duty steel",
            "height_range": "1.8m to 4.0m",
            "load_capacity": "Up to 25 kN"
        }
    }
}

# Routes
@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "Jakota.in API"}

@app.get("/api/inventory")
def get_inventory():
    return {"success": True, "data": INVENTORY}

@app.get("/api/inventory/{equipment_type}")
def get_equipment(equipment_type: str):
    if equipment_type not in INVENTORY:
        raise HTTPException(status_code=404, detail="Equipment not found")
    return {"success": True, "data": INVENTORY[equipment_type]}

@app.post("/api/calculate")
def calculate_cost(request: CalculatorRequest):
    if request.equipment_type not in INVENTORY:
        raise HTTPException(status_code=400, detail="Invalid equipment type")
    
    equipment = INVENTORY[request.equipment_type]
    rate = equipment["rate_per_ton_per_day"]
    
    base_cost = request.quantity_tons * request.duration_days * rate
    
    # Bulk discount
    discount = 0
    if request.quantity_tons >= 50:
        discount = 0.15
    elif request.quantity_tons >= 20:
        discount = 0.10
    elif request.quantity_tons >= 10:
        discount = 0.05
    
    discount_amount = base_cost * discount
    final_cost = base_cost - discount_amount
    
    return {
        "success": True,
        "data": {
            "equipment": equipment["name"],
            "quantity_tons": request.quantity_tons,
            "duration_days": request.duration_days,
            "rate_per_ton_per_day": rate,
            "base_cost": round(base_cost, 2),
            "discount_percent": discount * 100,
            "discount_amount": round(discount_amount, 2),
            "final_cost": round(final_cost, 2),
            "note": "GST extra. Transportation charges apply based on location."
        }
    }

@app.post("/api/quote")
def submit_quote(request: QuoteRequest):
    quote_data = {
        "id": str(uuid.uuid4()),
        "name": request.name,
        "company": request.company,
        "phone": request.phone,
        "email": request.email,
        "equipment_type": request.equipment_type,
        "quantity_tons": request.quantity_tons,
        "duration_days": request.duration_days,
        "project_location": request.project_location,
        "message": request.message,
        "created_at": datetime.utcnow(),
        "status": "new"
    }
    
    db.quotes.insert_one(quote_data)
    
    return {
        "success": True,
        "message": "Quote request submitted successfully. We will contact you within 2 hours.",
        "quote_id": quote_data["id"]
    }

@app.post("/api/contact")
def submit_contact(request: ContactRequest):
    contact_data = {
        "id": str(uuid.uuid4()),
        "name": request.name,
        "phone": request.phone,
        "email": request.email,
        "message": request.message,
        "created_at": datetime.utcnow(),
        "status": "new"
    }
    
    db.contacts.insert_one(contact_data)
    
    return {
        "success": True,
        "message": "Message received. We will get back to you shortly."
    }

@app.get("/api/projects")
def get_projects():
    projects = [
        {
            "id": "1",
            "title": "DLF Cyber City Tower",
            "location": "Gurgaon",
            "client": "DLF Limited",
            "equipment": "Cuplock Scaffolding",
            "tonnage": 120,
            "duration": "8 months",
            "floors": 42,
            "on_time_delivery": True,
            "metrics": {
                "delivery_accuracy": "100%",
                "zero_safety_incidents": True,
                "emergency_response_time": "4 hours"
            }
        },
        {
            "id": "2",
            "title": "Ambience Mall Extension",
            "location": "Gurgaon",
            "client": "Ambience Group",
            "equipment": "Ringlock Scaffolding",
            "tonnage": 85,
            "duration": "6 months",
            "floors": 12,
            "on_time_delivery": True,
            "metrics": {
                "delivery_accuracy": "100%",
                "zero_safety_incidents": True,
                "emergency_response_time": "3 hours"
            }
        },
        {
            "id": "3",
            "title": "Medanta Hospital Wing",
            "location": "Gurgaon",
            "client": "Medanta Healthcare",
            "equipment": "Cuplock + Slab Props",
            "tonnage": 65,
            "duration": "5 months",
            "floors": 8,
            "on_time_delivery": True,
            "metrics": {
                "delivery_accuracy": "98%",
                "zero_safety_incidents": True,
                "emergency_response_time": "2 hours"
            }
        },
        {
            "id": "4",
            "title": "M3M Heights",
            "location": "Sector 65, Gurgaon",
            "client": "M3M India",
            "equipment": "Cuplock Scaffolding",
            "tonnage": 200,
            "duration": "14 months",
            "floors": 55,
            "on_time_delivery": True,
            "metrics": {
                "delivery_accuracy": "100%",
                "zero_safety_incidents": True,
                "emergency_response_time": "4 hours"
            }
        }
    ]
    return {"success": True, "data": projects}

@app.get("/api/testimonials")
def get_testimonials():
    testimonials = [
        {
            "id": "1",
            "name": "Rajesh Kumar",
            "designation": "Project Manager",
            "company": "DLF Limited",
            "quote": "Jakota delivered 120 tons of scaffolding exactly when promised. Zero delays in 8 months. That's rare in this industry.",
            "rating": 5
        },
        {
            "id": "2",
            "name": "Amit Sharma",
            "designation": "Site Engineer",
            "company": "Shapoorji Pallonji",
            "quote": "Emergency requirement at 11 PM. Material on site by 6 AM. No excuses, just delivery. Will recommend.",
            "rating": 5
        },
        {
            "id": "3",
            "name": "Vikram Singh",
            "designation": "Construction Head",
            "company": "M3M India",
            "quote": "Clean documentation. Proper weight slips. One point of contact who actually picks up the phone. Professional setup.",
            "rating": 5
        }
    ]
    return {"success": True, "data": testimonials}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)

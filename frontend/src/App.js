import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Shield, Truck, CheckCircle, ChevronRight, Menu, X, Calculator, Users, Building2, Wrench, FileText, Award, ArrowRight, Star, ChevronDown } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
const WHATSAPP_NUMBER = '919876543210';
const PHONE_NUMBER = '+919876543210';

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-primary-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setCurrentPage('home')}
            data-testid="logo"
          >
            <div className="bg-white rounded-lg p-1.5">
              <img 
                src="/logo.png" 
                alt="Jakota - Engineered Formwork & Scaffolds" 
                className="h-8 md:h-9 w-auto"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => (
              <button
                key={item.id}
                data-testid={`nav-${item.id}`}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  currentPage === item.id 
                    ? 'bg-accent-500 text-primary-900' 
                    : 'text-steel-200 hover:text-white hover:bg-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center px-3 py-2 text-sm bg-primary-600 rounded hover:bg-primary-700 transition-colors"
              data-testid="header-call-btn"
            >
              <Phone size={16} className="mr-1" />
              Call Now
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need scaffolding for my project`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm bg-green-500 rounded hover:bg-green-600 transition-colors font-medium"
              data-testid="header-whatsapp-btn"
            >
              <MessageCircle size={16} className="mr-1" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-primary-600">
            {navItems.map(item => (
              <button
                key={item.id}
                data-testid={`mobile-nav-${item.id}`}
                onClick={() => { setCurrentPage(item.id); setIsOpen(false); }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium ${
                  currentPage === item.id 
                    ? 'bg-accent-500 text-primary-900' 
                    : 'text-steel-200 hover:bg-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex space-x-2 mt-4 px-4">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="flex-1 flex items-center justify-center px-3 py-3 text-sm bg-primary-600 rounded"
              >
                <Phone size={16} className="mr-2" /> Call
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-3 py-3 text-sm bg-green-500 rounded font-medium"
              >
                <MessageCircle size={16} className="mr-2" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = ({ setCurrentPage }) => (
  <section className="bg-primary-500 text-white py-16 md:py-24" data-testid="hero-section">
    <div className="max-w-7xl mx-auto px-4">
      <div className="max-w-3xl">
        <div className="inline-block px-3 py-1 bg-accent-500/20 text-accent-500 text-sm font-semibold rounded-full mb-4 border border-accent-500/30">
          Trusted by 50+ Builders in NCR
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Scaffolding Rental in Gurgaon
          <span className="text-accent-500 block mt-2">No Bakwas. Just Delivery.</span>
        </h1>
        <p className="text-lg md:text-xl text-steel-300 mb-8 leading-relaxed">
          Exact delivery date. Exact quantity. One point of contact.
          <br className="hidden md:block" />
          Cuplock, Ringlock, Slab Props — ready for your project.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need a quote for scaffolding rental`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-pulse flex items-center justify-center px-8 py-4 bg-accent-500 text-primary-900 font-bold rounded-lg hover:bg-accent-400 transition-all text-lg shadow-lg"
            data-testid="hero-whatsapp-btn"
          >
            <MessageCircle size={24} className="mr-2" />
            Get Instant Quote on WhatsApp
          </a>
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-lg border border-white/20"
            data-testid="hero-call-btn"
          >
            <Phone size={24} className="mr-2" />
            Call: +91 98765 43210
          </a>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-steel-300">
          <div className="flex items-center">
            <CheckCircle size={18} className="text-accent-500 mr-2" />
            Same Day Delivery
          </div>
          <div className="flex items-center">
            <CheckCircle size={18} className="text-accent-500 mr-2" />
            500+ Tons Ready Stock
          </div>
          <div className="flex items-center">
            <CheckCircle size={18} className="text-accent-500 mr-2" />
            Free Site Survey
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Stats Section
const StatsSection = () => (
  <section className="bg-steel-50 py-12 border-b border-steel-200" data-testid="stats-section">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: '500+', label: 'Tons Ready Stock' },
          { value: '50+', label: 'Projects Delivered' },
          { value: '100%', label: 'On-Time Delivery' },
          { value: '8+', label: 'Years Experience' },
        ].map((stat, index) => (
          <div key={index} data-testid={`stat-${index}`}>
            <div className="text-3xl md:text-4xl font-bold text-accent-500">{stat.value}</div>
            <div className="text-steel-500 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Inventory Section
const InventorySection = ({ setCurrentPage }) => {
  const inventory = [
    {
      id: 'cuplock',
      name: 'Cuplock Scaffolding',
      rate: '₹45/ton/day',
      desc: 'High-rise construction, industrial projects',
      features: ['Hot-dip galvanized', 'Load: 30 kN/leg', 'Quick assembly'],
      icon: Building2
    },
    {
      id: 'ringlock',
      name: 'Ringlock Scaffolding',
      rate: '₹55/ton/day',
      desc: 'Complex structures, curved surfaces',
      features: ['Q345 Steel', 'Load: 40 kN/leg', '8-way connection'],
      icon: Wrench
    },
    {
      id: 'slab_props',
      name: 'Adjustable Slab Props',
      rate: '₹30/ton/day',
      desc: 'Slab support, formwork',
      features: ['1.8m to 4.0m range', 'Load: 25 kN', 'Heavy-duty steel'],
      icon: Shield
    },
    {
      id: 'ms_ladder',
      name: 'MS Ladders',
      rate: '₹35/ton/day',
      desc: 'Access solutions, maintenance',
      features: ['Mild Steel', '300mm rung spacing', 'Anti-slip rungs'],
      icon: Users
    },
  ];

  return (
    <section className="py-16 bg-white" data-testid="inventory-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Equipment</h2>
          <p className="text-steel-500 max-w-2xl mx-auto">
            Premium quality scaffolding equipment. Inspected before every delivery. Clear weight documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inventory.map((item) => (
            <div 
              key={item.id}
              className="bg-steel-50 rounded-xl p-6 shadow-sm card-hover border border-steel-100 hover:border-accent-500 transition-colors"
              data-testid={`inventory-${item.id}`}
            >
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-accent-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-steel-900 mb-1">{item.name}</h3>
              <div className="text-accent-600 font-bold mb-2">{item.rate}</div>
              <p className="text-steel-500 text-sm mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-steel-500">
                    <CheckCircle size={14} className="text-accent-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => setCurrentPage('inventory')}
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
            data-testid="view-inventory-btn"
          >
            View Full Inventory <ChevronRight size={20} className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Calculator Component
const CostCalculator = () => {
  const [equipment, setEquipment] = useState('cuplock');
  const [tonnage, setTonnage] = useState(10);
  const [days, setDays] = useState(30);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/api/calculate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          equipment_type: equipment,
          quantity_tons: tonnage,
          duration_days: days
        })
      });
      const data = await response.json();
      if (data.success) {
        setResult(data.data);
      }
    } catch (error) {
      console.error('Calculation error:', error);
    }
    setLoading(false);
  };

  return (
    <section className="py-16 bg-primary-500" data-testid="calculator-section">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            <Calculator className="inline mr-2 mb-1 text-accent-500" size={32} />
            Instant Cost Calculator
          </h2>
          <p className="text-steel-300">Get an estimate in seconds. Final quote on WhatsApp.</p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-2">Equipment Type</label>
              <select 
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
                className="w-full px-4 py-3 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-steel-50"
                data-testid="calc-equipment"
              >
                <option value="cuplock">Cuplock Scaffolding</option>
                <option value="ringlock">Ringlock Scaffolding</option>
                <option value="slab_props">Slab Props</option>
                <option value="ms_ladder">MS Ladders</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-2">Quantity (Tons)</label>
              <input 
                type="number"
                value={tonnage}
                onChange={(e) => setTonnage(Number(e.target.value))}
                min="1"
                className="w-full px-4 py-3 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-steel-50"
                data-testid="calc-tonnage"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-steel-700 mb-2">Duration (Days)</label>
              <input 
                type="number"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                min="1"
                className="w-full px-4 py-3 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-steel-50"
                data-testid="calc-days"
              />
            </div>
          </div>

          <button 
            onClick={calculate}
            disabled={loading}
            className="w-full py-4 bg-accent-500 text-primary-900 font-bold rounded-lg hover:bg-accent-400 transition-colors disabled:opacity-50 text-lg"
            data-testid="calc-submit"
          >
            {loading ? 'Calculating...' : 'Calculate Estimate'}
          </button>

          {result && (
            <div className="mt-6 p-6 bg-steel-50 rounded-xl border border-steel-200" data-testid="calc-result">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-steel-500 text-sm">Equipment</span>
                  <p className="font-medium text-steel-800">{result.equipment}</p>
                </div>
                <div>
                  <span className="text-steel-500 text-sm">Rate</span>
                  <p className="font-medium text-steel-800">₹{result.rate_per_ton_per_day}/ton/day</p>
                </div>
                <div>
                  <span className="text-steel-500 text-sm">Base Cost</span>
                  <p className="font-medium text-steel-800">₹{result.base_cost.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-steel-500 text-sm">Bulk Discount ({result.discount_percent}%)</span>
                  <p className="font-medium text-green-600">-₹{result.discount_amount.toLocaleString()}</p>
                </div>
              </div>
              <div className="border-t border-steel-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-steel-700">Estimated Total</span>
                  <span className="text-2xl font-bold text-accent-600">₹{result.final_cost.toLocaleString()}</span>
                </div>
                <p className="text-sm text-steel-500 mt-2">{result.note}</p>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need a quote for ${result.equipment}. Quantity: ${result.quantity_tons} tons, Duration: ${result.duration_days} days. Calculator estimate: ₹${result.final_cost.toLocaleString()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                data-testid="calc-whatsapp"
              >
                <MessageCircle size={20} className="mr-2" />
                Get Final Quote on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = ({ setCurrentPage }) => {
  const services = [
    {
      title: 'Scaffolding Rental',
      desc: 'Cuplock, Ringlock, Props — daily, weekly, monthly rates. Transparent pricing, no hidden charges.',
      icon: Building2
    },
    {
      title: 'Erection & Dismantling',
      desc: 'Trained crew. Safety-compliant installation. Proper anchoring and bracing.',
      icon: Wrench
    },
    {
      title: 'Safety Audits',
      desc: 'Periodic inspection of installed scaffolding. Compliance certificates.',
      icon: Shield
    },
    {
      title: 'Emergency Supply',
      desc: 'Urgent requirement? 4-hour response in Gurgaon. 24/7 availability.',
      icon: Truck
    },
  ];

  return (
    <section className="py-16 bg-steel-50" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-500 mb-4">What We Do</h2>
          <p className="text-steel-500 max-w-2xl mx-auto">
            End-to-end scaffolding solutions. From equipment rental to complete project execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-steel-200 bg-white hover:border-accent-500 transition-colors card-hover"
              data-testid={`service-${index}`}
            >
              <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-accent-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-steel-800 mb-2">{service.title}</h3>
              <p className="text-steel-500 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => setCurrentPage('services')}
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
            data-testid="view-services-btn"
          >
            View All Services <ChevronRight size={20} className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Why Jakota Section
const WhyJakota = () => {
  const reasons = [
    { title: 'Exact Delivery', desc: 'Date given = Date delivered. No excuses.', icon: Clock },
    { title: 'Verified Weights', desc: 'Proper weighbridge slips. No short delivery.', icon: FileText },
    { title: 'One Contact', desc: 'Single point of contact who picks up.', icon: Phone },
    { title: 'Quality Equipment', desc: 'Inspected before every delivery.', icon: Shield },
    { title: 'Fast Response', desc: '4-hour emergency supply in Gurgaon.', icon: Truck },
    { title: 'Clear Pricing', desc: 'No hidden charges. GST separate.', icon: Calculator },
  ];

  return (
    <section className="py-16 bg-white" data-testid="why-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-500 mb-4">Why Builders Choose Jakota</h2>
          <p className="text-steel-500">No marketing talk. Just facts.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start p-5 bg-steel-50 rounded-lg border border-steel-100"
              data-testid={`why-${index}`}
            >
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <reason.icon className="text-primary-900" size={20} />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-steel-800">{reason.title}</h3>
                <p className="text-steel-500 text-sm">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="py-16 bg-accent-500" data-testid="cta-section">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-primary-900 mb-4">
        Ready to Get Started?
      </h2>
      <p className="text-primary-800 text-lg mb-8">
        Get a quote in 5 minutes. No forms, no waiting. Just WhatsApp us your requirements.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need scaffolding for my project. Please share quote.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors text-lg"
          data-testid="cta-whatsapp"
        >
          <MessageCircle size={24} className="mr-2" />
          WhatsApp Now
        </a>
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center justify-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-steel-50 transition-colors text-lg"
          data-testid="cta-call"
        >
          <Phone size={24} className="mr-2" />
          Call: +91 98765 43210
        </a>
      </div>
    </div>
  </section>
);

// Footer
const Footer = ({ setCurrentPage }) => (
  <footer className="bg-steel-900 text-white py-12" data-testid="footer">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="bg-white rounded-lg p-2 inline-block mb-4">
            <img 
              src="/logo.png" 
              alt="Jakota - Engineered Formwork & Scaffolds" 
              className="h-10 w-auto"
            />
          </div>
          <p className="text-steel-400 text-sm mb-4">
            Premium scaffolding rental in Gurgaon & NCR. Reliable delivery, quality equipment, transparent pricing.
          </p>
          <div className="flex space-x-2">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-accent-500">Quick Links</h3>
          <ul className="space-y-2 text-steel-400 text-sm">
            {['Home', 'About Us', 'Inventory', 'Services'].map(item => (
              <li key={item}>
                <button 
                  onClick={() => setCurrentPage(item.toLowerCase().replace(' ', ''))}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-accent-500">Equipment</h3>
          <ul className="space-y-2 text-steel-400 text-sm">
            <li>Cuplock Scaffolding</li>
            <li>Ringlock Scaffolding</li>
            <li>Adjustable Slab Props</li>
            <li>MS Ladders</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-accent-500">Contact</h3>
          <ul className="space-y-3 text-steel-400 text-sm">
            <li className="flex items-start">
              <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-accent-500" />
              <span>Sector 37, Gurgaon, Haryana 122001</span>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-2 flex-shrink-0 text-accent-500" />
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white">+91 98765 43210</a>
            </li>
            <li className="flex items-center">
              <MessageCircle size={16} className="mr-2 flex-shrink-0 text-accent-500" />
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-steel-700 pt-8 text-center text-steel-500 text-sm">
        <p>© 2024 Jakota Scaffolding Rentals. All rights reserved.</p>
        <p className="mt-2">Serving Gurgaon, Noida, Faridabad, Greater Noida & NCR</p>
      </div>
    </div>
  </footer>
);

// Floating WhatsApp Button
const FloatingWhatsApp = () => (
  <a 
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need scaffolding for my project`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg whatsapp-pulse hover:bg-green-600 transition-colors"
    data-testid="floating-whatsapp"
  >
    <MessageCircle size={28} className="text-white" />
  </a>
);

// ===== PAGE COMPONENTS =====

// Home Page
const HomePage = ({ setCurrentPage }) => (
  <>
    <HeroSection setCurrentPage={setCurrentPage} />
    <StatsSection />
    <InventorySection setCurrentPage={setCurrentPage} />
    <CostCalculator />
    <ServicesSection setCurrentPage={setCurrentPage} />
    <WhyJakota />
    <CTASection />
  </>
);

// About Page
const AboutPage = () => (
  <div data-testid="about-page">
    <section className="bg-primary-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Jakota</h1>
        <p className="text-steel-300 text-lg">From a small yard to serving 50+ builders in NCR</p>
      </div>
    </section>
    
    <section className="py-16 bg-steel-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-primary-500 mb-4">Our Journey</h2>
            <p className="text-steel-500 leading-relaxed mb-4">
              Started in 2016 with 50 tons of scaffolding and a simple promise: deliver on time, every time.
              Today, we manage 500+ tons of inventory and have served some of the biggest names in NCR construction.
            </p>
            <p className="text-steel-500 leading-relaxed">
              We've grown not by marketing, but by word of mouth. When your scaffolding arrives exactly when promised,
              builders talk. That's been our growth strategy — reliability that speaks for itself.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-primary-500 mb-6">How We're Different</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Systems, Not Jugaad', desc: 'Proper inventory management. Tracking for every delivery. Nothing left to chance.' },
                { title: 'One Point of Contact', desc: 'You talk to one person. They are accountable for everything - delivery, quality, service.' },
                { title: 'Verified Weights', desc: 'Every delivery comes with weighbridge slip. No arguments about short delivery.' },
                { title: 'Quality First', desc: 'Equipment inspected before every delivery. Damaged pieces replaced immediately.' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-steel-50 rounded-lg border border-steel-200">
                  <h3 className="font-semibold text-steel-800 mb-2">{item.title}</h3>
                  <p className="text-steel-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-primary-500 mb-6">Our Scale</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '500+', label: 'Tons Inventory' },
                { value: '50+', label: 'Projects Completed' },
                { value: '8+', label: 'Years Experience' },
                { value: '24/7', label: 'Emergency Support' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-primary-500 text-white rounded-lg">
                  <div className="text-2xl font-bold text-accent-500">{stat.value}</div>
                  <div className="text-sm text-steel-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <CTASection />
  </div>
);

// Inventory Page
const InventoryPage = () => {
  const [selectedType, setSelectedType] = useState('cuplock');
  
  const inventory = {
    cuplock: {
      name: 'Cuplock Scaffolding',
      rate: '₹45/ton/day',
      minQty: '5 tons',
      description: 'The industry standard for high-rise construction. Quick assembly, reliable load capacity.',
      applications: ['High-rise buildings', 'Industrial projects', 'Commercial complexes', 'Infrastructure projects'],
      specs: [
        { label: 'Material', value: 'Hot-dip galvanized steel' },
        { label: 'Load Capacity', value: 'Up to 30 kN per leg' },
        { label: 'Standard Lengths', value: '0.5m to 3.0m' },
        { label: 'Cup Interval', value: '500mm' },
        { label: 'Surface Treatment', value: 'Hot-dip galvanized' },
      ]
    },
    ringlock: {
      name: 'Ringlock Scaffolding',
      rate: '₹55/ton/day',
      minQty: '5 tons',
      description: 'Premium scaffolding for complex structures. 8-directional connections for maximum flexibility.',
      applications: ['Curved structures', 'Stadiums & arenas', 'Complex facades', 'Heavy-duty applications'],
      specs: [
        { label: 'Material', value: 'Q345 Steel, hot-dip galvanized' },
        { label: 'Load Capacity', value: 'Up to 40 kN per leg' },
        { label: 'Rosette Spacing', value: '500mm intervals' },
        { label: 'Connection Points', value: '8 directions' },
        { label: 'Surface Treatment', value: 'Hot-dip galvanized' },
      ]
    },
    slab_props: {
      name: 'Adjustable Slab Props',
      rate: '₹30/ton/day',
      minQty: '50 pieces',
      description: 'Heavy-duty props for slab support. Adjustable height for versatile applications.',
      applications: ['Slab formwork support', 'Beam support', 'Temporary shoring', 'Bridge construction'],
      specs: [
        { label: 'Material', value: 'Heavy-duty steel' },
        { label: 'Height Range', value: '1.8m to 4.0m' },
        { label: 'Load Capacity', value: 'Up to 25 kN' },
        { label: 'Inner Tube', value: '48.3mm diameter' },
        { label: 'Outer Tube', value: '60.3mm diameter' },
      ]
    },
    ms_ladder: {
      name: 'MS Ladders',
      rate: '₹35/ton/day',
      minQty: '2 tons',
      description: 'Safe access solutions for scaffolding systems. Anti-slip rungs for worker safety.',
      applications: ['Scaffold access', 'Maintenance work', 'Industrial access', 'Construction sites'],
      specs: [
        { label: 'Material', value: 'Mild Steel' },
        { label: 'Rung Spacing', value: '300mm' },
        { label: 'Width', value: '450mm standard' },
        { label: 'Lengths Available', value: '2m to 6m' },
        { label: 'Surface Treatment', value: 'Powder coated / galvanized' },
      ]
    },
  };

  const current = inventory[selectedType];

  return (
    <div data-testid="inventory-page">
      <section className="bg-primary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Inventory</h1>
          <p className="text-steel-300 text-lg">Quality equipment. Clear specifications. Transparent pricing.</p>
        </div>
      </section>

      <section className="py-12 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Equipment Selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.keys(inventory).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedType(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedType === key
                    ? 'bg-accent-500 text-primary-900'
                    : 'bg-white text-steel-600 hover:bg-steel-100 border border-steel-200'
                }`}
                data-testid={`inv-tab-${key}`}
              >
                {inventory[key].name}
              </button>
            ))}
          </div>

          {/* Equipment Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-primary-500 mb-2">{current.name}</h2>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-accent-600">{current.rate}</span>
                <span className="text-steel-500">Min: {current.minQty}</span>
              </div>
              <p className="text-steel-500 mb-6">{current.description}</p>

              <h3 className="font-semibold text-steel-800 mb-3">Applications</h3>
              <ul className="space-y-2 mb-6">
                {current.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center text-steel-500">
                    <CheckCircle size={16} className="text-accent-500 mr-2" />
                    {app}
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need ${current.name}. Please share availability and quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                data-testid="inv-whatsapp"
              >
                <MessageCircle size={20} className="mr-2" />
                Enquire on WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-steel-800 mb-4">Technical Specifications</h3>
              <div className="space-y-3">
                {current.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-3 border-b border-steel-100">
                    <span className="text-steel-500">{spec.label}</span>
                    <span className="font-medium text-steel-800">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CostCalculator />
      <CTASection />
    </div>
  );
};

// Services Page
const ServicesPage = () => {
  const services = [
    {
      title: 'Scaffolding Rental',
      desc: 'Flexible rental options for all project sizes',
      details: [
        'Daily, weekly, and monthly rental rates',
        'Cuplock, Ringlock, Props, and Ladders',
        'Bulk discounts for large orders',
        'Transparent pricing with no hidden charges',
        'GST invoice for all transactions',
      ],
      icon: Building2
    },
    {
      title: 'Erection & Dismantling',
      desc: 'Professional installation by trained crews',
      details: [
        'Safety-compliant installation',
        'Trained and certified workers',
        'Proper anchoring and bracing',
        'Base plate and sole board installation',
        'Dismantling with proper handling',
      ],
      icon: Wrench
    },
    {
      title: 'Safety Audits',
      desc: 'Regular inspection and compliance',
      details: [
        'Periodic scaffolding inspection',
        'Load testing and verification',
        'Safety compliance certificates',
        'Defect identification and reporting',
        'Remediation recommendations',
      ],
      icon: Shield
    },
    {
      title: 'Emergency Supply',
      desc: '24/7 availability for urgent requirements',
      details: [
        '4-hour response in Gurgaon',
        '24/7 emergency helpline',
        'Immediate dispatch from yard',
        'Priority handling for urgent projects',
        'Dedicated emergency coordinator',
      ],
      icon: Truck
    },
  ];

  return (
    <div data-testid="services-page">
      <section className="bg-primary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-steel-300 text-lg">Complete scaffolding solutions from rental to installation</p>
        </div>
      </section>

      <section className="py-12 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden" data-testid={`svc-${idx}`}>
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="text-primary-900" size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-primary-500 mb-2">{service.title}</h2>
                    <p className="text-steel-500 mb-4">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-steel-500">
                          <CheckCircle size={16} className="text-accent-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-steel-100 h-64 md:h-auto flex items-center justify-center">
                    <service.icon className="text-steel-300" size={80} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

// Projects Page
const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/projects`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setProjects(data.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div data-testid="projects-page">
      <section className="bg-primary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-steel-300 text-lg">Metrics-driven case studies. Real numbers, real results.</p>
        </div>
      </section>

      <section className="py-12 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden card-hover shadow-sm" data-testid={`project-${project.id}`}>
                <div className="bg-primary-500 text-white p-6">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-steel-200 flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {project.location}
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-steel-500 text-sm">Client</span>
                      <p className="font-medium text-steel-800">{project.client}</p>
                    </div>
                    <div>
                      <span className="text-steel-500 text-sm">Equipment</span>
                      <p className="font-medium text-steel-800">{project.equipment}</p>
                    </div>
                    <div>
                      <span className="text-steel-500 text-sm">Tonnage</span>
                      <p className="font-medium text-steel-800">{project.tonnage} tons</p>
                    </div>
                    <div>
                      <span className="text-steel-500 text-sm">Duration</span>
                      <p className="font-medium text-steel-800">{project.duration}</p>
                    </div>
                  </div>
                  <div className="border-t border-steel-100 pt-4">
                    <h4 className="font-medium text-steel-800 mb-2">Key Metrics</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        {project.metrics.delivery_accuracy} Delivery
                      </span>
                      {project.metrics.zero_safety_incidents && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                          Zero Safety Incidents
                        </span>
                      )}
                      <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full">
                        {project.metrics.emergency_response_time} Emergency Response
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

// Process Page
const ProcessPage = () => {
  const steps = [
    { step: 1, title: 'Enquiry', desc: 'WhatsApp us your requirement. Equipment type, quantity, duration, site location.', time: '5 mins' },
    { step: 2, title: 'Site Survey', desc: 'For large orders, we visit site to assess requirements and access.', time: 'Same day' },
    { step: 3, title: 'Quote', desc: 'Detailed quote with rates, terms, and delivery schedule. Clear GST breakup.', time: '2 hours' },
    { step: 4, title: 'Confirmation', desc: 'Advance payment. PO or email confirmation. Delivery date locked.', time: '1 day' },
    { step: 5, title: 'Delivery', desc: 'Material reaches site with weighbridge slip. Quantity verified on-site.', time: 'As scheduled' },
    { step: 6, title: 'Support', desc: 'Single point of contact throughout rental. Emergency support 24/7.', time: 'Ongoing' },
  ];

  return (
    <div data-testid="process-page">
      <section className="bg-primary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h1>
          <p className="text-steel-300 text-lg">Clear steps. No surprises. Systems-driven execution.</p>
        </div>
      </section>

      <section className="py-12 bg-steel-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-12 pb-8" data-testid={`step-${idx}`}>
                {/* Timeline line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-5 top-10 w-0.5 h-full bg-steel-300"></div>
                )}
                {/* Step number */}
                <div className="absolute left-0 w-10 h-10 bg-accent-500 text-primary-900 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                {/* Content */}
                <div className="bg-white rounded-lg p-6 ml-4 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-primary-500">{step.title}</h3>
                    <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded font-medium">{step.time}</span>
                  </div>
                  <p className="text-steel-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary-500 text-white rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">Our Guarantee</h3>
            <p className="text-steel-200 mb-4">
              If we miss the committed delivery date by more than 24 hours, you get 10% discount on that order. No questions asked.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want to start a scaffolding enquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-accent-500 text-primary-900 font-bold rounded-lg hover:bg-accent-400 transition-colors"
            >
              <MessageCircle size={20} className="mr-2" />
              Start Your Enquiry
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

// Testimonials Page
const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/testimonials`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setTestimonials(data.data);
      })
      .catch(console.error);
  }, []);

  const clients = [
    'DLF Limited', 'Shapoorji Pallonji', 'M3M India', 'Ambience Group', 
    'NBCC', 'Godrej Properties', 'Medanta Healthcare', 'Emaar India'
  ];

  return (
    <div data-testid="testimonials-page">
      <section className="bg-primary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h1>
          <p className="text-steel-300 text-lg">Trusted by leading builders and contractors in NCR</p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-steel-500 mb-8">Companies We've Worked With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, idx) => (
              <div key={idx} className="px-6 py-3 bg-steel-50 rounded-lg text-steel-600 font-medium border border-steel-200">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-500 text-center mb-8">What They Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm" data-testid={`testimonial-${item.id}`}>
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-steel-500 mb-4 italic">"{item.quote}"</p>
                <div>
                  <p className="font-semibold text-steel-800">{item.name}</p>
                  <p className="text-steel-500 text-sm">{item.designation}, {item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    equipment_type: 'cuplock', quantity_tons: 10, duration_days: 30,
    project_location: '', message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setForm({
          name: '', company: '', phone: '', email: '',
          equipment_type: 'cuplock', quantity_tons: 10, duration_days: 30,
          project_location: '', message: ''
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
    }
    setLoading(false);
  };

  return (
    <div data-testid="contact-page">
      <section className="bg-primary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Quote</h1>
          <p className="text-steel-300 text-lg">WhatsApp is fastest. Or fill the form below.</p>
        </div>
      </section>

      <section className="py-12 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Quick Contact */}
            <div>
              <h2 className="text-2xl font-bold text-primary-500 mb-6">Fastest Way to Reach Us</h2>
              
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need scaffolding for my project. Please share quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-green-500 text-white rounded-xl mb-4 hover:bg-green-600 transition-colors"
                data-testid="contact-whatsapp"
              >
                <MessageCircle size={32} className="mr-4" />
                <div>
                  <div className="font-bold text-lg">WhatsApp Now</div>
                  <div className="text-green-100">Response within 15 minutes</div>
                </div>
              </a>

              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center p-6 bg-primary-500 text-white rounded-xl mb-8 hover:bg-primary-600 transition-colors"
                data-testid="contact-call"
              >
                <Phone size={32} className="mr-4" />
                <div>
                  <div className="font-bold text-lg">+91 98765 43210</div>
                  <div className="text-steel-200">Mon-Sat, 8 AM - 8 PM</div>
                </div>
              </a>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-steel-800 mb-4">Office Address</h3>
                <div className="flex items-start text-steel-500 mb-4">
                  <MapPin size={20} className="mr-3 mt-1 text-accent-500 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-steel-700">Jakota Scaffolding Rentals</p>
                    <p>Plot No. 45, Industrial Area</p>
                    <p>Sector 37, Gurgaon, Haryana 122001</p>
                  </div>
                </div>
                <div className="flex items-center text-steel-500">
                  <Clock size={20} className="mr-3 text-accent-500" />
                  <p>Yard Hours: 7 AM - 9 PM (All days)</p>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-primary-500 mb-6">Request Quote</h2>
              
              {success ? (
                <div className="text-center py-8" data-testid="form-success">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-steel-800 mb-2">Quote Request Submitted!</h3>
                  <p className="text-steel-500 mb-4">We'll contact you within 2 hours.</p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="text-primary-500 font-medium hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1">Name *</label>
                      <input 
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        className="w-full px-4 py-2 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 bg-steel-50"
                        data-testid="form-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1">Company *</label>
                      <input 
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({...form, company: e.target.value})}
                        className="w-full px-4 py-2 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 bg-steel-50"
                        data-testid="form-company"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1">Phone *</label>
                      <input 
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        className="w-full px-4 py-2 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 bg-steel-50"
                        data-testid="form-phone"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1">Email</label>
                      <input 
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        className="w-full px-4 py-2 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 bg-steel-50"
                        data-testid="form-email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1">Equipment Type *</label>
                    <select 
                      value={form.equipment_type}
                      onChange={(e) => setForm({...form, equipment_type: e.target.value})}
                      className="w-full px-4 py-2 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 bg-steel-50"
                      data-testid="form-equipment"
                    >
                      <option value="cuplock">Cuplock Scaffolding</option>
                      <option value="ringlock">Ringlock Scaffolding</option>
                      <option value="slab_props">Slab Props</option>
                      <option value="ms_ladder">MS Ladders</option>
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1">Quantity (Tons) *</label>
                      <input 
                        type="number"
                        required
                        min="1"
                        value={form.quantity_tons}
                        onChange={(e) => setForm({...form, quantity_tons: Number(e.target.value)})}
                        className="w-full px-4 py-2 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 bg-steel-50"
                        data-testid="form-quantity"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1">Duration (Days) *</label>
                      <input 
                        type="number"
                        required
                        min="1"
                        value={form.duration_days}
                        onChange={(e) => setForm({...form, duration_days: Number(e.target.value)})}
                        className="w-full px-4 py-2 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 bg-steel-50"
                        data-testid="form-duration"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1">Project Location *</label>
                    <input 
                      type="text"
                      required
                      placeholder="Site address in Gurgaon/NCR"
                      value={form.project_location}
                      onChange={(e) => setForm({...form, project_location: e.target.value})}
                      className="w-full px-4 py-2 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 bg-steel-50"
                      data-testid="form-location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1">Additional Requirements</label>
                    <textarea 
                      rows="3"
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      className="w-full px-4 py-2 border border-steel-200 rounded-lg focus:ring-2 focus:ring-accent-500 bg-steel-50"
                      placeholder="Erection/dismantling needed? Specific delivery date? Any other requirements?"
                      data-testid="form-message"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-accent-500 text-primary-900 font-bold rounded-lg hover:bg-accent-400 transition-colors disabled:opacity-50"
                    data-testid="form-submit"
                  >
                    {loading ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'aboutus': return <AboutPage />;
      case 'inventory': return <InventoryPage />;
      case 'services': return <ServicesPage />;
      case 'projects': return <ProjectsPage />;
      case 'process': return <ProcessPage />;
      case 'testimonials': return <TestimonialsPage />;
      case 'clients': return <TestimonialsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-steel-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

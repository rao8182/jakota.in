import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Shield, Truck, CheckCircle, ChevronRight, Menu, X, Calculator, Users, Building2, Wrench, FileText, ArrowRight, Star, ChevronDown, ArrowUpRight } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
const WHATSAPP_NUMBER = '919876543210';
const PHONE_NUMBER = '+919876543210';

// Navigation Component - Clean, minimal
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'inventory', label: 'Equipment' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setCurrentPage('home')}
            data-testid="logo"
          >
            <img 
              src="/logo.png" 
              alt="Jakota" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                data-testid={`nav-${item.id}`}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id 
                    ? 'text-primary-500' 
                    : scrolled ? 'text-steel-600 hover:text-primary-500' : 'text-steel-700 hover:text-primary-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="text-sm text-steel-600 hover:text-primary-500 transition-colors"
              data-testid="header-call-btn"
            >
              +91 98765 43210
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to discuss scaffolding requirements for my project`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
              data-testid="header-whatsapp-btn"
            >
              Get Quote
              <ArrowUpRight size={14} className="ml-1.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-steel-700"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-steel-100 bg-white">
            {navItems.map(item => (
              <button
                key={item.id}
                data-testid={`mobile-nav-${item.id}`}
                onClick={() => { setCurrentPage(item.id); setIsOpen(false); }}
                className={`block w-full text-left px-2 py-3 text-sm font-medium ${
                  currentPage === item.id 
                    ? 'text-primary-500' 
                    : 'text-steel-600 hover:text-primary-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-steel-100">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium border border-steel-200 text-steel-700 rounded-md"
              >
                <Phone size={16} className="mr-2" /> +91 98765 43210
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium bg-primary-500 text-white rounded-md"
              >
                Get Quote <ArrowUpRight size={14} className="ml-1.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section - Elegant, confident with background image
const HeroSection = ({ setCurrentPage }) => (
  <section className="hero-bg relative pt-32 pb-24 md:pt-40 md:pb-32" data-testid="hero-section">
    {/* Background Image */}
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.2
      }}
    ></div>
    {/* Gradient Overlay */}
    <div className="hero-overlay"></div>
    
    <div className="hero-content max-w-7xl mx-auto px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-accent-500 tracking-wide uppercase mb-4 animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
          Scaffolding Solutions for India
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          Infrastructure you can
          <span className="block text-accent-500">rely on</span>
        </h1>
        <p className="text-lg md:text-xl text-steel-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
          Engineered formwork and scaffolding for large-scale construction projects. 
          Systems-led delivery. Verified weights. One point of accountability.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to discuss scaffolding requirements for my project`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium bg-accent-500 text-primary-900 rounded-md hover:bg-accent-400 transition-colors"
            data-testid="hero-whatsapp-btn"
          >
            Request a Quote
            <ArrowRight size={16} className="ml-2" />
          </a>
          <button 
            onClick={() => setCurrentPage('inventory')}
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors"
            data-testid="hero-inventory-btn"
          >
            View Equipment
          </button>
        </div>

        {/* Trust indicators - subtle */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-steel-300 animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></div>
            500+ tons ready stock
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></div>
            Same-day delivery available
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></div>
            Serving 50+ builders in NCR
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Stats Section - Clean numbers
const StatsSection = () => (
  <section className="py-20 bg-white border-y border-steel-100" data-testid="stats-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {[
          { value: '40+', label: 'Years', sublabel: 'Industry experience' },
          { value: '500+', label: 'Tons Inventory', sublabel: 'Ready stock' },
          { value: '100+', label: 'Projects', sublabel: 'Successfully delivered' },
          { value: '100%', label: 'On-Time Rate', sublabel: 'Delivery commitment' },
        ].map((stat, index) => (
          <div 
            key={index} 
            data-testid={`stat-${index}`} 
            className="text-center md:text-left animate-fade-in-up opacity-0"
            style={{animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards'}}
          >
            <div className="text-3xl md:text-4xl font-semibold text-primary-500 mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-steel-800">{stat.label}</div>
            <div className="text-xs text-steel-400 mt-0.5">{stat.sublabel}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Equipment Section - Card-based, professional
const EquipmentSection = ({ setCurrentPage }) => {
  const equipment = [
    {
      id: 'cuplock',
      name: 'Cuplock Scaffolding',
      desc: 'Industry standard for high-rise and industrial construction',
      specs: ['Hot-dip galvanized steel', '30 kN load capacity', 'Quick assembly system'],
    },
    {
      id: 'ringlock',
      name: 'Ringlock Scaffolding',
      desc: 'Premium solution for complex structures and curved surfaces',
      specs: ['Q345 steel construction', '40 kN load capacity', '8-way connection points'],
    },
    {
      id: 'slab_props',
      name: 'Adjustable Props',
      desc: 'Heavy-duty support for slab formwork and shoring',
      specs: ['1.8m to 4.0m range', '25 kN load capacity', 'Fine adjustment thread'],
    },
    {
      id: 'ms_ladder',
      name: 'MS Ladders',
      desc: 'Safe access solutions for scaffolding systems',
      specs: ['Anti-slip rungs', '300mm rung spacing', 'Multiple lengths available'],
    },
  ];

  return (
    <section className="py-24 bg-steel-50" data-testid="inventory-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Equipment</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
            Quality scaffolding, ready to deploy
          </h2>
          <p className="text-lg text-steel-500 leading-relaxed">
            Every piece inspected before delivery. Weighbridge-verified quantities. 
            Clear documentation for every transaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {equipment.map((item, index) => (
            <div 
              key={item.id}
              className="card-hover bg-white rounded-lg p-8 border border-steel-100 hover:border-primary-200 transition-all animate-fade-in-up opacity-0"
              data-testid={`inventory-${item.id}`}
              style={{animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards'}}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-steel-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-steel-500">{item.desc}</p>
                </div>
              </div>
              <div className="space-y-2">
                {item.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center text-sm text-steel-600">
                    <CheckCircle size={14} className="text-primary-500 mr-2 flex-shrink-0" />
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setCurrentPage('inventory')}
            className="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
            data-testid="view-inventory-btn"
          >
            View detailed specifications
            <ArrowRight size={16} className="ml-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Calculator Component - Clean, professional
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
    <section className="py-24 bg-white" data-testid="calculator-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
              Get a quick estimate
            </h2>
            <p className="text-lg text-steel-500 leading-relaxed mb-8">
              Use our calculator for a rough estimate. Final pricing is customized based on 
              project requirements and confirmed via WhatsApp within 2 hours.
            </p>
            
            <div className="space-y-4 text-sm text-steel-600">
              <div className="flex items-start">
                <CheckCircle size={16} className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Volume discounts available for large orders</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={16} className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>GST and transportation charged separately</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={16} className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Flexible rental periods with weekly and monthly options</span>
              </div>
            </div>
          </div>

          <div className="bg-steel-50 rounded-lg p-8 border border-steel-100">
            <h3 className="text-lg font-semibold text-steel-900 mb-6">Cost Calculator</h3>
            
            <div className="space-y-5 mb-6">
              <div>
                <label className="block text-sm font-medium text-steel-700 mb-2">Equipment Type</label>
                <select 
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-steel-200 rounded-md text-steel-800 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                  data-testid="calc-equipment"
                >
                  <option value="cuplock">Cuplock Scaffolding</option>
                  <option value="ringlock">Ringlock Scaffolding</option>
                  <option value="slab_props">Adjustable Props</option>
                  <option value="ms_ladder">MS Ladders</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">Quantity (Tons)</label>
                  <input 
                    type="number"
                    value={tonnage}
                    onChange={(e) => setTonnage(Number(e.target.value))}
                    min="1"
                    className="w-full px-4 py-3 bg-white border border-steel-200 rounded-md text-steel-800 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
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
                    className="w-full px-4 py-3 bg-white border border-steel-200 rounded-md text-steel-800 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                    data-testid="calc-days"
                  />
                </div>
              </div>
            </div>

            <button 
              onClick={calculate}
              disabled={loading}
              className="w-full py-3.5 bg-primary-500 text-white text-sm font-medium rounded-md hover:bg-primary-600 transition-colors disabled:opacity-50"
              data-testid="calc-submit"
            >
              {loading ? 'Calculating...' : 'Calculate Estimate'}
            </button>

            {result && (
              <div className="mt-6 pt-6 border-t border-steel-200" data-testid="calc-result">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-steel-500">Equipment</span>
                    <span className="text-steel-700">{result.equipment}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-steel-500">Quantity</span>
                    <span className="text-steel-700">{result.quantity_tons} tons</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-steel-500">Duration</span>
                    <span className="text-steel-700">{result.duration_days} days</span>
                  </div>
                  {result.discount_percent > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-steel-500">Volume discount</span>
                      <span className="text-green-600">{result.discount_percent}% applied</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-steel-200">
                  <span className="font-medium text-steel-700">Estimated Total</span>
                  <span className="text-2xl font-semibold text-primary-500">₹{result.final_cost.toLocaleString()}</span>
                </div>
                <p className="text-xs text-steel-400 mt-3">{result.note}</p>
                
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need a quote for ${result.equipment}. Quantity: ${result.quantity_tons} tons, Duration: ${result.duration_days} days.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center py-3 text-sm font-medium text-primary-500 border border-primary-500 rounded-md hover:bg-primary-50 transition-colors"
                  data-testid="calc-whatsapp"
                >
                  <MessageCircle size={16} className="mr-2" />
                  Get Final Quote
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section - Professional grid
const ServicesSection = ({ setCurrentPage }) => {
  const services = [
    {
      title: 'Equipment Rental',
      desc: 'Cuplock, Ringlock, Props, and Ladders available on flexible rental terms. Daily, weekly, or monthly options with volume discounts.',
      icon: Building2
    },
    {
      title: 'Erection & Dismantling',
      desc: 'Trained crews for safety-compliant installation. Proper anchoring, bracing, and base plate work included.',
      icon: Wrench
    },
    {
      title: 'Safety Audits',
      desc: 'Periodic inspection of installed scaffolding. Load testing, compliance certificates, and remediation recommendations.',
      icon: Shield
    },
    {
      title: 'Emergency Supply',
      desc: '4-hour response time in Gurgaon. 24/7 availability for urgent project requirements.',
      icon: Truck
    },
  ];

  return (
    <section className="py-24 bg-steel-50" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
            End-to-end scaffolding solutions
          </h2>
          <p className="text-lg text-steel-500 leading-relaxed">
            From equipment rental to complete project execution—one partner, one point of contact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg border border-steel-100"
              data-testid={`service-${index}`}
            >
              <service.icon className="text-primary-500 mb-4" size={28} strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-steel-900 mb-2">{service.title}</h3>
              <p className="text-steel-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Section - Clean value props
const WhySection = () => {
  const reasons = [
    { title: 'Exact Delivery Dates', desc: 'Date committed is date delivered. No delays, no excuses.' },
    { title: 'Verified Weights', desc: 'Weighbridge slips with every delivery. No short quantities.' },
    { title: 'Single Point of Contact', desc: 'One accountable person who actually picks up calls.' },
    { title: 'Quality Equipment', desc: 'Inspected and maintained before every deployment.' },
    { title: 'Fast Emergency Response', desc: '4-hour turnaround for urgent Gurgaon requirements.' },
    { title: 'Transparent Pricing', desc: 'Clear quotes, no hidden charges. GST invoiced separately.' },
  ];

  return (
    <section className="py-24 bg-white" data-testid="why-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Why Jakota</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
            Built for reliability at scale
          </h2>
          <p className="text-lg text-steel-500 leading-relaxed">
            Systems-driven processes. No relationship-based shortcuts. Just consistent delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {reasons.map((reason, index) => (
            <div key={index} data-testid={`why-${index}`}>
              <h3 className="text-base font-semibold text-steel-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-steel-500 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Showcase Section for Homepage
const ProjectShowcase = ({ setCurrentPage }) => {
  const showcaseProjects = [
    { image: '/showcase/industrial-silo.jpg', title: 'Industrial Facility', category: 'Industrial' },
    { image: '/showcase/residential-complex.jpg', title: 'Residential Complex', category: 'Residential' },
    { image: '/showcase/pragati-maidan.jpg', title: 'Pragati Maidan', category: 'Exhibition' },
    { image: '/showcase/nestle-facility.jpg', title: 'Nestle Plant', category: 'Industrial' },
  ];

  return (
    <section className="py-24 bg-white" data-testid="showcase-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-steel-900">
              Projects across sectors
            </h2>
          </div>
          <button 
            onClick={() => setCurrentPage('projects')}
            className="hidden md:inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors line-reveal"
          >
            View all projects
            <ArrowRight size={16} className="ml-1.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {showcaseProjects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer animate-scale-in opacity-0"
              onClick={() => setCurrentPage('projects')}
              style={{animationDelay: `${0.1 + idx * 0.15}s`, animationFillMode: 'forwards'}}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-primary-900/90 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-white/70 uppercase tracking-wide">{project.category}</span>
                <h3 className="text-white font-medium mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button 
            onClick={() => setCurrentPage('projects')}
            className="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
          >
            View all projects
            <ArrowRight size={16} className="ml-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// CTA Section - Elegant, not shouty
const CTASection = () => (
  <section className="py-24 bg-primary-500" data-testid="cta-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready to discuss your project?
        </h2>
        <p className="text-lg text-primary-100 mb-10">
          Get a detailed quote within 2 hours. No forms, just a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to discuss scaffolding requirements for my project`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium bg-white text-primary-600 rounded-md hover:bg-steel-50 transition-colors"
            data-testid="cta-whatsapp"
          >
            <MessageCircle size={16} className="mr-2" />
            Message on WhatsApp
          </a>
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors"
            data-testid="cta-call"
          >
            <Phone size={16} className="mr-2" />
            +91 98765 43210
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Footer - Clean, informative
const Footer = ({ setCurrentPage }) => (
  <footer className="bg-steel-900 text-white py-16" data-testid="footer">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <img 
            src="/logo.png" 
            alt="Jakota" 
            className="h-10 w-auto brightness-0 invert mb-4"
          />
          <p className="text-steel-400 text-sm leading-relaxed">
            Engineered formwork and scaffolds for construction projects across Gurgaon and NCR.
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-steel-200 uppercase tracking-wide mb-4">Company</h3>
          <ul className="space-y-3 text-steel-400 text-sm">
            {['About', 'Services', 'Projects', 'Process'].map(item => (
              <li key={item}>
                <button 
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-steel-200 uppercase tracking-wide mb-4">Equipment</h3>
          <ul className="space-y-3 text-steel-400 text-sm">
            <li>Cuplock Scaffolding</li>
            <li>Ringlock Scaffolding</li>
            <li>Adjustable Props</li>
            <li>MS Ladders</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-steel-200 uppercase tracking-wide mb-4">Contact</h3>
          <ul className="space-y-3 text-steel-400 text-sm">
            <li className="flex items-start">
              <MapPin size={14} className="mr-2 mt-1 flex-shrink-0" />
              <span>Sector 37, Gurgaon<br />Haryana 122001</span>
            </li>
            <li className="flex items-center">
              <Phone size={14} className="mr-2 flex-shrink-0" />
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex items-center">
              <MessageCircle size={14} className="mr-2 flex-shrink-0" />
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-steel-800 pt-8 text-steel-500 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Jakota. All rights reserved.</p>
          <p>Serving Gurgaon, Noida, Faridabad, Greater Noida & NCR</p>
        </div>
      </div>
    </div>
  </footer>
);

// Floating Contact - Subtle
const FloatingContact = () => (
  <a 
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to discuss scaffolding requirements`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
    data-testid="floating-whatsapp"
  >
    <MessageCircle size={22} className="text-white" />
  </a>
);

// ===== PAGE COMPONENTS =====

// Home Page
const HomePage = ({ setCurrentPage }) => (
  <>
    <HeroSection setCurrentPage={setCurrentPage} />
    <StatsSection />
    <ProjectShowcase setCurrentPage={setCurrentPage} />
    <ServicesSection setCurrentPage={setCurrentPage} />
    <WhySection />
    <CTASection />
  </>
);

// About Page
const AboutPage = () => (
  <div data-testid="about-page" className="pt-20">
    <section className="py-16 bg-steel-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">About Jakota</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
            40+ Years of Building Better Construction
          </h1>
          <p className="text-lg text-steel-500 leading-relaxed">
            From wooden shuttering to industry-leading MS formwork and scaffolding systems.
          </p>
        </div>
      </div>
    </section>
    
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-steel-900 mb-6">Our Journey</h2>
            <div className="prose prose-steel text-steel-600 leading-relaxed space-y-4">
              <p>
                Our journey began over 40 years ago with a simple vision — to enable better, faster, and safer construction. Starting with wooden shuttering and small-scale factory-level projects, we laid the foundation for a company driven by innovation, trust, and hands-on expertise.
              </p>
              <p>
                As the construction landscape evolved, so did we. Nearly 25 years ago, recognizing the industry's shift toward strength and durability, we transitioned into manufacturing and supplying Mild Steel (MS) Formwork and Scaffolding Systems — a move that defined our growth trajectory and set new benchmarks for quality and reliability.
              </p>
              <p>
                Today, we stand as one of the trusted names in the formwork and scaffolding industry, combining decades of experience with a forward-looking approach to technology, safety, and sustainability.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-steel-900 mb-6">Our Vision</h2>
            <div className="prose prose-steel text-steel-600 leading-relaxed space-y-4">
              <p>
                Our systems are designed to meet the most challenging project requirements — from residential high-rises to industrial infrastructure — ensuring precision, consistency, and performance every single time.
              </p>
              <p>
                As we look to the future, our vision is to lead the modernization of construction support systems in India and beyond, through continuous innovation, digital transformation, and a commitment to eco-friendly engineering.
              </p>
              <p>
                With deep-rooted values, cutting-edge design capabilities, and a passionate team, we continue to build not just structures, but strong, lasting relationships in the industry.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 pt-16 border-t border-steel-100">
          <h2 className="text-2xl font-semibold text-steel-900 mb-10 text-center">Our Milestones</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: '1985', title: 'The Beginning', desc: 'Started with wooden shuttering and factory-level projects' },
              { year: '2000', title: 'MS Transition', desc: 'Shifted to manufacturing MS Formwork and Scaffolding Systems' },
              { year: '2015', title: 'Scale & Growth', desc: 'Expanded operations across NCR with 500+ tons inventory' },
              { year: 'Today', title: 'Industry Leader', desc: 'Trusted partner for high-rises and industrial infrastructure' },
            ].map((milestone, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-semibold text-primary-500 mb-2">{milestone.year}</div>
                <h3 className="font-medium text-steel-800 mb-1">{milestone.title}</h3>
                <p className="text-sm text-steel-500">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 pt-16 border-t border-steel-100">
          <h2 className="text-2xl font-semibold text-steel-900 mb-10 text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'Continuously evolving our systems and processes to meet modern construction demands.' },
              { title: 'Safety', desc: 'Uncompromising commitment to worker safety and structural integrity in every project.' },
              { title: 'Sustainability', desc: 'Eco-friendly engineering practices and durable, reusable systems for minimal environmental impact.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-steel-50 p-8 rounded-lg">
                <h3 className="font-semibold text-steel-800 mb-2">{value.title}</h3>
                <p className="text-sm text-steel-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
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
      minQty: '5 tons minimum',
      description: 'The industry standard for high-rise construction. Quick assembly, reliable load capacity, and universal compatibility.',
      applications: ['High-rise buildings', 'Industrial facilities', 'Commercial complexes', 'Infrastructure projects'],
      specs: [
        { label: 'Material', value: 'Hot-dip galvanized steel' },
        { label: 'Load Capacity', value: 'Up to 30 kN per leg' },
        { label: 'Standard Lengths', value: '0.5m to 3.0m' },
        { label: 'Cup Interval', value: '500mm' },
        { label: 'Surface', value: 'Hot-dip galvanized' },
      ]
    },
    ringlock: {
      name: 'Ringlock Scaffolding',
      minQty: '5 tons minimum',
      description: 'Premium scaffolding for complex structures. 8-directional connections provide maximum flexibility for challenging geometries.',
      applications: ['Curved structures', 'Stadiums & arenas', 'Complex facades', 'Heavy-duty shoring'],
      specs: [
        { label: 'Material', value: 'Q345 Steel, galvanized' },
        { label: 'Load Capacity', value: 'Up to 40 kN per leg' },
        { label: 'Rosette Spacing', value: '500mm intervals' },
        { label: 'Connections', value: '8 directions' },
        { label: 'Surface', value: 'Hot-dip galvanized' },
      ]
    },
    slab_props: {
      name: 'Adjustable Props',
      minQty: '50 pieces minimum',
      description: 'Heavy-duty props for slab support and formwork. Fine-thread adjustment enables precise height settings.',
      applications: ['Slab formwork', 'Beam support', 'Temporary shoring', 'Bridge construction'],
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
      minQty: '2 tons minimum',
      description: 'Safe access ladders for scaffolding systems. Anti-slip rungs and proper spacing ensure worker safety.',
      applications: ['Scaffold access', 'Maintenance work', 'Industrial access', 'Construction sites'],
      specs: [
        { label: 'Material', value: 'Mild Steel' },
        { label: 'Rung Spacing', value: '300mm' },
        { label: 'Width', value: '450mm standard' },
        { label: 'Lengths', value: '2m to 6m' },
        { label: 'Surface', value: 'Powder coated' },
      ]
    },
  };

  const current = inventory[selectedType];

  return (
    <div data-testid="inventory-page" className="pt-20">
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Equipment Catalog</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
              Quality equipment, clear specifications
            </h1>
            <p className="text-lg text-steel-500 leading-relaxed">
              Every piece inspected before delivery. Transparent pricing with no hidden charges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Equipment Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-steel-100 pb-4">
            {Object.keys(inventory).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedType(key)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedType === key
                    ? 'bg-primary-500 text-white'
                    : 'text-steel-600 hover:text-primary-500 hover:bg-steel-50'
                }`}
                data-testid={`inv-tab-${key}`}
              >
                {inventory[key].name}
              </button>
            ))}
          </div>

          {/* Equipment Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-steel-900 mb-2">{current.name}</h2>
              <p className="text-sm text-steel-400 mb-4">{current.minQty}</p>
              <p className="text-steel-500 mb-8 leading-relaxed">{current.description}</p>

              <h3 className="text-sm font-semibold text-steel-800 uppercase tracking-wide mb-4">Applications</h3>
              <ul className="space-y-2 mb-8">
                {current.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center text-sm text-steel-600">
                    <CheckCircle size={14} className="text-steel-400 mr-2" />
                    {app}
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need ${current.name}. Please share availability and quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                data-testid="inv-whatsapp"
              >
                Request Quote
                <ArrowRight size={14} className="ml-2" />
              </a>
            </div>

            <div className="bg-steel-50 rounded-lg p-8">
              <h3 className="text-sm font-semibold text-steel-800 uppercase tracking-wide mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                {current.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-3 border-b border-steel-200 last:border-0">
                    <span className="text-sm text-steel-500">{spec.label}</span>
                    <span className="text-sm font-medium text-steel-800">{spec.value}</span>
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
      title: 'Equipment Rental',
      desc: 'Flexible rental options for projects of all sizes',
      details: [
        'Daily, weekly, and monthly rental terms',
        'Cuplock, Ringlock, Props, and Ladders',
        'Volume discounts for large orders',
        'Transparent pricing, no hidden charges',
        'GST-compliant invoicing',
      ],
      icon: Building2
    },
    {
      title: 'Erection & Dismantling',
      desc: 'Professional installation by trained crews',
      details: [
        'Safety-compliant installation processes',
        'Trained and experienced workers',
        'Proper anchoring and bracing',
        'Base plate and sole board installation',
        'Careful dismantling and handling',
      ],
      icon: Wrench
    },
    {
      title: 'Safety Audits',
      desc: 'Regular inspection and compliance verification',
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
        'Round-the-clock emergency helpline',
        'Immediate dispatch from yard',
        'Priority handling for urgent projects',
        'Dedicated emergency coordinator',
      ],
      icon: Truck
    },
  ];

  return (
    <div data-testid="services-page" className="pt-20">
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Services</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
              Complete scaffolding solutions
            </h1>
            <p className="text-lg text-steel-500 leading-relaxed">
              From equipment rental to full project execution—one partner for everything.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={idx} className="grid lg:grid-cols-2 gap-12 items-start" data-testid={`svc-${idx}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <service.icon className="text-primary-500 mb-4" size={32} strokeWidth={1.5} />
                  <h2 className="text-2xl font-semibold text-steel-900 mb-2">{service.title}</h2>
                  <p className="text-steel-500 mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-sm text-steel-600">
                        <CheckCircle size={14} className="text-steel-400 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-steel-100 rounded-lg h-64 flex items-center justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <service.icon className="text-steel-300" size={64} strokeWidth={1} />
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
  const projects = [
    {
      id: '1',
      title: 'Adani Samsara',
      location: 'Gurgaon',
      category: 'Residential',
      image: '/projects/adani-samsara.jpg',
      description: 'Premium residential complex with modern amenities',
      equipment: 'Cuplock Scaffolding',
    },
    {
      id: '2',
      title: 'Adani Wilmar',
      location: 'Gohana',
      category: 'Industrial',
      image: '/projects/adani-wilmar.jpg',
      description: 'Large-scale industrial grain storage facility',
      equipment: 'Ringlock Scaffolding',
    },
    {
      id: '3',
      title: 'Bank of Baroda',
      location: 'Connaught Place, New Delhi',
      category: 'Commercial',
      image: '/projects/bank-of-baroda.webp',
      description: 'Heritage commercial building renovation',
      equipment: 'Cuplock Scaffolding',
    },
    {
      id: '4',
      title: 'Barauni Refinery',
      location: 'Bihar',
      category: 'Industrial',
      image: '/projects/barauni-refinery.jpg',
      description: 'Major refinery maintenance and expansion project',
      equipment: 'Ringlock Scaffolding',
    },
    {
      id: '5',
      title: 'Rajasthan House',
      location: 'Prithviraj Road, New Delhi',
      category: 'Government',
      image: '/projects/rajasthan-house.jpg',
      description: 'Prestigious government building construction',
      equipment: 'Cuplock Scaffolding',
    },
  ];

  return (
    <div data-testid="projects-page" className="pt-20">
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Projects</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
              Proven track record across India
            </h1>
            <p className="text-lg text-steel-500 leading-relaxed">
              From residential complexes to industrial facilities — delivering quality scaffolding solutions across sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group border border-steel-100 rounded-lg overflow-hidden hover:border-steel-200 hover:shadow-sm transition-all" data-testid={`project-${project.id}`}>
                <div className="aspect-[4/3] overflow-hidden bg-steel-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary-500 uppercase tracking-wide">{project.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-steel-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-steel-500 flex items-center mb-3">
                    <MapPin size={12} className="mr-1" />
                    {project.location}
                  </p>
                  <p className="text-sm text-steel-500">{project.description}</p>
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
    { step: 1, title: 'Enquiry', desc: 'Share your requirements via WhatsApp or call. Equipment type, quantity, duration, and site location.', time: '5 minutes' },
    { step: 2, title: 'Site Assessment', desc: 'For large orders, we visit the site to assess requirements, access routes, and delivery logistics.', time: 'Same day' },
    { step: 3, title: 'Quotation', desc: 'Detailed quote with terms and delivery schedule. Clear GST breakup with no hidden charges.', time: '2 hours' },
    { step: 4, title: 'Confirmation', desc: 'Advance payment and PO or email confirmation. Delivery date is locked and committed.', time: '1 day' },
    { step: 5, title: 'Delivery', desc: 'Material reaches site with weighbridge slip. Quantity verified and documented on-site.', time: 'As scheduled' },
    { step: 6, title: 'Ongoing Support', desc: 'Single point of contact throughout the rental period. 24/7 emergency support available.', time: 'Continuous' },
  ];

  return (
    <div data-testid="process-page" className="pt-20">
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Process</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
              Systematic. Predictable. Reliable.
            </h1>
            <p className="text-lg text-steel-500 leading-relaxed">
              No surprises. Clear steps from enquiry to delivery, with committed timelines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-12 pb-12 last:pb-0" data-testid={`step-${idx}`}>
                {idx < steps.length - 1 && (
                  <div className="absolute left-[18px] top-8 w-px h-full bg-steel-200"></div>
                )}
                <div className="absolute left-0 w-9 h-9 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {step.step}
                </div>
                <div className="pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-steel-900">{step.title}</h3>
                    <span className="text-xs text-steel-400 font-medium">{step.time}</span>
                  </div>
                  <p className="text-steel-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-steel-50 rounded-lg border border-steel-100">
            <h3 className="text-lg font-semibold text-steel-900 mb-2">Our Delivery Guarantee</h3>
            <p className="text-steel-500 text-sm leading-relaxed mb-4">
              If we miss the committed delivery date by more than 24 hours, you receive a 10% discount on that order. No questions asked, no exceptions.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to start a scaffolding enquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
            >
              Start your enquiry
              <ArrowRight size={14} className="ml-1.5" />
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
    <div data-testid="testimonials-page" className="pt-20">
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Clients</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
              Trusted by NCR's leading builders
            </h1>
            <p className="text-lg text-steel-500 leading-relaxed">
              From large developers to infrastructure contractors—partnerships built on consistent delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-steel-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-steel-400 uppercase tracking-wide mb-6 text-center">Companies we've worked with</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {clients.map((client, idx) => (
              <span key={idx} className="text-sm text-steel-500 font-medium">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-lg border border-steel-100" data-testid={`testimonial-${item.id}`}>
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-steel-600 text-sm leading-relaxed mb-6">"{item.quote}"</p>
                <div>
                  <p className="font-medium text-steel-800 text-sm">{item.name}</p>
                  <p className="text-steel-400 text-xs">{item.designation}, {item.company}</p>
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
    <div data-testid="contact-page" className="pt-20">
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary-500 tracking-wide uppercase mb-3">Contact</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-steel-900 mb-4">
              Let's discuss your project
            </h1>
            <p className="text-lg text-steel-500 leading-relaxed">
              WhatsApp is fastest for quotes. Or use the form below for detailed requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-steel-900 mb-6">Get in touch</h2>
              
              <div className="space-y-6 mb-10">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to discuss scaffolding requirements for my project`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-steel-200 rounded-lg hover:border-primary-500 transition-colors"
                  data-testid="contact-whatsapp"
                >
                  <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-steel-800 text-sm">WhatsApp</p>
                    <p className="text-steel-500 text-xs">Response within 15 minutes</p>
                  </div>
                </a>

                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center p-4 border border-steel-200 rounded-lg hover:border-primary-500 transition-colors"
                  data-testid="contact-call"
                >
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mr-4">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-steel-800 text-sm">+91 98765 43210</p>
                    <p className="text-steel-500 text-xs">Mon–Sat, 8 AM – 8 PM</p>
                  </div>
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-steel-800 uppercase tracking-wide mb-4">Office</h3>
                <div className="text-sm text-steel-500 space-y-2">
                  <p className="font-medium text-steel-700">Jakota Scaffolding</p>
                  <p>Plot No. 45, Industrial Area</p>
                  <p>Sector 37, Gurgaon, Haryana 122001</p>
                  <p className="pt-2">Yard Hours: 7 AM – 9 PM (All days)</p>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-3">
              <div className="bg-steel-50 p-8 rounded-lg border border-steel-100">
                <h2 className="text-lg font-semibold text-steel-900 mb-6">Request a quote</h2>
                
                {success ? (
                  <div className="text-center py-12" data-testid="form-success">
                    <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-steel-800 mb-2">Request submitted</h3>
                    <p className="text-steel-500 text-sm mb-4">We'll contact you within 2 hours.</p>
                    <button 
                      onClick={() => setSuccess(false)}
                      className="text-sm text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-steel-700 mb-1.5">Name *</label>
                        <input 
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({...form, name: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white border border-steel-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                          data-testid="form-name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-steel-700 mb-1.5">Company *</label>
                        <input 
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({...form, company: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white border border-steel-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                          data-testid="form-company"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-steel-700 mb-1.5">Phone *</label>
                        <input 
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({...form, phone: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white border border-steel-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                          data-testid="form-phone"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-steel-700 mb-1.5">Email</label>
                        <input 
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({...form, email: e.target.value})}
                          className="w-full px-4 py-2.5 bg-white border border-steel-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                          data-testid="form-email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">Equipment Type *</label>
                      <select 
                        value={form.equipment_type}
                        onChange={(e) => setForm({...form, equipment_type: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white border border-steel-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                        data-testid="form-equipment"
                      >
                        <option value="cuplock">Cuplock Scaffolding</option>
                        <option value="ringlock">Ringlock Scaffolding</option>
                        <option value="slab_props">Adjustable Props</option>
                        <option value="ms_ladder">MS Ladders</option>
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-steel-700 mb-1.5">Quantity (Tons) *</label>
                        <input 
                          type="number"
                          required
                          min="1"
                          value={form.quantity_tons}
                          onChange={(e) => setForm({...form, quantity_tons: Number(e.target.value)})}
                          className="w-full px-4 py-2.5 bg-white border border-steel-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                          data-testid="form-quantity"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-steel-700 mb-1.5">Duration (Days) *</label>
                        <input 
                          type="number"
                          required
                          min="1"
                          value={form.duration_days}
                          onChange={(e) => setForm({...form, duration_days: Number(e.target.value)})}
                          className="w-full px-4 py-2.5 bg-white border border-steel-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                          data-testid="form-duration"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">Project Location *</label>
                      <input 
                        type="text"
                        required
                        placeholder="Site address in Gurgaon / NCR"
                        value={form.project_location}
                        onChange={(e) => setForm({...form, project_location: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white border border-steel-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                        data-testid="form-location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">Additional Notes</label>
                      <textarea 
                        rows="3"
                        value={form.message}
                        onChange={(e) => setForm({...form, message: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white border border-steel-200 rounded-md text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                        placeholder="Any specific requirements or questions?"
                        data-testid="form-message"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-primary-500 text-white text-sm font-medium rounded-md hover:bg-primary-600 transition-colors disabled:opacity-50"
                      data-testid="form-submit"
                    >
                      {loading ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </form>
                )}
              </div>
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
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
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <FloatingContact />
    </div>
  );
}

export default App;

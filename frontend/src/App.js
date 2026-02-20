import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Shield, Truck, CheckCircle, ChevronRight, Menu, X, Calculator, Users, Building2, Wrench, FileText, ArrowRight, Star, ChevronDown, ArrowUpRight, Award } from 'lucide-react';

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
    { id: 'inventory', label: 'Solutions' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setCurrentPage('home')}
            data-testid="logo"
          >
            <img 
              src="/logo-new.png" 
              alt="Jakota" 
              className="h-14 md:h-16 w-auto"
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
                    ? 'text-[#f5a623]' 
                    : 'text-[#1e3a5f] hover:text-[#f5a623]'
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
              className="text-sm text-[#1e3a5f] hover:text-[#f5a623] transition-colors"
              data-testid="header-call-btn"
            >
              +91 98765 43210
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to discuss scaffolding requirements for my project`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold bg-[#f5a623] text-[#1e3a5f] rounded-md hover:bg-[#e09000] transition-colors"
              data-testid="header-whatsapp-btn"
            >
              Get Techno Commercial Proposal
              <ArrowUpRight size={14} className="ml-1.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-[#1e3a5f]"
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
                    ? 'text-[#f5a623]' 
                    : 'text-[#1e3a5f] hover:text-[#f5a623]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-steel-100">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium border border-[#1e3a5f] text-[#1e3a5f] rounded-md"
              >
                <Phone size={16} className="mr-2" /> +91 98765 43210
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold bg-[#f5a623] text-[#1e3a5f] rounded-md"
              >
                Get Techno Commercial Proposal <ArrowUpRight size={14} className="ml-1.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section - Bold JAKOTA Branding with Image Carousel
const HeroSection = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    '/hero/slide1.jpg',
    '/hero/slide2.jpg',
    '/hero/slide3.jpg',
    '/hero/slide4.jpg',
    '/hero/slide5.jpg',
    '/hero/slide6.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
  <section className="relative pt-20 pb-0 overflow-hidden bg-[#1e3a5f]" data-testid="hero-section">
    {/* Navy branded top section */}
    <div className="bg-[#1e3a5f] text-white pt-8 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide">JAKOTA</span>
              <span className="block text-lg md:text-xl lg:text-2xl font-normal text-white/90 mt-3 tracking-wide">Engineered Formwork & Scaffolds</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              Precision-engineered systems for large-scale construction. 
              40+ years of experience. Zero compromises on quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to discuss scaffolding requirements for my project`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover inline-flex items-center justify-center px-8 py-4 text-sm font-semibold bg-[#f5a623] text-[#1e3a5f] rounded-md hover:bg-[#e09000] transition-all shadow-lg"
                data-testid="hero-whatsapp-btn"
              >
                Get Techno Commercial Proposal
                <ArrowRight size={18} className="ml-2" />
              </a>
              <button 
                onClick={() => setCurrentPage('inventory')}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-white/30 rounded-md hover:bg-white/10 transition-all"
                data-testid="hero-inventory-btn"
              >
                View Solutions
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <div>
                <div className="text-3xl font-bold text-[#f5a623]">5000+</div>
                <div className="text-sm text-white/70">Tons Ready Stock</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#f5a623]">350+</div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#f5a623]">40+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image Carousel */}
          <div className="hidden lg:block relative animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Slides */}
              <div className="relative h-[500px]">
                {heroImages.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`JAKOTA Project ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      currentSlide === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent"></div>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === idx ? 'bg-[#f5a623] w-6' : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#1e3a5f]/60 uppercase tracking-wide">Trusted By</div>
                      <div className="text-sm font-semibold text-[#1e3a5f]">100+ Builders Across India</div>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-xs font-bold">A</div>
                      <div className="w-8 h-8 rounded-full bg-[#f5a623] flex items-center justify-center text-[#1e3a5f] text-xs font-bold">B</div>
                      <div className="w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-xs font-bold">+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Yellow accent strip */}
    <div className="h-2 bg-[#f5a623]"></div>
    
    {/* Client Logo Band */}
    <div className="bg-white py-6 border-b border-steel-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-steel-400 uppercase tracking-widest mb-4">Trusted By Industry Leaders</p>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-scroll" style={{ width: 'fit-content' }}>
          {/* First set of logos */}
          {[
            { src: '/clients/dlf.png', alt: 'DLF' },
            { src: '/clients/emaar.png', alt: 'Emaar' },
            { src: '/clients/godrej.png', alt: 'Godrej' },
            { src: '/clients/m3m.png', alt: 'M3M' },
            { src: '/clients/medanta.png', alt: 'Medanta' },
            { src: '/clients/samsara.png', alt: 'Samsara' },
          ].map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 mx-12 flex items-center justify-center h-16">
              <img src={logo.src} alt={logo.alt} className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {[
            { src: '/clients/dlf.png', alt: 'DLF' },
            { src: '/clients/emaar.png', alt: 'Emaar' },
            { src: '/clients/godrej.png', alt: 'Godrej' },
            { src: '/clients/m3m.png', alt: 'M3M' },
            { src: '/clients/medanta.png', alt: 'Medanta' },
            { src: '/clients/samsara.png', alt: 'Samsara' },
          ].map((logo, idx) => (
            <div key={`dup-${idx}`} className="flex-shrink-0 mx-12 flex items-center justify-center h-16">
              <img src={logo.src} alt={logo.alt} className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

// Stats Section - Navy branded
const StatsSection = () => (
  <section className="py-16 bg-steel-50" data-testid="stats-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-[#1e3a5f] rounded-2xl p-8 md:p-12 shadow-xl">
        <div className="text-center mb-10">
          <p className="text-[#f5a623] text-sm font-semibold tracking-widest uppercase mb-2">WHY CHOOSE JAKOTA</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Built on Trust. Driven by Precision.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: '40+', label: 'Years', sublabel: 'Industry Experience', icon: '🏗️' },
            { value: '5000+', label: 'Tons', sublabel: 'Ready Inventory', icon: '📦' },
            { value: '350+', label: 'Projects', sublabel: 'Successfully Delivered', icon: '✅' },
            { value: '100%', label: 'On-Time', sublabel: 'Delivery Commitment', icon: '⏱️' },
          ].map((stat, index) => (
            <div 
              key={index} 
              data-testid={`stat-${index}`} 
              className="text-center animate-fade-in-up opacity-0"
              style={{animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards'}}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-[#f5a623] mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-white">{stat.label}</div>
              <div className="text-xs text-white/60 mt-0.5">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Vision Mission Goals Section
const VisionMissionGoals = () => (
  <section className="py-20 bg-white" data-testid="vision-mission-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">WHO WE ARE</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">Our Foundation</h2>
        <div className="w-20 h-1 bg-[#f5a623] mx-auto mt-4"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Vision */}
        <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white transform hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 bg-[#f5a623] rounded-xl flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-white">Our Vision</h3>
          <p className="text-white/80 leading-relaxed">
            To be India's most trusted partner in construction infrastructure, setting the benchmark for quality, reliability, and innovation in formwork and scaffolding solutions.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-steel-50 rounded-2xl p-8 border-2 border-[#1e3a5f]/10 transform hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#f5a623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-[#1e3a5f]">Our Mission</h3>
          <p className="text-steel-600 leading-relaxed">
            To empower contractors and builders with precision-engineered systems that ensure faster execution, superior safety, and consistent quality — delivered with accountability and zero compromise.
          </p>
        </div>

        {/* Goals */}
        <div className="bg-[#f5a623] rounded-2xl p-8 transform hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#f5a623]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 text-[#1e3a5f]">Our Goals</h3>
          <p className="text-[#1e3a5f]/80 leading-relaxed">
            Expand our inventory to 10,000+ tons, serve 500+ projects annually, and establish JAKOTA as the preferred scaffolding partner for India's top construction firms.
          </p>
        </div>
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
                  Get Final Techno Commercial Proposal
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
          Get a detailed techno commercial proposal within 2 hours. No forms, just a conversation.
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
            src="/logo.svg" 
            alt="Jakota" 
            className="h-14 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-steel-400 text-sm leading-relaxed">
            Engineered formwork and scaffolds for construction projects across Gurgaon and NCR.
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-steel-200 uppercase tracking-wide mb-4">Company</h3>
          <ul className="space-y-3 text-steel-400 text-sm">
            {['About', 'Services', 'Projects', 'Process', 'Careers'].map(item => (
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
    <VisionMissionGoals />
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

// Inventory Page - MS Formwork & Scaffolding Systems
const InventoryPage = () => {
  const [activeTab, setActiveTab] = useState('formwork');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const ReadMoreSection = ({ id, shortText, fullText }) => {
    const isExpanded = expandedSections[id];
    return (
      <div className="text-steel-600 leading-relaxed">
        <p>{shortText}</p>
        {fullText && (
          <>
            {isExpanded && <div className="mt-3 text-steel-600 leading-relaxed">{fullText}</div>}
            <button
              onClick={() => toggleSection(id)}
              className="mt-2 text-sm font-medium text-[#1e3a5f] hover:text-[#152d4a] transition-colors flex items-center"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
              <ChevronDown size={16} className={`ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <div data-testid="inventory-page" className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">JAKOTA SOLUTIONS</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1e3a5f] mb-2 tracking-wide">
              MS Formwork & Scaffolding Systems
            </h1>
            <div className="w-24 h-1 bg-[#1e3a5f] mb-6"></div>
            <p className="text-lg text-steel-500 leading-relaxed">
              Engineered systems built for precision, durability, and operational efficiency across large-scale construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-steel-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('formwork')}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'formwork'
                  ? 'border-[#1e3a5f] text-[#1e3a5f]'
                  : 'border-transparent text-steel-500 hover:text-[#1e3a5f]'
              }`}
            >
              MS Formwork
            </button>
            <button
              onClick={() => setActiveTab('scaffolding')}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'scaffolding'
                  ? 'border-[#1e3a5f] text-[#1e3a5f]'
                  : 'border-transparent text-steel-500 hover:text-[#1e3a5f]'
              }`}
            >
              Scaffolding Systems
            </button>
          </div>
        </div>
      </section>

      {/* Formwork Content */}
      {activeTab === 'formwork' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Brand-Forward Introduction */}
            <div className="max-w-4xl mb-16">
              <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">MS FORMWORK SOLUTIONS</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1e3a5f] mb-6 tracking-wide">Precision-Engineered Concrete Shaping Systems</h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  At <span className="font-semibold text-[#1e3a5f]">JAKOTA</span>, MS Formwork is engineered as a concrete shaping and execution system, designed to control dimensions, cycle time, and surface quality across repetitive structural pours. MS Formwork directly defines the final concrete structure — making its precision and reliability critical to project outcomes.
                </p>
                <p>
                  <span className="font-semibold text-[#1e3a5f]">JAKOTA</span> MS Formwork systems are manufactured using high-strength mild steel panels with tight tolerances, enabling accurate slab thickness, straight edges, and consistent profiles across beams, columns, and slabs. The system is designed for repeated reuse, delivering uniform results across multiple floors and large project footprints.
                </p>
              </div>
            </div>

            {/* How JAKOTA MS Formwork Helps Contractors */}
            <div className="mb-16">
              <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">CONTRACTOR BENEFITS</p>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-8 tracking-wide">How JAKOTA MS Formwork Helps Contractors</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Faster Slab Cycles',
                    desc: 'Standardized panels and quick-lock connections reduce assembly and striking time, enabling predictable and faster floor-to-floor cycles.'
                  },
                  {
                    title: 'Reduced Labour Dependency',
                    desc: 'Modular, repeatable components minimize the need for highly skilled shuttering carpenters, lowering labour risk and cost volatility.'
                  },
                  {
                    title: 'Consistent Concrete Finish',
                    desc: 'Steel contact surfaces deliver uniform finishes, reducing plaster thickness, rework, and finishing costs.'
                  },
                  {
                    title: 'Higher Structural Accuracy',
                    desc: 'Controlled alignment and locking systems maintain dimensional accuracy, reducing deviations and downstream corrections.'
                  },
                  {
                    title: 'Lower Cost Per Use',
                    desc: 'High reuse capability spreads cost over multiple pours, improving overall project economics.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#1e3a5f] p-6 rounded-lg text-white">
                    <h4 className="font-semibold mb-3 tracking-wide text-white">{item.title}</h4>
                    <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Components */}
            <div className="mb-16">
              <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">SYSTEM COMPONENTS</p>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2 tracking-wide">Formwork System Architecture</h3>
              <div className="w-16 h-0.5 bg-[#1e3a5f] mb-8"></div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Adjustable Props */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">MS Adjustable Props</h4>
                  <ReadMoreSection
                    id="props"
                    shortText="MS Adjustable Props are precision load-support devices used in formwork systems to temporarily carry slab and beam loads while allowing accurate height control during construction."
                    fullText={
                      <p>Manufactured from high-grade mild steel with reinforced inner–outer tube construction, JAKOTA MS Adjustable Props deliver high axial load capacity and resistance to buckling under fresh concrete loads. The precision-threaded adjustment mechanism allows fine elevation control, ensuring correct slab levels and consistent formwork alignment across pours. Designed for repetitive deployment and heavy site use, they retain smooth adjustability and structural integrity over extended service life.</p>
                    }
                  />
                </div>

                {/* MS Plates */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">MS Plates</h4>
                  <ReadMoreSection
                    id="plates"
                    shortText="MS Plates serve as load distribution and reinforcement elements within scaffolding and formwork systems, used wherever concentrated loads need to be spread or surfaces need protection."
                    fullText={
                      <p>Manufactured from quality-controlled mild steel with consistent thickness and flatness, JAKOTA MS Plates provide high compressive resistance and dimensional stability under sustained site loads. Their rigid profile helps prevent point loading, ground settlement, and surface damage when used beneath base jacks, props, or temporary supports. Designed for rugged, repetitive site use, they maintain shape and performance across multiple deployment cycles.</p>
                    }
                  />
                </div>

                {/* MS Channels */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">MS Channels</h4>
                  <ReadMoreSection
                    id="channels"
                    shortText="MS Channels function as secondary structural members within scaffolding and formwork applications, used to support spans, distribute loads, and create rigid framing."
                    fullText={
                      <p>Manufactured from quality-controlled mild steel with uniform section profiles, JAKOTA MS Channels provide high bending strength and consistent load behavior across repeated use. Their open-section geometry allows efficient integration with props, jacks, clamps, and panels, making them ideal for slab edges, beam supports, and customized formwork arrangements. Designed for demanding site conditions and high reuse cycles, they retain dimensional integrity and performance over extended deployment.</p>
                    }
                  />
                </div>

                {/* MS Pipes */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">MS Pipes</h4>
                  <ReadMoreSection
                    id="pipes-formwork"
                    shortText="MS Pipes serve as versatile structural members within scaffolding and formwork applications, used for load support, bracing, and customized site configurations."
                    fullText={
                      <p>Produced from quality-controlled mild steel and formed to precise dimensional tolerances, JAKOTA MS Pipes offer excellent load-bearing capacity, resistance to bending, and long service life. Their uniform circular profile ensures predictable structural behavior, making them suitable for both standard and customized scaffold arrangements. Designed for high reuse cycles and rugged site conditions, they integrate seamlessly with couplers, clamps, braces, and other scaffolding accessories.</p>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Formwork Accessories */}
            <div className="mb-16">
              <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">ACCESSORIES</p>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2 tracking-wide">Formwork Accessories</h3>
              <div className="w-16 h-0.5 bg-[#1e3a5f] mb-4"></div>
              <p className="text-steel-600 mb-8">These accessories perform critical control functions within formwork and support systems — reinforcing alignment, regulating load transfer, and ensuring stability during execution.</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: 'MS Angles',
                    desc: 'Used as secondary framing and edge-support members, providing stiffness and shape control in slab edges, beam sides, and customized formwork arrangements.'
                  },
                  {
                    title: 'Base Plates',
                    desc: 'Distribute concentrated loads from props and supports over a wider surface area, reducing ground stress and improving foundation stability.'
                  },
                  {
                    title: 'Prop Nuts',
                    desc: 'Enable controlled height adjustment and secure locking of adjustable props with precision threading for smooth movement and accurate elevation setting.'
                  },
                  {
                    title: 'Prop Sleeves',
                    desc: 'Act as reinforcement and adjustment interfaces within adjustable prop systems, enhancing load capacity and maintaining concentric alignment.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-steel-50 p-5 rounded-lg border-l-4 border-[#1e3a5f]">
                    <h4 className="font-semibold text-[#1e3a5f] mb-2 text-sm">{item.title}</h4>
                    <p className="text-xs text-steel-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formwork Applications */}
            <div className="bg-[#1e3a5f] text-white p-8 rounded-lg">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-white/70">APPLICATION SCOPE</p>
              <h3 className="font-semibold mb-4 tracking-wide">Structural Applications</h3>
              <div className="flex flex-wrap gap-3">
                {['Slabs', 'Beams', 'Columns', 'Shear Walls', 'Foundations', 'Staircases', 'Retaining Structures'].map((app, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-white/10 rounded-full text-sm border border-white/20">{app}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Scaffolding Content */}
      {activeTab === 'scaffolding' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Introduction */}
            <div className="max-w-4xl mb-16">
              <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">SCAFFOLDING SOLUTIONS</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1e3a5f] mb-6 tracking-wide">Engineered Safety & Productivity Systems</h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  At <span className="font-semibold text-[#1e3a5f]">JAKOTA</span>, scaffolding is engineered as a critical safety and productivity system — not a temporary structure. Our scaffolding solutions provide secure access, dependable support, and stable working platforms, forming the foundation for disciplined and efficient construction environments.
                </p>
                <p>
                  Manufactured using high-grade steel and precision-engineered components, <span className="font-semibold text-[#1e3a5f]">JAKOTA</span> scaffolding systems deliver exceptional load capacity, structural stability, and repeatable performance across residential, commercial, industrial, and infrastructure projects. The modular design enables rapid erection and dismantling, ensuring faster site cycles without compromising safety.
                </p>
              </div>
            </div>

            {/* Structural Components */}
            <div className="mb-16">
              <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">STRUCTURAL COMPONENTS</p>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2 tracking-wide">Primary Load-Bearing Elements</h3>
              <div className="w-16 h-0.5 bg-[#1e3a5f] mb-8"></div>
              
              <div className="space-y-6">
                {/* Verticals */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3 text-lg">Vertical Standards</h4>
                  <ReadMoreSection
                    id="verticals"
                    shortText="Vertical Standards are the primary load-bearing elements of a scaffolding system, responsible for transferring working loads safely from elevated platforms to the ground. At JAKOTA, vertical standards are engineered as precision structural components, designed to deliver strength, stability, and consistent alignment across all working levels."
                    fullText={
                      <div className="space-y-3">
                        <p>Manufactured from high-strength steel under stringent quality controls, JAKOTA Vertical Standards provide excellent axial load capacity, resistance to deformation, and long-term durability. The standardized connection points ensure accurate ledger and brace integration, maintaining uniform geometry and structural integrity throughout the scaffold structure.</p>
                        <p>To support varied height requirements and site conditions, JAKOTA Vertical Standards are available in six standardized lengths ranging from 0.5 metres to 3.0 metres. This dimensional flexibility allows contractors to achieve precise elevations while minimizing adjustments, material wastage, and erection time.</p>
                        <p>Designed for rapid assembly, high reuse cycles, and demanding construction environments, JAKOTA Vertical Standards integrate seamlessly with base jacks, ledgers, braces, and accessories — forming a reliable and scalable scaffolding framework.</p>
                      </div>
                    }
                  />
                </div>

                {/* Horizontal Ledgers */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3 text-lg">Horizontal Ledgers</h4>
                  <ReadMoreSection
                    id="ledgers"
                    shortText="Ledgers are the primary horizontal members of a scaffolding system, connecting vertical standards and forming the framework that supports working platforms and distributes loads evenly across the structure. At JAKOTA, ledgers are engineered as precision structural components, designed to deliver rigidity, alignment, and dependable load transfer at every working level."
                    fullText={
                      <div className="space-y-3">
                        <p>Manufactured from high-strength steel under strict quality controls, JAKOTA Ledgers provide excellent bending strength and resistance to deflection, ensuring consistent system geometry even under heavy working loads. The accurately positioned connection ends allow quick and secure engagement with vertical standards, maintaining structural continuity throughout the scaffold.</p>
                        <p>Designed for rapid installation, high reuse cycles, and demanding site conditions, JAKOTA Ledgers integrate seamlessly with standards, braces, platforms, and safety components — creating a rigid and stable working framework.</p>
                      </div>
                    }
                  />
                </div>

                {/* MS Pipes */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3 text-lg">MS Pipes</h4>
                  <ReadMoreSection
                    id="pipes"
                    shortText="MS Pipes serve as versatile structural members within scaffolding and formwork applications, used for load support, bracing, and customized site configurations. At JAKOTA, MS Pipes are manufactured as high-integrity steel components, engineered to deliver strength, reliability, and consistent performance across demanding construction environments."
                    fullText={
                      <div className="space-y-3">
                        <p>Produced from quality-controlled mild steel and formed to precise dimensional tolerances, JAKOTA MS Pipes offer excellent load-bearing capacity, resistance to bending, and long service life. Their uniform circular profile ensures predictable structural behavior, making them suitable for both standard and customized scaffold arrangements.</p>
                        <p>Designed for high reuse cycles and rugged site conditions, JAKOTA MS Pipes integrate seamlessly with couplers, clamps, braces, and other scaffolding accessories — enabling flexible configurations without compromising structural integrity.</p>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Connection & Support Elements */}
            <div className="mb-16">
              <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">CONNECTION SYSTEMS</p>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2 tracking-wide">Load Transfer & Positioning Elements</h3>
              <div className="w-16 h-0.5 bg-[#1e3a5f] mb-8"></div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Base Jacks */}
                <div className="bg-steel-50 p-6 rounded-lg border-l-4 border-[#1e3a5f]">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">Base Jacks</h4>
                  <ReadMoreSection
                    id="basejacks"
                    shortText="Base Jacks establish the first point of control in a scaffolding system. They are responsible for correcting ground irregularities, stabilizing vertical alignment, and ensuring that loads enter the structure in a controlled and predictable manner."
                    fullText={
                      <div className="space-y-3">
                        <p>Fabricated from heavy-duty steel and designed to perform under continuous compressive stress, JAKOTA Base Jacks maintain thread integrity and structural stiffness even under demanding site loads. The precision-machined spindle allows fine height adjustment, enabling accurate leveling and reducing stress concentration at the base of the scaffold.</p>
                        <p>By controlling load entry and alignment at ground level, JAKOTA Base Jacks improve overall system stability, erection accuracy, and long-term safety performance.</p>
                      </div>
                    }
                  />
                </div>

                {/* U Jacks */}
                <div className="bg-steel-50 p-6 rounded-lg border-l-4 border-[#1e3a5f]">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">U Jacks</h4>
                  <ReadMoreSection
                    id="ujacks"
                    shortText="U Jacks function as the final load interface between the scaffolding system and supported structural elements such as beams and formwork panels. At JAKOTA, U Jacks are engineered as precision load-positioning components."
                    fullText={
                      <div className="space-y-3">
                        <p>Manufactured from high-strength steel with reinforced threaded spindles, JAKOTA U Jacks provide controlled height adjustment while maintaining rigidity under fresh concrete loads. The accurately formed U-head ensures proper seating of beams, minimizing displacement and maintaining consistent load transfer during pouring operations.</p>
                        <p>By delivering controlled load positioning and alignment at the top of the system, JAKOTA U Jacks support faster execution, improved accuracy, and reduced on-site correction.</p>
                      </div>
                    }
                  />
                </div>

                {/* Clamps/Couplers */}
                <div className="bg-steel-50 p-6 rounded-lg border-l-4 border-[#1e3a5f]">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">Clamps / Couplers</h4>
                  <ReadMoreSection
                    id="clamps"
                    shortText="Clamps are the decision points in a scaffolding system — they determine how forces are transferred, how geometry is maintained, and how reliably the structure behaves under load. At JAKOTA, clamps are engineered as structural connectors, not temporary fasteners."
                    fullText={
                      <div className="space-y-3">
                        <p>Manufactured from high-grade steel and formed to precise tolerances, JAKOTA Clamps are designed to deliver consistent grip, controlled torque response, and resistance to slippage under dynamic site conditions. Their geometry ensures secure pipe engagement while preserving the integrity of connected members.</p>
                        <p>JAKOTA offers a complete range of clamps — including right-angle, swivel, and specialized couplers — enabling accurate alignment, load continuity, and adaptability across varied scaffold configurations. Each clamp is built to maintain connection reliability through repeated tightening cycles without loss of performance.</p>
                      </div>
                    }
                  />
                </div>

                {/* Spigot / Joint Pins */}
                <div className="bg-steel-50 p-6 rounded-lg border-l-4 border-[#1e3a5f]">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">Spigot / Joint Pins</h4>
                  <ReadMoreSection
                    id="spigots"
                    shortText="Joint Pins act as vertical continuity elements within a scaffolding system, ensuring that stacked members behave as a single, uninterrupted structural line. At JAKOTA, Joint Pins are engineered as alignment-critical connectors."
                    fullText={
                      <div className="space-y-3">
                        <p>Manufactured from high-strength steel with controlled dimensional tolerances, JAKOTA Joint Pins ensure accurate engagement between vertical members, minimizing eccentric loading and unwanted movement at joints. Their geometry is designed to maintain coaxial alignment, allowing compressive loads to pass cleanly through connected standards without inducing stress concentrations.</p>
                        <p>By safeguarding vertical alignment and load continuity, JAKOTA Joint Pins play a critical role in improving system stiffness, erection accuracy, and overall safety performance across multi-level scaffolding installations.</p>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Working Platforms & Safety */}
            <div className="mb-16">
              <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">WORKING PLATFORMS</p>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2 tracking-wide">Access & Load Distribution Elements</h3>
              <div className="w-16 h-0.5 bg-[#1e3a5f] mb-8"></div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Walkway Planks */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">Walkway Planks / Steel Challi</h4>
                  <ReadMoreSection
                    id="planks"
                    shortText="Walkway Planks, commonly known as Steel Challi, form the working surface of a scaffolding system, directly influencing site safety, movement efficiency, and load distribution. At JAKOTA, walkway planks are engineered as load-rated access elements."
                    fullText={
                      <div className="space-y-3">
                        <p>Manufactured from high-strength steel with controlled fabrication tolerances, JAKOTA Walkway Planks deliver consistent load performance, resistance to deflection, and long-term durability under continuous site use. The perforated or textured surface enhances grip and drainage, reducing slip risk in wet or debris-prone conditions.</p>
                        <p>Designed to seat accurately within scaffold frames and ledgers, JAKOTA Steel Challi maintains positional stability during movement and material handling. Its standardized dimensions support quick placement, reliable load sharing, and efficient reuse across multiple projects.</p>
                      </div>
                    }
                  />
                </div>

                {/* MS Plates */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">MS Plates</h4>
                  <ReadMoreSection
                    id="plates-scaffold"
                    shortText="MS Plates serve as load distribution and reinforcement elements within scaffolding and formwork systems, used wherever concentrated loads need to be spread, surfaces need protection, or structural interfaces require stability."
                    fullText={
                      <div className="space-y-3">
                        <p>Manufactured from quality-controlled mild steel with consistent thickness and flatness, JAKOTA MS Plates provide high compressive resistance and dimensional stability under sustained site loads. Their rigid profile helps prevent point loading, ground settlement, and surface damage when used beneath base jacks, props, or temporary supports.</p>
                        <p>By controlling load spread and interface stability, JAKOTA MS Plates contribute directly to system safety, foundation reliability, and disciplined site execution.</p>
                      </div>
                    }
                  />
                </div>

                {/* MS Channels */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">MS Channels</h4>
                  <ReadMoreSection
                    id="channels-scaffold"
                    shortText="MS Channels function as secondary structural members within scaffolding and formwork applications, used to support spans, distribute loads, and create rigid framing where additional stiffness is required."
                    fullText={
                      <div className="space-y-3">
                        <p>Manufactured from quality-controlled mild steel with uniform section profiles, JAKOTA MS Channels provide high bending strength and consistent load behavior across repeated use. Their open-section geometry allows efficient integration with props, jacks, clamps, and panels.</p>
                        <p>By delivering controlled stiffness, load distribution, and system adaptability, JAKOTA MS Channels enhance structural reliability, execution accuracy, and overall site efficiency.</p>
                      </div>
                    }
                  />
                </div>

                {/* Adjustable Props */}
                <div className="border border-[#1e3a5f]/20 p-6 rounded-lg hover:border-[#1e3a5f]/40 transition-colors">
                  <h4 className="font-semibold text-[#1e3a5f] mb-3">MS Adjustable Props</h4>
                  <ReadMoreSection
                    id="props-scaffold"
                    shortText="MS Adjustable Props are precision load-support devices used in formwork systems to temporarily carry slab and beam loads while allowing accurate height control during construction."
                    fullText={
                      <div className="space-y-3">
                        <p>Manufactured from high-grade mild steel with reinforced inner–outer tube construction, JAKOTA MS Adjustable Props deliver high axial load capacity and resistance to buckling under fresh concrete loads. The precision-threaded adjustment mechanism allows fine elevation control.</p>
                        <p>By enabling accurate height setting, controlled load transfer, and stable temporary support, JAKOTA MS Adjustable Props help contractors achieve safer concreting operations, faster slab cycles, and predictable execution quality.</p>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Scaffolding Applications */}
            <div className="bg-[#1e3a5f] text-white p-8 rounded-lg">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-white/70">APPLICATION SCOPE</p>
              <h3 className="font-semibold mb-4 tracking-wide">Project Applications</h3>
              <div className="flex flex-wrap gap-3">
                {['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Façade Work', 'Plastering', 'Painting', 'Brickwork', 'Maintenance', 'High-rise Construction'].map((app, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-white/10 rounded-full text-sm border border-white/20">{app}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quality & Compliance Section */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">JAKOTA STANDARDS</p>
            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-2 tracking-wide">Quality & Compliance</h2>
            <div className="w-16 h-0.5 bg-[#1e3a5f] mx-auto mb-6"></div>
            <p className="text-steel-600 leading-relaxed mb-8">
              All MS Formwork and Scaffolding systems supplied by <span className="font-semibold text-[#1e3a5f]">JAKOTA</span> are manufactured in accordance with industry standards and site safety requirements. Our systems are designed for repeated use, high load capacity, and reliable performance, ensuring efficiency and safety throughout the project lifecycle.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Shield, label: 'Industry Standards Compliant' },
                { icon: CheckCircle, label: 'High Load Capacity' },
                { icon: Award, label: 'Designed for Repeated Use' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center text-[#1e3a5f]">
                  <item.icon size={20} className="mr-2" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#1e3a5f] tracking-widest uppercase mb-3">GET STARTED</p>
          <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-2 tracking-wide">Need Solutions for Your Project?</h2>
          <div className="w-16 h-0.5 bg-[#1e3a5f] mx-auto mb-6"></div>
          <p className="text-steel-600 mb-8">Get in touch for availability, specifications, and custom requirements.</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need information about JAKOTA MS Formwork and Scaffolding solutions.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium bg-[#1e3a5f] text-white rounded-md hover:bg-[#152d4a] transition-colors"
          >
            <MessageCircle size={18} className="mr-2" />
            Request Techno Commercial Proposal on WhatsApp
          </a>
        </div>
      </section>
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
    {
      id: '6',
      title: 'Action Cancer Hospital',
      location: 'New Delhi',
      category: 'Healthcare',
      image: '/projects/action-cancer-hospital.jpg',
      description: 'Multi-specialty healthcare facility construction',
      equipment: 'Cuplock Scaffolding',
    },
    {
      id: '7',
      title: 'Oil India Limited',
      location: 'Assam',
      category: 'Industrial',
      image: '/projects/oil-india-limited.jpg',
      description: 'Corporate headquarters and facility development',
      equipment: 'Ringlock Scaffolding',
    },
    {
      id: '8',
      title: 'Omax Hotel',
      location: 'North India',
      category: 'Commercial',
      image: '/projects/omax-hotel.jpg',
      description: 'Luxury hotel and commercial complex construction',
      equipment: 'Cuplock Scaffolding',
    },
    {
      id: '9',
      title: 'Shillong Airport',
      location: 'Meghalaya',
      category: 'Infrastructure',
      image: '/projects/shillong-airport.jpg',
      description: 'Airport terminal expansion and development project',
      equipment: 'Ringlock Scaffolding',
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
    { step: 3, title: 'Techno Commercial Proposal', desc: 'Detailed proposal with terms and delivery schedule. Clear GST breakup with no hidden charges.', time: '2 hours' },
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
                <h2 className="text-lg font-semibold text-steel-900 mb-6">Request Techno Commercial Proposal</h2>
                
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

// Careers Page
const CareersPage = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    remarks: '',
    cv: null
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, cv: file });
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission (in production, this would upload to backend)
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setForm({ name: '', phone: '', email: '', remarks: '', cv: null });
      setFileName('');
    }, 1500);
  };

  return (
    <div data-testid="careers-page" className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#f5a623] tracking-widest uppercase mb-3">CAREERS</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the JAKOTA Team
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Be part of a team that's building India's construction infrastructure. We're always looking for talented individuals who share our passion for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Growth Opportunities',
                desc: 'Learn and grow with 40+ years of industry expertise. We invest in our people.',
                icon: '📈'
              },
              {
                title: 'Impactful Work',
                desc: 'Work on landmark projects that shape India\'s skyline and infrastructure.',
                icon: '🏗️'
              },
              {
                title: 'Collaborative Culture',
                desc: 'Join a team that values integrity, precision, and teamwork.',
                icon: '🤝'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">{item.title}</h3>
                <p className="text-steel-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-steel-50 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2 text-center">Apply Now</h2>
              <p className="text-steel-500 text-center mb-8">Fill out the form below and we'll get back to you</p>

              {success ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-steel-900 mb-2">Application Submitted!</h3>
                  <p className="text-steel-500">Thank you for your interest in joining JAKOTA. We'll review your application and get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1.5">Full Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-steel-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-all"
                      data-testid="career-name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">Phone Number *</label>
                      <input 
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-steel-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-all"
                        data-testid="career-phone"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700 mb-1.5">Email Address *</label>
                      <input 
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-steel-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-all"
                        data-testid="career-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1.5">Remarks / Cover Note</label>
                    <textarea 
                      rows="4"
                      placeholder="Tell us about yourself, your experience, and why you'd like to join JAKOTA..."
                      value={form.remarks}
                      onChange={(e) => setForm({...form, remarks: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-steel-200 rounded-lg text-sm focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-all resize-none"
                      data-testid="career-remarks"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-1.5">Upload CV/Resume *</label>
                    <div className="relative">
                      <input 
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        data-testid="career-cv"
                      />
                      <div className="w-full px-4 py-4 bg-white border-2 border-dashed border-steel-300 rounded-lg text-center hover:border-[#1e3a5f] transition-colors">
                        {fileName ? (
                          <div className="flex items-center justify-center text-[#1e3a5f]">
                            <FileText size={20} className="mr-2" />
                            <span className="text-sm font-medium">{fileName}</span>
                          </div>
                        ) : (
                          <div className="text-steel-500">
                            <FileText size={24} className="mx-auto mb-2 text-steel-400" />
                            <span className="text-sm">Click to upload or drag and drop</span>
                            <p className="text-xs text-steel-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#1e3a5f] text-white text-sm font-semibold rounded-lg hover:bg-[#152d4a] transition-colors disabled:opacity-50 flex items-center justify-center"
                    data-testid="career-submit"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
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
      case 'careers': return <CareersPage />;
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

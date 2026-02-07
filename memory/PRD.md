# Jakota.in - B2B Scaffolding Rental Website

## Project Overview
A conversion-focused B2B website for Jakota, a scaffolding rental company based in Gurgaon, India. The goal is to transition the company from a relationship-driven ₹2Cr business to a systems-led, scalable player attracting large builders, contractors, and project managers.

## Target Audience
- Large construction firms
- Project managers
- Site engineers
- High-rise / long-duration project contractors

## Positioning
**Reliable. Systems-driven. Zero drama. Numbers-first.**
"No bakwas. Exact delivery date. Exact quantity. One point of contact."

---

## Site Structure (8 Pages)

### 1. Home Page
- Hero section with clear value proposition
- Trust badges (50+ builders, 500+ tons stock, 100% on-time)
- Stats section with key metrics
- Equipment overview cards
- Cost calculator widget
- Services overview
- Why Jakota section
- CTA section

### 2. About Us
- Company journey and history
- Differentiators (Systems, not Jugaad)
- Scale metrics
- Team values

### 3. Equipment (Inventory)
**COMPLETED - Updated December 2025**
- Tabbed interface: MS Formwork / Scaffolding Systems
- **MS Formwork section:**
  - Primary Materials (MS Plates/Sheets, MS Frames, MS Beams/Soldiers)
  - Support & Stability Components (Adjustable Props, Base Plates, Tie Rods, Bracing)
  - Applications: Slabs, Beams, Columns, Shear Walls, Foundations, Staircases, Retaining Structures
- **Scaffolding Systems section:**
  - Structural Components (MS Scaffolding Pipes, Cuplock Verticals, Cuplock Horizontals)
  - Connection & Support Elements (Clamps/Couplers, Base Jacks, Spigots)
  - Working Platforms & Safety (Walkway Planks, Bracing Members, Guard Rails)
  - Applications: External/Internal Work, Plastering, Painting, Brickwork, Façade, High-rise
- Quality & Compliance section with industry standards badges
- WhatsApp inquiry CTA

### 4. Services
- Scaffolding Rental
- Erection & Dismantling
- Safety Audits
- Emergency Supply

### 5. Projects / Case Studies
- Metrics-driven project cards
- Client name, location, equipment
- Tonnage and duration
- Key performance metrics (delivery accuracy, safety incidents, response time)

### 6. Process / SOPs
- 6-step visual timeline
- Time estimates for each step
- Delivery guarantee (10% discount for delays > 24 hours)

### 7. Clients & Testimonials
- Client logos grid
- Star-rated testimonials
- Quotes from project managers and site engineers

### 8. Contact / Get Quote
- WhatsApp primary CTA (15-min response)
- Click-to-Call
- Quote request form with equipment selection
- Office address and hours

---

## Technical Implementation

### Frontend (React + Tailwind CSS)
- **Mobile-first responsive design** (90% traffic assumption)
- **Color scheme**: Blue (#1e3a5f), Grey, Orange (#f97316)
- **Typography**: Inter font family
- **Components**: Navigation, Hero, Stats, Cards, Calculator, Forms, Footer
- **Floating WhatsApp button** with pulse animation

### Backend (FastAPI + MongoDB)
**API Endpoints:**
- `GET /api/health` - Health check
- `GET /api/inventory` - All equipment
- `GET /api/inventory/{type}` - Specific equipment
- `POST /api/calculate` - Cost calculator
- `POST /api/quote` - Submit quote request
- `POST /api/contact` - Contact form
- `GET /api/projects` - Project case studies
- `GET /api/testimonials` - Client testimonials

### Cost Calculator Logic
```
Base Cost = Tonnage × Days × Rate per Ton per Day

Bulk Discounts:
- 10-19 tons: 5%
- 20-49 tons: 10%
- 50+ tons: 15%

Equipment Rates:
- Cuplock: ₹45/ton/day
- Ringlock: ₹55/ton/day
- Slab Props: ₹30/ton/day
- MS Ladders: ₹35/ton/day
```

---

## Conversion Optimization

### Primary CTA: WhatsApp Click-to-Chat
- Pre-filled message for quick inquiry
- Floating button on all pages
- Response promise: 15 minutes

### Secondary CTA: Click-to-Call
- Direct phone links in header and throughout

### Trust Builders
- Client logos
- Metrics-driven case studies
- Star-rated testimonials
- Delivery guarantee

---

## SEO Structure

### Focus Keywords
- Scaffolding rental Gurgaon
- Cuplock scaffolding rental NCR
- Ringlock scaffolding Delhi
- Slab props rental Gurgaon
- Construction equipment rental

### Schema Suggestions
- LocalBusiness schema
- Product schema for equipment
- Review schema for testimonials
- FAQ schema for common questions

---

## Service Areas
- Gurgaon (primary)
- Noida
- Faridabad
- Greater Noida
- Delhi NCR



---

## Completed Work (December 2025)

### ✅ Full-Stack Foundation
- React frontend with TailwindCSS
- FastAPI backend with mock data endpoints
- Single Page Application (SPA) architecture

### ✅ Design & Branding
- Enterprise-grade modern aesthetic
- Custom color scheme (Blue/Grey/Orange)
- SVG logo integration
- Hero section with background image
- Smooth animations throughout

### ✅ Content Pages Populated
- About Us page with company history
- Projects page with real project images (9 projects total):
  - Adani Samsara, Adani Wilmar, Bank of Baroda, Barauni Refinery, Rajasthan House
  - **NEW (Dec 2025):** Action Cancer Hospital, Oil India Limited, Omax Hotel, Shillong Airport
- Equipment page with detailed MS Formwork & Scaffolding content

### ✅ Deployment Setup
- vercel.json for SPA routing
- _redirects file for Netlify compatibility
- Render deployment instructions provided

---

## Pending Items

### P1 - Contact Details
- Replace placeholder WhatsApp number (919876543210) with actual business number
- Update phone number in header

### P2 - Architecture Refactoring
- Break down monolithic App.js (~1800 lines) into components
- Create /components and /pages folder structure

### P3 - Database Connection
- Connect backend to real MongoDB (currently using mock data)
- Implement quote request storage
---

## Contact Information
- **Address**: Plot No. 45, Industrial Area, Sector 37, Gurgaon, Haryana 122001
- **Phone**: +91 98765 43210
- **WhatsApp**: Same number
- **Yard Hours**: 7 AM - 9 PM (All days)
- **Emergency Support**: 24/7

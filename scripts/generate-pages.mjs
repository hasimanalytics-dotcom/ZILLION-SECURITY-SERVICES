import { mkdirSync, readdirSync, unlinkSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const brand = 'Zillion Security Services'
const phone = '+91 9820789991'
const phoneHref = '+919820789991'
const email = 'zillions367@gmail.com'
const website = 'www.zillionsecurityservices.com'
const address = 'Office No. 210, C-Wing, Grace Plaza, S.V. Road, Jogeshwari (West), Mumbai - 102.'

const esc = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const iconPaths = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  camera: '<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',
  monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  radio: '<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19 5a10 10 0 0 1 0 14M5 19a10 10 0 0 1 0-14"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
  graduation: '<path d="m2 8 10-5 10 5-10 5z"/><path d="M6 10v6c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-6M22 8v6"/>',
  building: '<path d="M4 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M16 9h3a1 1 0 0 1 1 1v11M2 21h20"/><path d="M8 7h4M8 11h4M8 15h4"/>',
  bank: '<path d="m3 10 9-6 9 6M5 10v9m5-9v9m4-9v9m5-9v9M3 21h18"/>',
  medical: '<path d="M4 8V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M12 11v6M9 14h6"/>',
  film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
  store: '<path d="M4 9h16l-1-5H5zM4 9v11h16V9M9 20v-6h6v6"/>',
  factory: '<path d="M3 21V9l6 4V9l6 4V5h6v16z"/><path d="M7 17h2M12 17h2M17 17h2"/>',
  flask: '<path d="M9 3h6M10 3v6L4 20h16L14 9V3"/><path d="M7 15h10"/>',
  cart: '<circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M2 3h3l2.5 12h11L21 7H6"/>',
  truck: '<path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-1.5 9 5-3 5 3-1.5-9"/>',
  headset: '<path d="M4 13a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-3v-7h5M4 13v5a2 2 0 0 0 2 2h3v-7H4"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  spark: '<path d="m12 2 2 6 6 2-6 2-2 6-2-6-6-2 6-2zM19 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1z"/>'
}

const icon = (name, extra = '') => `<svg class="icon ${extra}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.shield}</svg>`

const services = [
  { slug: 'industrial-security-services', label: 'Industrial Security Services', icon: 'factory', desc: 'Controlled access, patrols, and safe site movement for plants and warehouses.' },
  { slug: 'bank-security-guard-services', label: 'Bank Security', icon: 'bank', desc: 'Customer-area presence, cash-point coverage, and calm incident handling.' },
  { slug: 'dog-squad', label: 'Dog Squad', icon: 'shield', desc: 'Trained canine teams for detection, screening, and perimeter checks.' },
  { slug: 'commercial-security-services', label: 'Commercial Security Services', icon: 'building', desc: 'Front-desk protection and round-the-clock cover for business premises.' },
  { slug: 'residential-security-services', label: 'Residential Security Services', icon: 'lock', desc: 'Gate management and resident-first safety for housing communities.' },
  { slug: 'event-security-services', label: 'Special Event Security Services', icon: 'users', desc: 'Crowd flow, ticketing checks, and rapid response for live events.' },
  { slug: 'security-consulting-services', label: 'Security Consultancy', icon: 'target', desc: 'Practical risk advice shaped around your site, people, and budget.' },
  { slug: 'physical-security-audit', label: 'Security Audit', icon: 'file', desc: 'On-site reviews that highlight gaps and prioritise quick improvements.' },
  { slug: 'vip-security-services', label: 'Armed Guard Commandos', icon: 'shield', desc: 'Close protection details for high-profile people and sensitive travel.' },
  { slug: 'cash-van-services', label: 'Cash Van Services', icon: 'truck', desc: 'Planned, monitored cash movement with trained escort crews.' },
  { slug: 'electronic-security-systems', label: 'Electronic Security', icon: 'monitor', desc: 'Access control, alarms, and devices integrated into daily operations.' },
  { slug: 'security-surveillance-services', label: 'Surveillance', icon: 'camera', desc: 'Visible deterrence and monitored coverage across critical zones.' },
  { slug: 'facility-attendant-services', label: 'Facility / Attendant Services', icon: 'headset', desc: 'Trained attendants who keep entrances, lifts, and facilities running.' },
  { slug: 'housekeeping-manpower-services', label: 'Housekeeping / Utility Services', icon: 'spark', desc: 'Reliable support teams for clean, orderly, and safe environments.' },
  { slug: 'antecedents-verification', label: 'Antecedent Verification', icon: 'search', desc: 'Structured background checks that support confident hiring decisions.' }
]

const industries = [
  { name: 'Banking & Finance', icon: 'bank', desc: 'Protecting branches, teams, customers, and high-value movements.' },
  { name: 'Corporates', icon: 'building', desc: 'Access, reception, and floor-level cover for modern workplaces.' },
  { name: 'Medical & Pharma', icon: 'medical', desc: 'Safety for hospitals, labs, clean rooms, and supply chains.' },
  { name: 'Media & Entertainment', icon: 'film', desc: 'Set, studio, and event protection with minimal disruption.' },
  { name: 'Retail Stores', icon: 'store', desc: 'Loss prevention and a reassuring presence on the shop floor.' },
  { name: 'Manufacturing', icon: 'factory', desc: 'Perimeter discipline and shift-based cover for production sites.' },
  { name: 'Chemical Industry', icon: 'flask', desc: 'Controlled entry and safety-first patrols for restricted zones.' },
  { name: 'E-Commerce', icon: 'cart', desc: 'Warehouse and dispatch security that keeps orders moving.' }
]

const counters = [
  { value: 15, label: 'Experience', desc: 'Years of service' },
  { value: 2500, label: 'People', desc: 'Trained professionals' },
  { value: 120, label: 'Reach', desc: 'Locations supported' },
  { value: 600, label: 'Clients', desc: 'Organisations protected' }
]

const networkStats = [
  { value: '3', label: 'Training hubs', icon: 'graduation' },
  { value: '18+', label: 'States covered', icon: 'pin' },
  { value: '120+', label: 'Service locations', icon: 'building' },
  { value: '2.5K+', label: 'Field personnel', icon: 'users' }
]

const offices = [
  { name: 'Head Office', text: address },
  { name: 'Western Region', text: 'Andheri, Mumbai - 400 053, Maharashtra.' },
  { name: 'Northern Region', text: 'Connaught Place, New Delhi - 110 001, Delhi.' },
  { name: 'Southern Region', text: 'Indiranagar, Bengaluru - 560 038, Karnataka.' }
]

const clients = ['Apex Financial', 'Northstar Labs', 'Meridian Homes', 'Orbit Retail', 'Crest Hospital', 'Vertex Logistics', 'Bluewave Media', 'Summit Foods', 'Prime Workspace', 'Harbour Trade', 'Zenith Care', 'Core Manufacturing']

const insights = [
  { tag: 'CSR', title: 'Safety skills for every neighbourhood', desc: 'How community workshops help people respond calmly in an emergency.', href: 'csr.html', icon: 'heart' },
  { tag: 'Blog', title: 'Choosing a guard partner that fits your site', desc: 'A short checklist for comparing providers before you sign an agreement.', href: 'blog.html', icon: 'file' },
  { tag: 'Blog', title: 'Five everyday habits that improve workplace safety', desc: 'Small, repeatable actions that make a visible difference each shift.', href: 'blog.html', icon: 'spark' }
]

const locationSlugs = ['bkc', 'lower-parel', 'borivali', 'ghatkopar', 'thane', 'kalyan', 'vashi', 'panvel', 'kolkata', 'bhubaneswar', 'guwahati', 'chandigarh', 'delhi', 'hyderabad', 'chennai', 'bangalore', 'rajkot', 'surat', 'vadodara', 'ahmedabad', 'pune', 'nashik', 'goa', 'nagpur', 'bhopal', 'raipur', 'jaipur', 'varanasi', 'ranchi', 'patna', 'lucknow', 'jabalpur', 'gurgaon', 'andheri', 'prayagraj', 'chinchwad', 'anjar', 'amravati', 'ankleshwar', 'chandrapur', 'shillong', 'raigarh', 'gwalior', 'indore', 'dhule', 'jalgaon', 'dahej', 'halol', 'vapi', 'haridwar', 'gorakhpur', 'konkan', 'chhatrapati-sambhaji-nagar', 'chakan', 'kolhapur', 'nanded', 'noida', 'visakhapatnam', 'baddi', 'ranjangaon', 'baroda', 'jammu']

const careerSlugs = ['andheri', 'bkc', 'borivali', 'kalyan', 'konkan', 'lower-parel', 'mumbai', 'thane', 'vashi', 'chinchwad', 'dhule', 'goa', 'nashik', 'pune', 'panvel', 'kolkata', 'bhubaneswar', 'guwahati', 'delhi', 'hyderabad', 'chennai', 'bangalore', 'rajkot', 'surat', 'baroda', 'ahmedabad', 'jaipur', 'varanasi', 'ranchi', 'patna', 'lucknow', 'gurgaon', 'prayagraj', 'ankleshwar', 'shillong', 'jalgaon', 'dahej', 'halol', 'vapi', 'haridwar', 'gorakhpur']

const titleCase = (slug) => slug.split('-').map((part) => part === 'bkc' ? 'BKC' : part.charAt(0).toUpperCase() + part.slice(1)).join(' ')

const aboutLinks = [
  { label: 'About Us', href: 'about-us.html' },
  { label: 'Vision & Mission', href: 'about-us.html#vision' },
  { label: 'Founder’s Message', href: 'about-us.html#founder' },
  { label: 'Leadership Team', href: 'about-us.html#leadership' },
  { label: 'Certifications & Compliance', href: 'certifications-compliance.html' },
  { label: 'Infrastructure', href: 'infrastructure.html' }
]

const moreLinks = [
  { label: 'Why Choose Us', href: 'why-choose-us.html' },
  { label: 'Training & Orientation', href: 'training.html' },
  { label: 'Investors', href: 'investors.html' },
  { label: 'Our Clients', href: 'our-clients.html' },
  { label: 'Blog', href: 'blog.html' },
  { label: 'Security Services Mumbai', href: 'security-services-mumbai.html' }
]

const primaryNav = [
  { label: 'Network', href: 'network.html' },
  { label: 'Operations', href: 'operations.html' },
  { label: 'Industries We Serve', href: 'industries-served.html' },
  { label: 'Career', href: 'career.html' },
  { label: 'CSR', href: 'csr.html' }
]

const linkList = (items, className) => `<ul class="${className}">${items.map((item) => `<li><a href="${item.href}">${esc(item.label)}</a></li>`).join('')}</ul>`

const header = () => `
<div class="site-head">
<a class="brand-mark" href="index.html" aria-label="${brand} home"><img src="assets/Zillion Security Services Shield Logo.png" alt="${brand}"></a>
<div class="topbar">
  <div class="container topbar-inner">
    <div class="topbar-contact">
      <a class="topbar-link" href="tel:${phoneHref}">${icon('phone')}<span>${esc(phone)}</span></a>
      <a class="topbar-link" href="mailto:${email}">${icon('mail')}<span>${esc(email)}</span></a>
    </div>
  </div>
</div>
<header class="site-header">
  <div class="container header-inner">
    <nav class="desktop-nav" aria-label="Main navigation">
      <ul class="nav-list">
        <li class="nav-item has-dropdown">
          <button class="nav-link" type="button" data-dropdown-toggle aria-expanded="false">About Us ${icon('chevron', 'caret')}</button>
          <div class="mega mega--small"><div class="mega-inner"><p class="mega-title">Get to know us</p>${linkList(aboutLinks, 'mega-links')}</div></div>
        </li>
        <li class="nav-item has-dropdown">
          <button class="nav-link" type="button" data-dropdown-toggle aria-expanded="false">Services ${icon('chevron', 'caret')}</button>
          <div class="mega mega--services"><div class="mega-inner">
            <div class="mega-grid">
              <div class="mega-column"><p class="mega-title">Guard services</p>${linkList(services.slice(0, 5).map((service) => ({ label: service.label, href: `service-${service.slug}.html` })), 'mega-links')}</div>
              <div class="mega-column"><p class="mega-title">Risk & response</p>${linkList(services.slice(5, 10).map((service) => ({ label: service.label, href: `service-${service.slug}.html` })), 'mega-links')}</div>
              <div class="mega-column"><p class="mega-title">Support teams</p>${linkList(services.slice(10).map((service) => ({ label: service.label, href: `service-${service.slug}.html` })), 'mega-links')}</div>
            </div>
            <a class="mega-feature" href="services.html"><span>${icon('shield')}</span><span><strong>Explore all services</strong><small>Protection planned around your site.</small></span>${icon('arrow')}</a>
          </div></div>
        </li>
        ${primaryNav.map((item) => `<li class="nav-item"><a class="nav-link" href="${item.href}">${esc(item.label)}</a></li>`).join('')}
        <li class="nav-item has-dropdown">
          <button class="nav-link" type="button" data-dropdown-toggle aria-expanded="false">More ${icon('chevron', 'caret')}</button>
          <div class="mega mega--small mega--right"><div class="mega-inner"><p class="mega-title">More from Zillion</p>${linkList(moreLinks, 'mega-links')}</div></div>
        </li>
      </ul>
    </nav>
    <div class="header-actions">
      <a class="contact-btn" href="contact-us.html">Contact Us ${icon('arrow')}</a>
      <button class="menu-toggle" id="menuToggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav"><span></span><span></span><span></span></button>
    </div>
  </div>
  <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
    <div class="mobile-nav-inner">
      <div class="mobile-nav-head"><span>Menu</span><a href="tel:${phoneHref}">${esc(phone)}</a></div>
      <a class="mobile-link" href="index.html">Home</a>
      <details class="mobile-group"><summary>About Us ${icon('chevron', 'caret')}</summary><div class="mobile-group-content">${linkList(aboutLinks, 'mobile-sublinks')}</div></details>
      <details class="mobile-group"><summary>Services ${icon('chevron', 'caret')}</summary><div class="mobile-group-content">${linkList(services.map((service) => ({ label: service.label, href: `service-${service.slug}.html` })), 'mobile-sublinks')}</div></details>
      ${primaryNav.map((item) => `<a class="mobile-link" href="${item.href}">${esc(item.label)}</a>`).join('')}
      <details class="mobile-group"><summary>More ${icon('chevron', 'caret')}</summary><div class="mobile-group-content">${linkList(moreLinks, 'mobile-sublinks')}</div></details>
      <div class="mobile-meta"><a href="mailto:${email}">${esc(email)}</a><span>${esc(website)}</span></div>
      <a class="btn btn-primary mobile-cta" href="contact-us.html">Contact Us ${icon('arrow')}</a>
    </div>
  </nav>
</header>
</div>`

const footer = () => `
<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-column footer-about">
        <a class="footer-brand" href="index.html"><img src="assets/zillion-security-services-logo.svg" alt="${brand}"></a>
        <p>Dependable people, clear processes, and security that fits the way you work.</p>
        <div class="footer-socials">
          <a href="#" aria-label="Facebook">f</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="YouTube">yt</a><a href="#" aria-label="Instagram">ig</a>
        </div>
      </div>
      <div class="footer-column">
        <h2 class="footer-heading">About Us</h2>
        ${linkList(aboutLinks, 'footer-links')}
      </div>
      <div class="footer-column footer-listing">
        <h2 class="footer-heading">Services</h2>
        ${linkList(services.slice(0, 8).map((service) => ({ label: service.label, href: `service-${service.slug}.html` })), 'footer-links')}
        <p>Security Services<br>Security Guard Services<br>Security Services For Office<br>Security Services For Bouncer<br>Security Services For Bank<br>Security Services For Residence<br>Security Services For All India<br>Security Servic...</p>
        <p class="footer-source">Source: Justdial.com</p>
      </div>
      <div class="footer-column">
        <h2 class="footer-heading">More Services</h2>
        ${linkList(services.slice(8).map((service) => ({ label: service.label, href: `service-${service.slug}.html` })), 'footer-links')}
      </div>
      <div class="footer-column">
        <h2 class="footer-heading">Company</h2>
        ${linkList([
          { label: 'Why Choose Us', href: 'why-choose-us.html' },
          { label: 'Operations', href: 'operations.html' },
          { label: 'Network', href: 'network.html' },
          { label: 'Industries We Serve', href: 'industries-served.html' },
          { label: 'Our Clients', href: 'our-clients.html' },
          { label: 'Career', href: 'career.html' },
          { label: 'CSR', href: 'csr.html' },
          { label: 'Investors', href: 'investors.html' },
          { label: 'Blog', href: 'blog.html' },
          { label: 'Sitemap', href: 'sitemap.html' }
        ], 'footer-links')}
      </div>
      <div class="footer-column footer-contact">
        <h2 class="footer-heading">Contact</h2>
        <p class="footer-label">Head Office</p><p>${esc(address)}</p>
        <p class="footer-label">Email</p><p><a href="mailto:${email}">${esc(email)}</a></p>
        <p class="footer-label">Phone</p><p><a href="tel:${phoneHref}">${esc(phone)}</a></p>
        <p class="footer-label">Website</p><p><a href="https://${website}" target="_blank" rel="noopener">${esc(website)}</a></p>
        <a class="footer-enquire" href="#enquiry" data-modal-open>Enquire Now ${icon('arrow')}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© <span data-year></span> ${brand}. All rights reserved.</p>
      <div class="footer-bottom-links"><a href="sitemap.html">Sitemap</a><a href="contact-us.html">Contact Us</a></div>
    </div>
  </div>
</footer>`

const modal = () => `
<div class="modal" id="enquiryModal" hidden>
  <div class="modal-backdrop" data-modal-close></div>
  <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="enquiryTitle">
    <button class="modal-close" type="button" data-modal-close aria-label="Close enquiry form">×</button>
    <p class="section-kicker">Enquire Now</p>
    <h2 class="section-title" id="enquiryTitle">Tell us what you need</h2>
    <p class="section-lead">Share a few details and our team will get back to you.</p>
    <form class="modal-form" id="enquiryForm">
      <div class="form-grid">
        <label class="field"><span>Your name</span><input type="text" name="name" placeholder="Full name" required></label>
        <label class="field"><span>Phone</span><input type="tel" name="phone" placeholder="Contact number" required></label>
        <label class="field field-full"><span>Email</span><input type="email" name="email" placeholder="you@company.com" required></label>
        <label class="field field-full"><span>Service</span><select name="service"><option value="">Choose a service</option>${services.map((service) => `<option value="${esc(service.label)}">${esc(service.label)}</option>`).join('')}</select></label>
        <label class="field field-full"><span>Message</span><textarea name="message" rows="4" placeholder="Briefly describe your requirement"></textarea></label>
      </div>
      <button class="btn btn-primary" type="submit">Send Enquiry ${icon('arrow')}</button>
      <p class="form-success" hidden>Thank you. We will contact you shortly.</p>
    </form>
  </div>
</div>`

const heroSection = () => `
<section class="hero" id="top">
  <div class="hero-media"><video class="hero-video" src="assets/Video%20Project%20(1).mp4" poster="assets/hero.png" autoplay muted loop playsinline preload="metadata" aria-hidden="true"></video><div class="hero-shade"></div></div>
  <div class="container hero-inner">
    <div class="hero-content reveal">
      <p class="eyebrow">${brand}</p>
      <h1 class="hero-title">Protection you can plan around.</h1>
      <p class="hero-text">Trained guards, smart systems, and dependable response for businesses across India.</p>
      <div class="hero-actions"><a class="btn btn-primary" href="contact-us.html">Request a Quote ${icon('arrow')}</a><a class="btn btn-ghost" href="services.html">Our Services</a></div>
    </div>
  </div>
</section>`

const overviewSection = () => `
<section class="section overview" id="overview">
  <div class="container">
    <div class="overview-grid">
      <div class="overview-copy reveal">
        <p class="section-kicker">An Overview</p>
        <h2 class="section-title">Simple, disciplined security that scales with you.</h2>
        <p class="section-lead">We combine well-trained teams with clear reporting and practical technology. The result is a security programme your people can trust every day.</p>
        <p class="section-text">From a single entrance to a multi-site rollout, our supervisors stay close to the detail: who is on duty, what changed, and what happens next.</p>
        <a class="read-link" href="about-us.html">Read More ${icon('arrow')}</a>
      </div>
      <div class="overview-media reveal delay-1">
        <div class="portrait-card"><img class="portrait-img" src="assets/Zillion Security Services Shield Logo.png" alt="Zillion Security Services emblem"><div class="portrait-caption"><strong>Our founding principle</strong><span>Discipline. Integrity. Readiness.</span></div></div>
      </div>
    </div>
    <div class="stats-grid">${counters.map((counter, index) => `<div class="stat reveal delay-${index + 1}"><div class="stat-number"><span class="counter" data-count="${counter.value}">0</span>+</div><p class="stat-label">${esc(counter.label)}</p><p class="stat-desc">${esc(counter.desc)}</p></div>`).join('')}</div>
  </div>
</section>`

const servicesSection = () => `
<section class="section services-section" id="security-services">
  <div class="container">
    <div class="slider-header reveal"><div><p class="section-kicker">What we do</p><h2 class="section-title">Comprehensive Security Services</h2><p class="section-lead">Professional protection planned for businesses, industries, and communities.</p></div><a class="read-link" href="services.html">Read More ${icon('arrow')}</a></div>
  </div>
  <div class="container slider-shell reveal delay-1">
    <div class="slider-top"><p class="slider-hint">Drag or use the arrows to explore</p><div class="slider-controls"><button class="slider-btn" type="button" data-slider-prev aria-label="Previous services">${icon('arrow')}</button><button class="slider-btn" type="button" data-slider-next aria-label="Next services">${icon('arrow')}</button></div></div>
    <div class="slider-track" data-slider tabindex="0" aria-label="Security services carousel">
      ${services.map((service, index) => `<article class="service-slide"><a class="service-card" href="service-${service.slug}.html"><div class="service-media"><img src="assets/hero.png" alt="" loading="lazy"><span class="service-icon">${icon(service.icon)}</span></div><div class="service-body"><span class="service-index">${String(index + 1).padStart(2, '0')}</span><h3 class="service-name">${esc(service.label)}</h3><p class="service-desc">${esc(service.desc)}</p><span class="service-link">View service ${icon('arrow')}</span></div></a></article>`).join('')}
    </div>
    <div class="slider-progress"><span class="slider-progress-bar"></span></div>
  </div>
</section>`

const industriesSection = () => `
<section class="section industries-section" id="industries">
  <div class="container">
    <div class="slider-header reveal"><div><p class="section-kicker">Sectors we support</p><h2 class="section-title">Industries We Serve</h2><p class="section-lead">Scalable cover shaped around the risks and routines of each sector.</p></div><a class="read-link" href="industries-served.html">Read More ${icon('arrow')}</a></div>
    <div class="industry-grid">${industries.map((industry, index) => `<article class="industry-card reveal delay-${(index % 4) + 1}"><div class="industry-icon">${icon(industry.icon)}</div><h3 class="industry-name">${esc(industry.name)}</h3><p class="industry-desc">${esc(industry.desc)}</p></article>`).join('')}</div>
  </div>
</section>`

const operationsSection = () => `
<section class="operations-section" id="operations">
  <div class="container operations-grid">
    <div class="operations-copy reveal">
      <p class="section-kicker section-kicker--light">Operations</p>
      <h2 class="section-title section-title--light">Smart oversight, steady execution.</h2>
      <p class="section-lead section-lead--light">Surveillance, monitoring, and real-time reporting work together so problems are seen early and handled calmly.</p>
      <div class="feature-list">
        <div class="feature-item"><span class="feature-icon">${icon('camera')}</span><div><h3>Smart Surveillance</h3><p>Visible coverage where it counts.</p></div></div>
        <div class="feature-item"><span class="feature-icon">${icon('monitor')}</span><div><h3>Command & Control</h3><p>One clear view across your sites.</p></div></div>
        <div class="feature-item"><span class="feature-icon">${icon('radio')}</span><div><h3>Remote Monitoring</h3><p>Support beyond working hours.</p></div></div>
        <div class="feature-item"><span class="feature-icon">${icon('file')}</span><div><h3>Real-Time Reporting</h3><p>Updates your team can act on.</p></div></div>
      </div>
      <a class="btn btn-outline-light" href="operations.html">Read More ${icon('arrow')}</a>
    </div>
    <div class="operations-visual reveal delay-2"><div class="visual-frame"><img src="assets/hero.png" alt="Security operations"><span class="visual-chip">Operations desk</span><span class="visual-label">Monitor · Respond · Report</span></div></div>
  </div>
</section>`

const whySection = () => {
  const items = [
    { icon: 'users', title: 'Trained Workforce', desc: 'Structured induction and regular refreshers.' },
    { icon: 'award', title: 'Compliance-Driven', desc: 'Clear checks, records, and site documentation.' },
    { icon: 'monitor', title: 'Technology-Enabled', desc: 'Tools that support guards, not replace judgement.' },
    { icon: 'clock', title: 'Fast Deployment', desc: 'A dependable team in place on schedule.' }
  ]
  return `<section class="section why-section" id="why-us"><div class="container"><div class="slider-header reveal"><div><p class="section-kicker">Why choose us</p><h2 class="section-title">The details make the difference.</h2><p class="section-lead">Experience, technology, and disciplined execution in one dependable service.</p></div><a class="read-link" href="why-choose-us.html">Read More ${icon('arrow')}</a></div><div class="why-grid">${items.map((item, index) => `<article class="why-card reveal delay-${index + 1}"><span class="why-number">0${index + 1}</span><span class="why-icon">${icon(item.icon)}</span><h3 class="why-title">${esc(item.title)}</h3><p class="why-desc">${esc(item.desc)}</p></article>`).join('')}</div></div></section>`
}

const clientsSection = () => `
<section class="section clients-section" id="clients">
  <div class="container">
    <div class="slider-header reveal"><div><p class="section-kicker">Our clients</p><h2 class="section-title">Trusted across many sectors.</h2><p class="section-lead">Serving organisations with consistency, care, and reliable reporting.</p></div><a class="read-link" href="our-clients.html">Read More ${icon('arrow')}</a></div>
    <div class="clients-grid">${clients.map((client, index) => `<div class="client-tile reveal delay-${(index % 4) + 1}"><span class="client-mark">${esc(client.split(' ').map((word) => word[0]).join('').slice(0, 2))}</span><span class="client-name">${esc(client)}</span></div>`).join('')}</div>
  </div>
</section>`

const mapGraphic = () => `
<svg class="map-svg" viewBox="0 0 620 380" role="img" aria-label="Illustrated service network map">
  <rect width="620" height="380" rx="18" fill="#f4f6f8"/>
  <path d="M0 80h620M0 160h620M0 240h620M0 320h620M100 0v380M210 0v380M320 0v380M430 0v380M540 0v380" stroke="#e3e7eb" stroke-width="1"/>
  <path d="M95 285 180 230 255 250 330 160 430 190 520 100" fill="none" stroke="#c9ced4" stroke-width="2" stroke-dasharray="6 7"/>
  <path d="M180 230 230 130 380 110 520 100" fill="none" stroke="#d8c6c6" stroke-width="2" stroke-dasharray="6 7"/>
  <path d="M255 250 380 300 470 260 520 100" fill="none" stroke="#c9ced4" stroke-width="2" stroke-dasharray="6 7"/>
  <circle cx="330" cy="160" r="7" fill="#a4262c"/><circle cx="180" cy="230" r="5" fill="#a4262c"/><circle cx="430" cy="190" r="5" fill="#a4262c"/><circle cx="520" cy="100" r="5" fill="#a4262c"/><circle cx="255" cy="250" r="5" fill="#a4262c"/><circle cx="470" cy="260" r="5" fill="#a4262c"/><circle cx="230" cy="130" r="5" fill="#a4262c"/>
  <text x="345" y="155" fill="#1f2733" font-size="14" font-family="Manrope, sans-serif">Mumbai</text>
  <text x="190" y="252" fill="#1f2733" font-size="13" font-family="Manrope, sans-serif">Pune</text>
  <text x="444" y="194" fill="#1f2733" font-size="13" font-family="Manrope, sans-serif">Hyderabad</text>
  <text x="533" y="98" fill="#1f2733" font-size="13" font-family="Manrope, sans-serif">Delhi</text>
  <text x="270" y="268" fill="#1f2733" font-size="13" font-family="Manrope, sans-serif">Goa</text>
  <text x="484" y="278" fill="#1f2733" font-size="13" font-family="Manrope, sans-serif">Chennai</text>
  <text x="244" y="122" fill="#1f2733" font-size="13" font-family="Manrope, sans-serif">Ahmedabad</text>
</svg>`

const networkSection = () => `
<section class="network-section" id="network">
  <div class="container network-grid">
    <div class="network-copy reveal">
      <p class="section-kicker">Our network</p>
      <h2 class="section-title">Local teams, connected nationwide.</h2>
      <p class="section-lead">Our branch network brings hiring, training, supervision, and support closer to every client we serve.</p>
      <div class="network-stats">${networkStats.map((stat) => `<div class="network-stat"><span class="network-stat-icon">${icon(stat.icon)}</span><strong>${esc(stat.value)}</strong><span>${esc(stat.label)}</span></div>`).join('')}</div>
      <div class="office-list">${offices.map((office) => `<div class="office-item"><h3 class="office-name">${esc(office.name)}</h3><p class="office-text">${esc(office.text)}</p><a href="tel:${phoneHref}">${esc(phone)}</a></div>`).join('')}</div>
      <a class="read-link" href="network.html">Read More ${icon('arrow')}</a>
    </div>
    <div class="map-panel reveal delay-2">${mapGraphic()}<div class="map-callout"><span class="map-callout-icon">${icon('pin')}</span><div><strong>${esc(address)}</strong><span>${esc(email)}</span></div></div></div>
  </div>
</section>`

const joinSection = () => `
<section class="join-section" id="careers">
  <div class="container join-grid">
    <div class="join-copy reveal"><p class="section-kicker section-kicker--light">Join Our Team</p><h2 class="section-title section-title--light">Build a career that protects people.</h2><p class="section-lead section-lead--light">We offer structured training, clear progression, and a team that takes pride in showing up prepared.</p><a class="btn btn-outline-light" href="career.html">Read More ${icon('arrow')}</a></div>
    <div class="join-collage reveal delay-2"><div class="collage-main"><img src="assets/hero.png" alt="Security team member"></div><div class="collage-small"><img src="assets/Zillion Security Services Shield Logo.png" alt="Zillion shield"></div><div class="collage-note"><strong>Join a team that protects with pride.</strong><span>Growth · Training · Purpose</span></div></div>
  </div>
</section>`

const insightsSection = () => `
<section class="section insights-section" id="insights">
  <div class="container"><div class="slider-header reveal"><div><p class="section-kicker">News & causes</p><h2 class="section-title">Ideas worth sharing.</h2></div></div>
    <div class="insight-grid">${insights.map((item, index) => `<a class="insight-card reveal delay-${index + 1}" href="${item.href}"><div class="insight-media"><img src="assets/hero.png" alt="" loading="lazy"><span class="insight-tag">${esc(item.tag)}</span></div><div class="insight-body"><h3 class="insight-title">${esc(item.title)}</h3><p>${esc(item.desc)}</p><span class="insight-link">Read More ${icon('arrow')}</span></div></a>`).join('')}</div>
  </div>
</section>`

const assessmentSection = () => `
<section class="assessment-section" id="assessment">
  <div class="container assessment-inner reveal">
    <div class="assessment-copy"><span class="assessment-icon">${icon('spark')}</span><h2>Get Free Security Assessment</h2><p>Our team reviews your site, highlights risks, and recommends a practical next step.</p></div>
    <div class="assessment-actions"><a class="btn btn-light" href="contact-us.html">Talk to an Expert ${icon('arrow')}</a><button class="btn btn-outline-light" type="button" data-modal-open>Enquire Now</button></div>
  </div>
</section>`

const homeBody = () => heroSection() + overviewSection() + servicesSection() + industriesSection() + operationsSection() + whySection() + clientsSection() + networkSection() + joinSection() + insightsSection() + assessmentSection()

const approachItems = [
  { icon: 'search', title: 'Understand', desc: 'We walk the site, listen to your team, and map what matters most.' },
  { icon: 'target', title: 'Plan', desc: 'We shape guard duties, reporting, and technology around real risks.' },
  { icon: 'check', title: 'Deliver', desc: 'We deploy, supervise, and review so the service keeps improving.' }
]

const contactSection = (heading = 'Talk to our team') => `
<section class="section contact-section" id="contact">
  <div class="container contact-grid">
    <div class="contact-details reveal"><p class="section-kicker">Contact Us</p><h2 class="section-title">${esc(heading)}</h2><p class="section-lead">Call, email, or send a short note. We will point you to the right person.</p>
      <div class="detail-row"><span class="detail-icon">${icon('pin')}</span><div><strong>Head Office</strong><p>${esc(address)}</p></div></div>
      <div class="detail-row"><span class="detail-icon">${icon('mail')}</span><div><strong>Email</strong><p><a href="mailto:${email}">${esc(email)}</a></p></div></div>
      <div class="detail-row"><span class="detail-icon">${icon('phone')}</span><div><strong>Phone</strong><p><a href="tel:${phoneHref}">${esc(phone)}</a></p></div></div>
      <div class="detail-row"><span class="detail-icon">${icon('clock')}</span><div><strong>Response</strong><p>Our team replies to new enquiries within one working day.</p></div></div>
    </div>
    <div class="contact-form-wrap reveal delay-2"><h3 class="form-heading">Send an enquiry</h3><form class="modal-form contact-form" data-enquiry-form><div class="form-grid">
      <label class="field"><span>Your name</span><input type="text" name="name" placeholder="Full name" required></label>
      <label class="field"><span>Phone</span><input type="tel" name="phone" placeholder="Contact number" required></label>
      <label class="field field-full"><span>Email</span><input type="email" name="email" placeholder="you@company.com" required></label>
      <label class="field field-full"><span>Service</span><select name="service"><option value="">Choose a service</option>${services.map((service) => `<option value="${esc(service.label)}">${esc(service.label)}</option>`).join('')}</select></label>
      <label class="field field-full"><span>Message</span><textarea name="message" rows="4" placeholder="Tell us about your requirement"></textarea></label>
    </div><button class="btn btn-primary" type="submit">Send Message ${icon('arrow')}</button><p class="form-success" hidden>Thank you. We will contact you shortly.</p></form></div>
  </div>
</section>`

const innerBody = (page) => `
<section class="page-hero">
  <div class="container page-hero-inner">
    <div class="page-hero-copy reveal"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>${esc(page.title)}</span></nav><p class="eyebrow">${esc(page.eyebrow)}</p><h1 class="page-title">${esc(page.heading)}</h1><p class="page-lead">${esc(page.intro)}</p><div class="hero-actions"><a class="btn btn-primary" href="contact-us.html">Contact Us ${icon('arrow')}</a><a class="btn btn-ghost" href="#enquiry" data-modal-open>Enquire Now</a></div></div>
    <div class="page-hero-art reveal delay-2"><img src="assets/Zillion Security Services Shield Logo.png" alt="Zillion Security Services emblem"><span>Discipline · Integrity · Readiness</span></div>
  </div>
</section>
<section class="section inner-section" id="overview"><div class="container split-section">
  <div class="content-panel reveal"><p class="section-kicker">${esc(page.eyebrow)}</p><h2 class="section-title">${esc(page.panelTitle || 'A clearer way to stay protected.')}</h2><p class="section-lead">${esc(page.panelLead || 'We keep security practical: defined duties, visible supervision, and reporting that helps you make decisions.')}</p><p class="section-text">${esc(page.panelText || 'Every assignment begins with a conversation about your site and your people. From there, we build a plan that can be reviewed and improved as needs change.')}</p><a class="read-link" href="services.html">Explore our services ${icon('arrow')}</a></div>
  <div class="feature-panel reveal delay-1">${page.features.map((feature, index) => `<article class="panel-feature"><span class="panel-feature-icon">${icon(feature.icon || 'check')}</span><div><span class="panel-feature-index">0${index + 1}</span><h3>${esc(feature.title)}</h3><p>${esc(feature.desc)}</p></div></article>`).join('')}</div>
</div></section>
<section class="section approach-section"><div class="container"><div class="slider-header reveal"><div><p class="section-kicker">How we work</p><h2 class="section-title">An approach built around your site.</h2></div></div><div class="approach-grid">${approachItems.map((item, index) => `<article class="approach-step reveal delay-${index + 1}"><span class="step-number">0${index + 1}</span><span class="step-icon">${icon(item.icon)}</span><h3>${esc(item.title)}</h3><p>${esc(item.desc)}</p></article>`).join('')}</div></div></section>
<section class="section related-section"><div class="container"><div class="slider-header reveal"><div><p class="section-kicker">Related services</p><h2 class="section-title">Support that fits the assignment.</h2></div><a class="read-link" href="services.html">View all services ${icon('arrow')}</a></div><div class="related-chips">${services.slice(0, 8).map((service) => `<a class="chip" href="service-${service.slug}.html">${esc(service.label)} ${icon('arrow')}</a>`).join('')}</div></div></section>
${page.contact ? contactSection(page.contactHeading) : ''}
${assessmentSection()}`

const sitemapBody = (pages) => `
<section class="page-hero"><div class="container page-hero-inner"><div class="page-hero-copy reveal"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Sitemap</span></nav><p class="eyebrow">Sitemap</p><h1 class="page-title">Every page, in one place.</h1><p class="page-lead">Browse the full ${brand} site from a single page.</p></div><div class="page-hero-art reveal delay-2"><img src="assets/Zillion Security Services Shield Logo.png" alt="Zillion Security Services emblem"><span>Find your way quickly</span></div></div></section>
<section class="section sitemap-section"><div class="container"><div class="sitemap-grid">
  <div class="sitemap-column"><h2>Main pages</h2>${pages.filter((page) => !page.file.startsWith('service-') && !page.file.startsWith('location-') && !page.file.startsWith('career-') && page.file !== 'sitemap.html').map((page) => `<a href="${page.file}">${esc(page.title)}</a>`).join('')}</div>
  <div class="sitemap-column"><h2>Services</h2>${services.map((service) => `<a href="service-${service.slug}.html">${esc(service.label)}</a>`).join('')}</div>
  <div class="sitemap-column"><h2>Locations</h2>${locationSlugs.map((slug) => `<a href="location-${slug}.html">Security Services in ${esc(titleCase(slug))}</a>`).join('')}</div>
  <div class="sitemap-column"><h2>Career locations</h2>${careerSlugs.map((slug) => `<a href="career-${slug}.html">Security Guard Jobs in ${esc(titleCase(slug))}</a>`).join('')}</div>
</div></div></section>
${assessmentSection()}`

const layout = ({ title, description, body }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${esc(description)}">
  <title>${esc(title)}</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
${header()}
<main>
${body}
</main>
${footer()}
${modal()}
<script type="module" src="js/script.js"></script>
</body>
</html>
`

const standardFeatures = (subject) => [
  { icon: 'shield', title: 'Defined duties', desc: `Clear post orders for ${subject.toLowerCase()} and every shift.` },
  { icon: 'users', title: 'Supervised teams', desc: 'On-site leadership with regular checks and feedback.' },
  { icon: 'file', title: 'Useful reporting', desc: 'Simple records that highlight what needs attention.' },
  { icon: 'clock', title: 'Reliable cover', desc: 'Planned rotations that keep every post attended.' }
]

const pageConfigs = [
  { file: 'about-us.html', title: 'About Us', eyebrow: 'About Us', heading: 'A dependable security partner.', intro: 'Learn who we are, how we work, and what guides every assignment we take on.', panelTitle: 'Built on people who show up prepared.', panelLead: 'Our teams are trained to be visible, respectful, and ready to act when plans change.', panelText: 'We keep our promises simple: clear duties, dependable supervision, and honest communication with every client.', features: standardFeatures('your site') },
  { file: 'certifications-compliance.html', title: 'Certifications & Compliance', eyebrow: 'Governance', heading: 'Compliance you can verify.', intro: 'Documentation, checks, and renewals that support confident decisions.', panelTitle: 'Records that stand up to scrutiny.', panelLead: 'We maintain licences, registrations, and internal checks as part of everyday operations.', panelText: 'Our team helps you review the right documents for your site and keeps them current as requirements change.', features: [{ icon: 'award', title: 'Licensing', desc: 'Current registrations for the services we provide.' }, { icon: 'file', title: 'Documentation', desc: 'Post orders, attendance, and incident records.' }, { icon: 'search', title: 'Screening', desc: 'Background checks before deployment.' }, { icon: 'check', title: 'Audits', desc: 'Routine reviews with clear follow-up actions.' }] },
  { file: 'services.html', title: 'Services', eyebrow: 'Our Services', heading: 'Security services, planned around you.', intro: 'From manned guarding to technical systems, choose the support your site needs.', panelTitle: 'One partner for many protection needs.', panelLead: 'Our services work together: people, process, and technology under one clear plan.', panelText: 'Tell us what you protect and we will shape a package that fits your schedule, budget, and risk profile.', features: standardFeatures('each service') },
  { file: 'network.html', title: 'Network', eyebrow: 'Our Network', heading: 'Local reach with central support.', intro: 'Branches and field teams connected by shared standards and supervision.', panelTitle: 'Close to your site, connected to a wider team.', panelLead: 'Local managers understand local conditions while central teams keep quality consistent.', panelText: 'Our network supports recruitment, training, replacements, and escalation without slowing down your operations.', features: [{ icon: 'pin', title: 'Branch network', desc: 'Regional teams across key cities.' }, { icon: 'graduation', title: 'Training hubs', desc: 'Practical induction and refresher programmes.' }, { icon: 'users', title: 'Field supervision', desc: 'Visits and checks led by experienced managers.' }, { icon: 'radio', title: 'Escalation', desc: 'A clear route for urgent support.' }] },
  { file: 'operations.html', title: 'Operations', eyebrow: 'Operations', heading: 'Calm control, every shift.', intro: 'Surveillance, monitoring, and reporting that turn activity into useful action.', panelTitle: 'One clear view of what is happening.', panelLead: 'We combine visible patrols with practical tools so teams can respond quickly and consistently.', panelText: 'Shift handovers, incident notes, and supervisor reviews keep everyone aligned from the first day.', features: [{ icon: 'camera', title: 'Surveillance', desc: 'Coverage planned around vulnerable areas.' }, { icon: 'monitor', title: 'Control desk', desc: 'A single place to track live updates.' }, { icon: 'radio', title: 'Response', desc: 'Fast escalation when something changes.' }, { icon: 'file', title: 'Reporting', desc: 'Readable logs for your team.' }] },
  { file: 'industries-served.html', title: 'Industries We Serve', eyebrow: 'Industries', heading: 'Experience across diverse workplaces.', intro: 'Security programmes shaped for the routines and risks of each industry.', panelTitle: 'Sector aware, site specific.', panelLead: 'A hospital, a warehouse, and a corporate tower need different answers. We start with the environment.', panelText: 'Our teams adapt patrol patterns, entry checks, and reporting to the way your organisation actually works.', features: industries.slice(0, 4).map((industry) => ({ icon: industry.icon, title: industry.name, desc: industry.desc })) },
  { file: 'csr.html', title: 'CSR', eyebrow: 'Community', heading: 'Safety beyond the worksite.', intro: 'Small, practical initiatives that build knowledge and confidence in the community.', panelTitle: 'Sharing skills that protect people.', panelLead: 'Our teams take part in safety awareness sessions, readiness drills, and local support activities.', panelText: 'We focus on useful, repeatable action: simple guidance, hands-on practice, and respect for the communities we serve.', features: [{ icon: 'heart', title: 'Community workshops', desc: 'Basic safety and emergency awareness.' }, { icon: 'graduation', title: 'Skill building', desc: 'Practical training for new opportunities.' }, { icon: 'users', title: 'Volunteer time', desc: 'Teams support local causes.' }, { icon: 'spark', title: 'Safety culture', desc: 'Habits that carry beyond duty hours.' }] },
  { file: 'why-choose-us.html', title: 'Why Choose Us', eyebrow: 'Why Choose Us', heading: 'Reasons clients stay with us.', intro: 'A straightforward service built on training, supervision, and follow-through.', panelTitle: 'Dependable in the details.', panelLead: 'Good security is rarely dramatic. It is the result of preparation, attention, and consistent delivery.', panelText: 'We make it easy to see who is responsible, what is happening, and where improvements can be made.', features: [{ icon: 'users', title: 'Trained workforce', desc: 'Prepared for the realities of each post.' }, { icon: 'award', title: 'Compliance-driven', desc: 'Records and checks kept in order.' }, { icon: 'monitor', title: 'Technology-enabled', desc: 'Useful tools with clear human oversight.' }, { icon: 'clock', title: 'Fast deployment', desc: 'Teams in place when you need them.' }] },
  { file: 'training.html', title: 'Training & Orientation', eyebrow: 'Learning', heading: 'Preparation before deployment.', intro: 'Orientation, refresher sessions, and site-specific briefing for every assignment.', panelTitle: 'Training that matches the post.', panelLead: 'Guards learn site rules, reporting expectations, and how to respond to common situations.', panelText: 'Supervisors revisit training through observations and short refreshers so standards stay consistent.', features: [{ icon: 'graduation', title: 'Induction', desc: 'Core duties and conduct from day one.' }, { icon: 'pin', title: 'Site orientation', desc: 'Layout, access points, and key contacts.' }, { icon: 'radio', title: 'Response drills', desc: 'Practice for incidents and escalations.' }, { icon: 'file', title: 'Refresher checks', desc: 'Short reviews that reinforce standards.' }] },
  { file: 'investors.html', title: 'Investors', eyebrow: 'Investor Relations', heading: 'A steady, service-led business.', intro: 'An overview of the way we operate, govern, and plan for long-term growth.', panelTitle: 'Built for durable service.', panelLead: 'Our focus is dependable delivery, trained people, and disciplined cost management.', panelText: 'We welcome conversations with partners who share our interest in resilient, people-first service businesses.', features: [{ icon: 'target', title: 'Strategy', desc: 'Focused on repeatable service quality.' }, { icon: 'award', title: 'Governance', desc: 'Clear processes and accountable teams.' }, { icon: 'users', title: 'People', desc: 'Investment in training and supervision.' }, { icon: 'pin', title: 'Reach', desc: 'A network positioned for growth.' }] },
  { file: 'our-clients.html', title: 'Our Clients', eyebrow: 'Our Clients', heading: 'Relationships built on trust.', intro: 'Organisations across sectors rely on our teams for steady, thoughtful protection.', panelTitle: 'What clients value.', panelLead: 'Consistency, respectful service, and clear communication keep relationships strong over time.', panelText: 'We work as an extension of your team, adapting as sites, schedules, and priorities change.', features: [{ icon: 'heart', title: 'Long-term partners', desc: 'Relationships that grow with client needs.' }, { icon: 'check', title: 'Consistent delivery', desc: 'Reliable cover across every shift.' }, { icon: 'file', title: 'Clear reporting', desc: 'Information that supports decisions.' }, { icon: 'radio', title: 'Open communication', desc: 'Easy access to supervisors and managers.' }] },
  { file: 'contact-us.html', title: 'Contact Us', eyebrow: 'Contact Us', heading: 'Let’s talk about your security needs.', intro: 'Share your requirement and we will connect you with the right person.', panelTitle: 'A simple first conversation.', panelLead: 'Tell us about your site, timing, and the kind of support you are looking for.', panelText: 'We will ask a few practical questions, suggest a next step, and send a clear proposal when appropriate.', features: standardFeatures('your site'), contact: true, contactHeading: 'Reach us directly' },
  { file: 'infrastructure.html', title: 'Infrastructure', eyebrow: 'Infrastructure', heading: 'The support behind every post.', intro: 'Training spaces, supervision systems, and processes that keep service consistent.', panelTitle: 'Strong foundations for field teams.', panelLead: 'Our infrastructure helps guards stay prepared, informed, and supported throughout an assignment.', panelText: 'From induction rooms to reporting formats, each part of the system exists to make field work clearer.', features: [{ icon: 'graduation', title: 'Training spaces', desc: 'Practical sessions before deployment.' }, { icon: 'monitor', title: 'Monitoring tools', desc: 'Systems that support oversight.' }, { icon: 'file', title: 'Records', desc: 'Attendance and incident documentation.' }, { icon: 'truck', title: 'Logistics', desc: 'Uniforms and equipment managed on time.' }] },
  { file: 'career.html', title: 'Career', eyebrow: 'Careers', heading: 'Work that makes a visible difference.', intro: 'Explore roles, training, and growth in a team that values discipline and care.', panelTitle: 'A career with structure.', panelLead: 'We give new joiners a clear start and experienced guards a path to progress.', panelText: 'Supervisors coach, review, and recognise good work so people can build a long-term career in security.', features: [{ icon: 'graduation', title: 'Training', desc: 'Learn the essentials before your first shift.' }, { icon: 'target', title: 'Growth', desc: 'Clear milestones for progression.' }, { icon: 'users', title: 'Team support', desc: 'Supervisors who stay involved.' }, { icon: 'award', title: 'Recognition', desc: 'Good work is noticed and shared.' }], contact: true, contactHeading: 'Apply for a role' },
  { file: 'blog.html', title: 'Blog', eyebrow: 'Insights', heading: 'Practical ideas for safer workplaces.', intro: 'Short reads on planning, people, and the everyday details of good security.', panelTitle: 'Useful thinking, plainly shared.', panelLead: 'Our articles focus on decisions you can make this week, not abstract advice.', panelText: 'Expect short checklists, field-tested habits, and explanations of how security choices affect daily operations.', features: [{ icon: 'file', title: 'Planning guides', desc: 'Straightforward checklists for site reviews.' }, { icon: 'users', title: 'People topics', desc: 'Training, supervision, and communication.' }, { icon: 'monitor', title: 'Technology notes', desc: 'Where tools help and where they do not.' }, { icon: 'spark', title: 'Safety habits', desc: 'Small actions with real impact.' }] },
  { file: 'security-services-mumbai.html', title: 'Security Services Mumbai', eyebrow: 'Mumbai', heading: 'Security services across Mumbai.', intro: 'Local teams and practical plans for workplaces across the city.', panelTitle: 'Mumbai knowledge, dependable delivery.', panelLead: 'From busy commercial districts to residential towers, our teams understand the pace of the city.', panelText: 'We plan access, patrols, and reporting around your build-up, your neighbours, and your operating hours.', features: [{ icon: 'building', title: 'Commercial sites', desc: 'Reception, access, and floor cover.' }, { icon: 'lock', title: 'Residential', desc: 'Gate management and resident safety.' }, { icon: 'factory', title: 'Industrial', desc: 'Perimeter and shift-based patrols.' }, { icon: 'truck', title: 'Cash movement', desc: 'Planned and monitored transfers.' }] }
]

const pages = [
  { file: 'index.html', title: `${brand} | Security Services in India`, body: homeBody() },
  ...pageConfigs.map((page) => ({ file: page.file, title: `${page.title} | ${brand}`, body: innerBody(page) })),
  ...services.map((service) => ({
    file: `service-${service.slug}.html`,
    title: `${service.label} | ${brand}`,
    body: innerBody({
      eyebrow: 'Security Service',
      title: service.label,
      heading: service.label,
      intro: service.desc,
      panelTitle: `${service.label} that fits your site.`,
      panelLead: 'We agree the duties first, then place trained people and the right support around them.',
      panelText: 'Supervisors review attendance, incident notes, and feedback so the service stays useful as conditions change.',
      features: standardFeatures(service.label),
      contact: true,
      contactHeading: `Enquire about ${service.label}`
    })
  })),
  ...locationSlugs.map((slug) => {
    const city = titleCase(slug)
    return {
      file: `location-${slug}.html`,
      title: `Security Services in ${city} | ${brand}`,
      body: innerBody({
        eyebrow: `Location · ${city}`,
        title: `Security Services in ${city}`,
        heading: `Security services in ${city}.`,
        intro: `Local guard services, supervision, and support for organisations in ${city}.`,
        panelTitle: `Protection planned for ${city}.`,
        panelLead: 'We combine local availability with clear processes and dependable supervision.',
        panelText: `Tell us about your site in ${city} and we will shape a service around your hours, risks, and reporting needs.`,
        features: standardFeatures(city)
      })
    }
  }),
  ...careerSlugs.map((slug) => {
    const city = titleCase(slug)
    return {
      file: `career-${slug}.html`,
      title: `Security Guard Jobs in ${city} | ${brand}`,
      body: innerBody({
        eyebrow: `Careers · ${city}`,
        title: `Security Guard Jobs in ${city}`,
        heading: `Security guard jobs in ${city}.`,
        intro: `Find structured training, supportive supervision, and a clear next step in ${city}.`,
        panelTitle: `Start or grow your security career in ${city}.`,
        panelLead: 'We welcome disciplined people who take pride in helping others feel safe.',
        panelText: `Our team in ${city} will guide you through orientation, site briefing, and your first shifts.`,
        features: [
          { icon: 'graduation', title: 'Paid training', desc: 'Learn core duties before going on post.' },
          { icon: 'users', title: 'Supportive teams', desc: 'Supervisors who stay close to the field.' },
          { icon: 'clock', title: 'Shift options', desc: 'Roles that fit different schedules.' },
          { icon: 'target', title: 'Progression', desc: 'A clear route to senior roles.' }
        ],
        contact: true,
        contactHeading: `Apply in ${city}`
      })
    }
  })
]

const sitemapPage = { file: 'sitemap.html', title: `Sitemap | ${brand}` }
pages.push({ ...sitemapPage, body: sitemapBody(pages) })

mkdirSync(join(root, 'scripts'), { recursive: true })
for (const page of pages) {
  writeFileSync(join(root, page.file), layout({ title: page.title, description: `${page.title}. ${brand} provides trained security teams and practical protection across India.`, body: page.body }), 'utf8')
}

const generated = new Set(pages.map((page) => page.file))
for (const file of readdirSync(root)) {
  if (file.endsWith('.html') && !generated.has(file)) unlinkSync(join(root, file))
}

console.log(`Generated ${pages.length} HTML pages.`)

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Shield } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/50 backdrop-blur-md bg-bg/80">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          <Shield className="h-7 w-7 text-accent" />
          <span className="text-text">Zillion<span className="text-accent">Security</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to ? 'text-accent' : 'text-text-muted hover:text-text'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:+1234567890" className="text-sm font-medium text-text-muted hover:text-text transition-colors">
            <Phone className="mr-2 h-4 w-4" /> +1 (234) 567-890
          </a>
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-bg p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium py-2 text-text-muted hover:text-text transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+1234567890"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium py-2 text-text-muted hover:text-text transition-colors flex items-center gap-2"
          >
            <Phone className="h-4 w-4" /> +1 (234) 567-890
          </a>
        </div>
      )}
    </nav>
  );
}

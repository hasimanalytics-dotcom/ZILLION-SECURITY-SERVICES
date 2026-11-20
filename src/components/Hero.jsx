import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, UserCheck } from 'lucide-react';

const heroFeatures = [
  { icon: ShieldCheck, label: '24/7 Monitoring' },
  { icon: Lock, label: 'Advanced Encryption' },
  { icon: UserCheck, label: 'Certified Experts' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
          System Operational
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Protecting Your <br />
          <span className="text-accent">Digital World</span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed">
          Enterprise-grade cybersecurity solutions designed to safeguard your business from evolving threats. 24/7 monitoring, advanced threat detection, and rapid response.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn btn-primary btn-lg w-full sm:w-auto">
            Get Free Consultation
            <span className="ml-2">→</span>
          </Link>
          <Link to="/services" className="btn btn-outline btn-lg w-full sm:w-auto">
            View Services
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-8 text-text-muted text-sm">
          {heroFeatures.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <feature.icon className="h-5 w-5 text-accent" />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

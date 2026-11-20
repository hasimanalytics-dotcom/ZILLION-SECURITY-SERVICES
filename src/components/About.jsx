import React from 'react';
import { ShieldCheck, Award, Globe, Clock } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Clients Protected' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Support Available' },
];

const features = [
  { icon: ShieldCheck, title: 'Certified Professionals', desc: 'CISSP, CISM, and CEH certified security experts on staff.' },
  { icon: Award, title: 'Award Winning', desc: 'Recognized for excellence in cybersecurity services and innovation.' },
  { icon: Globe, title: 'Global Reach', desc: 'Protecting businesses across multiple continents and time zones.' },
  { icon: Clock, title: 'Rapid Response', desc: 'Average response time under 15 minutes for critical incidents.' },
];

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="placeholder-img h-[400px]">
              <span className="text-text-muted">Team / Office Placeholder Image</span>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">About Zillion Security</h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              Founded with a mission to make enterprise-grade cybersecurity accessible to businesses of all sizes. We combine cutting-edge technology with human expertise to deliver protection that actually works.
            </p>
            <p className="text-text-muted mb-8 leading-relaxed">
              From startups to Fortune 500 companies, our team has helped organizations secure their digital assets, meet compliance requirements, and respond to emerging threats with confidence.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-xs text-text-muted">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold mb-8 text-center">By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-accent">{stat.value}</span>
                <span className="text-text-muted text-sm mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

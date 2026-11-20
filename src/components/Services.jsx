import React from 'react';
import { Shield, Lock, Cpu, Network, User, FileCheck } from 'lucide-react';

const services = [
  {
    title: 'Network Security',
    icon: Network,
    description: 'Comprehensive firewall management, intrusion detection, and secure network architecture for your organization.',
    features: ['Firewall Management', 'VPN Solutions', 'Intrusion Prevention', 'Network Segmentation'],
  },
  {
    title: 'Cloud Security',
    icon: CloudIcon,
    description: 'Secure your cloud infrastructure with identity management, data protection, and compliance monitoring.',
    features: ['IAM & Identity', 'Data Encryption', 'Compliance Monitoring', 'Cloud Posture'],
  },
  {
    title: 'Endpoint Protection',
    icon: Cpu,
    description: 'Advanced endpoint detection and response (EDR) to protect all devices across your network.',
    features: ['EDR Solutions', 'Antivirus & Anti-malware', 'Patch Management', 'Device Control'],
  },
  {
    title: 'Vulnerability Assessment',
    icon: Shield,
    description: 'Regular penetration testing and vulnerability scanning to identify weaknesses before attackers do.',
    features: ['Penetration Testing', 'Vulnerability Scanning', 'Risk Assessment', 'Remediation Planning'],
  },
  {
    title: 'Incident Response',
    icon: FileCheck,
    description: 'Rapid response team ready to contain, investigate, and recover from security incidents.',
    features: ['24/7 Response', 'Threat Hunting', 'Forensic Analysis', 'Disaster Recovery'],
  },
  {
    title: 'Security Awareness',
    icon: User,
    description: 'Employee training programs to build a security-first culture and reduce human risk.',
    features: ['Phishing Simulation', 'Security Training', 'Policy Development', 'Compliance'],
  },
];

function CloudIcon({ className, size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 10h-1.26a8 8 0 0 0-7.04-6C11.02 6 7 9.88 7 14c0 1.5 0 2.84.24 4.08" />
      <path d="M21 16.12A8 8 0 0 1 10.22 21" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="section bg-primary-light">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive cybersecurity solutions tailored to protect your business at every level.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="group card bg-card border border-border p-8 rounded-2xl hover:border-accent/50 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-text-muted mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

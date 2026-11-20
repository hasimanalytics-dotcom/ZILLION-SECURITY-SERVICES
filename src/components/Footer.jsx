import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Product: ['Services', 'Pricing', 'About Us', 'Careers'],
  Company: ['Blog', 'Contact', 'Privacy Policy', 'Terms of Service'],
  Support: ['Help Center', 'Documentation', 'Status', 'Contact Support'],
};

const socials = [
  { name: 'GitHub', color: '#24292e', path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C-4.422 18.07-3.633 17.7-3.633 17.7C-3.069 16.8-2.34 16.8-2.34 16.8C2.049 16.8 3.148 17.6 3.148 17.6c2.739 4.021 8.184 4.051 8.184 4.051 6.585.989 10.02-2.85 10.02-2.85-1.485-3.71-3.64-4.97-3.64-4.97-3.36-2.28-8.21-1.09-8.21-1.09-6.73.46-5.15 2.62-5.15 2.62 4.12 2.94 6.28 4.03 6.28 4.03-1.07 2.12-2.59 3.26-3.89 3.97-3.34.25-6.65 1.16-6.65 1.16-.57-1.45-1.4-2.45-1.4-2.45-1.18-.81-2.86-.59-2.86-.59-2.38-.16-4.87-.82-4.87-.82C3.23 13.1 5.27 12.28 8.11 12.08c4.56-.54 8.77 1.25 8.77 1.25 3.89 1.94 5.94 4.65 5.94 4.65-1.29-1.01-3.15-1.28-4.12-1.6-1.29-.3-2.7-.45-4.24-.45-3.28 0-5.94 2.68-5.94 5.97 0 .47.16.92.39 1.27a1.56 1.56 0 0 1-.21 1.12c-.48.64-.74 1.41-.74 2.27 0 .8.27 1.56.74 2.16.19.26.57.44 1.05.44.74 0 1.44-.32 1.9-.84 1.13-1.13 1.46-2.67 1.46-4.39 0-.99-.36-1.82-.74-2.38-.13-.34-.3-.67-.3-.98 0-.27.06-.54.18-.85A11.96 11.96 0 0 1 12 2.297' },
  { name: 'LinkedIn', color: '#0077b5', path: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zm-3 5.5c0 1.38 1.11 2.5 2.48 2.5s2.48-1.12 2.48-2.5-1.11-2.5-2.48-2.5-2.48 1.12-2.48 2.5zm10.3 6.21c-.27 2.17-2.27 3.89-4.61 4.13v-7.01h2.65c1.04 0 1.43.6 1.43 1.32 0 .74-.42 1.32-1.51 1.32H8.49v-7.01h2.66c.47 0 .78.35.78.84v1.78H5.82v7.01H2.55V7.01H8.49v1.98c0 .43-.27.8-.76.8-.49 0-.8-.36-.8-.8V7.01c0-.54.43-.95 1.05-.95h2.66c.72 0 1.05.41 1.05.95v.26c0 .82.47 1.54 1.04 2.04zm-4.61-7.76c-1.03 0-1.87.84-1.87 1.87s.84 1.87 1.87 1.87 1.87-.84 1.87-1.87-.84-1.87-1.87-1.87zm10.3 7.76c-.27 2.17-2.27 3.89-4.61 4.13v-7.01h2.65c1.04 0 1.43.6 1.43 1.32 0 .74-.42 1.32-1.51 1.32h-2.66v-7.01h2.66c.47 0 .78.35.78.84v1.78h-3.45v7.01H15.5V7.01h3.46z' },
  { name: 'Twitter', color: '#1da1f2', path: 'M23.3 3.8c-.9.4-1.8.7-2.8 1 1-.6 1.7-1.5 2.2-2.5-.9.5-1.9.9-2.9 1.3-1-1-2.3-1.6-3.7-1.6-2.8 0-5 2.2-5 5 0 .4 0 .8.1 1.2-4.2-.2-7.9-2.2-10.6-5.3C2.6 6.5 2 7.8 2 9.2c0 1.8.7 3.4 1.9 4.5C2.6 14 1.2 13.7 1 13.3c0 .1 0 .3.1.5 0 2.4 1.7 4.5 3.9 4.9-1.7.5-3.5.8-5.4.8-.5 0-1-.1-1.5-.2C.8 18.1 2.8 19 5 19c-1.6.1-3.1-.7-4.2-1.7-.1 0-.2 0-.3-.1c.4 1.3 1.7 2.3 3.1 2.3c-.4 0-.8-.1-1.2-.3c1.3 2.4 4 4.1 6.8 4.1c-1.7 1.2-3.8 1.9-6 1.9c-.4 0-.8 0-1.2-.1c2.5 1.6 5.6 2.5 8.8 2.5c10.5 0 16.3-8.7 16.3-16.3 0-.2 0-.5-.1-.8c1.3-.9 2.5-1.9 3.5-3.1' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary pt-12 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold tracking-tighter">Zillion<span className="text-accent">Security</span></span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Enterprise-grade cybersecurity solutions to protect your business from evolving threats.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col space-y-3">
              <h4 className="text-sm font-semibold text-text mb-2 uppercase tracking-wider">{category}</h4>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Zillion Security. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors hover:opacity-80"
                aria-label={social.name}
                style={{ backgroundColor: social.color }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" dangerouslySetInnerHTML={{ __html: social.path }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@zillionsecurity.com' },
  { icon: Phone, label: 'Phone', value: '+1 (234) 567-890' },
  { icon: MapPin, label: 'Address', value: '123 Security Blvd, Suite 400, Sydney, NSW 2000' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6 text-success">
              <Send className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
            <p className="text-text-muted mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn btn-primary"
            >
              Send Another Message <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-primary-light">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Have a security project in mind? Fill out the form below and a member of our team will contact you shortly.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0 text-accent">
                  <info.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-text">{info.label}</p>
                  <a href={info.label === 'Email' ? `mailto:${info.value}` : info.label === 'Phone' ? `tel:${info.value}` : undefined} className="text-text-muted hover:text-accent transition-colors">
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            <a href="#" className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="card border border-border p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text focus:outline-none focus:border-accent transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tell us about your security needs..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary w-full py-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message <Send className="h-4 w-4" />'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

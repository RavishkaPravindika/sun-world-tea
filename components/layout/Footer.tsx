'use client';

import Link from 'next/link';
import { Leaf, MapPin, Mail, Phone, Share2, AtSign, Rss, ExternalLink } from 'lucide-react';
import { googleMapsUrl } from '@/data/reviews';


const navLinks = [
  { href: '/tea-collection', label: 'Tea Collection' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Decorative leaf shapes */}
      <div
        className="leaf-decoration absolute -top-20 -right-20 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, var(--color-brand-primary) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="leaf-decoration absolute -bottom-20 -left-20 w-64 h-64 rounded-full"
        style={{ background: 'radial-gradient(circle, var(--color-brand-secondary) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary))' }}
              >
                <Leaf size={17} color="#14210F" />
              </div>
              <span className="font-serif font-semibold text-lg" style={{ color: 'var(--color-text-primary)' }}>
                SUN WORLD TEA
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'var(--color-text-muted)' }}>
              A modern premium tea destination committed to quality, character and authentic tea culture. Carefully selected teas for those who appreciate the art of exceptional tea.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Share2, label: 'Instagram', href: '#' },
                { icon: AtSign, label: 'Facebook', href: '#' },
                { icon: Rss, label: 'Twitter / X', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-muted)',
                    background: 'var(--color-bg-card)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-brand-primary)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-text-accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3
              className="font-serif text-base font-semibold mb-5 tracking-wide"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Explore
            </h3>
            <ul className="space-y-3" role="list">
              {[
                { href: '/', label: 'Home' },
                ...navLinks,
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--color-text-accent)'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'}
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-xs" style={{ color: 'var(--color-brand-primary)' }}>›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tea Grades Column */}
          <div>
            <h3
              className="font-serif text-base font-semibold mb-5 tracking-wide"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Tea Grades
            </h3>
            <ul className="space-y-3" role="list">
              {['OP — Orange Pekoe', 'BOP — Broken Orange Pekoe', 'BOPF', 'FBOP', 'Green Tea', 'Specialty Tea'].map((grade) => (
                <li key={grade}>
                  <Link
                    href="/tea-collection"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--color-text-accent)'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'}
                  >
                    {grade}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3
              className="font-serif text-base font-semibold mb-5 tracking-wide"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Visit Us
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--color-brand-primary)' }} />
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Sun World Tea<br />
                  [Address to be confirmed]<br />
                  Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" style={{ color: 'var(--color-brand-primary)' }} />
                <a
                  href="tel:+94000000000"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--color-text-accent)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'}
                >
                  +94 (0) 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0" style={{ color: 'var(--color-brand-primary)' }} />
                <a
                  href="mailto:info@sunworldtea.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--color-text-accent)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'}
                >
                  info@sunworldtea.com
                </a>
              </li>
            </ul>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium tracking-wide transition-colors duration-200"
              style={{ color: 'var(--color-text-accent)' }}
            >
              Open in Google Maps <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: '1px solid var(--color-border)',
            color: 'var(--color-text-muted)',
          }}
        >
          <p>© {currentYear} Sun World Tea. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span
              className="text-xs tracking-widest font-medium"
              style={{ color: 'var(--color-brand-primary)', opacity: 0.9 }}
            >
              THE ART OF EXCEPTIONAL TEA
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="transition-colors duration-200 hover:underline"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

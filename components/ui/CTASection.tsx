'use client'

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: 'green' | 'dark' | 'ivory';
}

export default function CTASection({
  eyebrow,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = 'green',
}: CTASectionProps) {
  const bgStyle = {
    green: {
      background: 'var(--color-brand-forest)',
    },
    dark: {
      background: 'var(--color-brand-forest)',
    },
    ivory: {
      background: 'var(--color-bg-secondary)',
    },
  }[variant];

  const isDarkSurface = variant !== 'ivory';

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6" style={bgStyle}>
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(81,227,11,0.35) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(58,178,12,0.28) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <AnimatedSection>
          {eyebrow && (
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: isDarkSurface ? 'var(--color-brand-primary)' : 'var(--color-text-accent)' }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-5"
            style={{ color: isDarkSurface ? 'var(--color-text-on-dark)' : 'var(--color-text-primary)' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: isDarkSurface ? 'rgba(234, 243, 229, 0.82)' : 'var(--color-text-muted)' }}
            >
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-medium text-sm tracking-wide transition-all duration-250"
                style={{
                  background: 'var(--color-brand-primary)',
                  color: '#14210F',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = '';
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                {primaryCTA.label}
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-medium text-sm tracking-wide transition-all duration-250 border"
                style={{
                  borderColor: isDarkSurface ? 'rgba(234, 243, 229, 0.5)' : 'var(--color-border-strong)',
                  color: isDarkSurface ? 'var(--color-text-on-dark)' : 'var(--color-text-accent)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-brand-primary)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-primary-subtle)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = isDarkSurface ? 'rgba(234, 243, 229, 0.5)' : 'var(--color-border-strong)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.transform = '';
                }}
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

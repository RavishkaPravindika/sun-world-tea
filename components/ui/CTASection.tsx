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
      background: 'linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 60%, var(--color-brand-accent) 100%)',
    },
    dark: {
      background: 'linear-gradient(135deg, #0D1A08 0%, #1E2F17 100%)',
    },
    ivory: {
      background: 'var(--color-bg-secondary)',
    },
  }[variant];

  const isLight = variant === 'green' || variant === 'dark';

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6" style={bgStyle}>
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.6) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(125,184,90,0.5) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <AnimatedSection>
          {eyebrow && (
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: isLight ? 'rgba(201, 168, 76, 0.9)' : 'var(--color-brand-gold)' }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-5"
            style={{ color: isLight ? '#FAF7F2' : 'var(--color-text-primary)' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: isLight ? 'rgba(250, 247, 242, 0.78)' : 'var(--color-text-muted)' }}
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
                  background: isLight ? '#FAF7F2' : 'var(--color-brand-primary)',
                  color: isLight ? 'var(--color-brand-primary)' : '#FAF7F2',
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
                  borderColor: isLight ? 'rgba(250, 247, 242, 0.5)' : 'var(--color-border-gold)',
                  color: isLight ? 'rgba(250, 247, 242, 0.9)' : 'var(--color-brand-gold)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = isLight ? '#FAF7F2' : 'var(--color-brand-gold)';
                  (e.currentTarget as HTMLElement).style.background = isLight ? 'rgba(250,247,242,0.08)' : 'rgba(201,168,76,0.08)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = isLight ? 'rgba(250, 247, 242, 0.5)' : 'var(--color-border-gold)';
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


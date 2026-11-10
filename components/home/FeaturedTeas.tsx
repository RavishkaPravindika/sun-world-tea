'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { teaGrades } from '@/data/teas';

const featuredGrades = teaGrades.slice(0, 8);

const gradeColorMap: Record<string, { badge: string; glow: string }> = {
  amber: { badge: 'rgba(81, 227, 11, 0.16)', glow: 'rgba(81, 227, 11, 0.06)' },
  orange: { badge: 'rgba(117, 233, 67, 0.2)', glow: 'rgba(117, 233, 67, 0.07)' },
  red: { badge: 'rgba(45, 140, 25, 0.14)', glow: 'rgba(45, 140, 25, 0.05)' },
  yellow: { badge: 'rgba(160, 237, 125, 0.22)', glow: 'rgba(160, 237, 125, 0.08)' },
  green: { badge: 'rgba(58, 178, 12, 0.14)', glow: 'rgba(58, 178, 12, 0.06)' },
  stone: { badge: 'rgba(201, 242, 183, 0.36)', glow: 'rgba(201, 242, 183, 0.12)' },
  purple: { badge: 'rgba(36, 101, 29, 0.12)', glow: 'rgba(36, 101, 29, 0.04)' },
};

export default function FeaturedTeas() {
  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6"
      style={{ background: 'var(--color-bg-primary)' }}
      aria-label="Featured Tea Collection"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-14 sm:mb-16">
          <SectionHeading
            eyebrow="Our Collection"
            title="Explore Our Tea Grades"
            subtitle="From refined whole-leaf varieties to rich broken grades — each tea in our collection is selected with care for quality, character and authentic tea experience."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featuredGrades.map((tea, index) => {
            const colors = gradeColorMap[tea.color] || gradeColorMap.amber;
            return (
              <AnimatedSection key={tea.id} delay={index * 0.06} direction="up">
                <article
                  className="relative group flex flex-col h-full rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-gold)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                  }}
                >
                  {/* Grade badge top accent bar */}
                  <div
                    className="h-0.5 w-full"
                    style={{ background: 'linear-gradient(90deg, var(--color-brand-gold), transparent)' }}
                    aria-hidden="true"
                  />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Grade Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className="inline-block text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm"
                        style={{ background: colors.badge, color: 'var(--color-brand-text)' }}
                      >
                        {tea.grade}
                      </span>
                      <span
                        className="text-xs font-medium capitalize px-2 py-0.5 rounded-full"
                        style={{
                          background: 'var(--color-bg-secondary)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {tea.category}
                      </span>
                    </div>

                    {/* Name & Tagline */}
                    <h3
                      className="font-serif text-xl font-semibold leading-tight mb-1"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {tea.name}
                    </h3>
                    <p
                      className="text-xs font-medium tracking-wide italic mb-3"
                      style={{ color: 'var(--color-brand-text)' }}
                    >
                      {tea.tagline}
                    </p>

                    {/* Character preview */}
                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {tea.character.length > 120 ? tea.character.slice(0, 120) + '…' : tea.character}
                    </p>

                    {/* Quick facts */}
                    <div
                      className="flex items-center gap-4 mb-5 text-xs pt-4"
                      style={{ borderTop: '1px solid var(--color-border)' }}
                    >
                      <div>
                        <span className="block mb-0.5 font-medium" style={{ color: 'var(--color-text-muted)' }}>Speed</span>
                        <span className="capitalize font-semibold" style={{ color: 'var(--color-text-secondary)' }}>{tea.infusionSpeed}</span>
                      </div>
                      <div
                        className="w-px h-6 self-center"
                        style={{ background: 'var(--color-border)' }}
                        aria-hidden="true"
                      />
                      <div>
                        <span className="block mb-0.5 font-medium" style={{ color: 'var(--color-text-muted)' }}>Body</span>
                        <span className="capitalize font-semibold" style={{ color: 'var(--color-text-secondary)' }}>{tea.bodyStrength}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/tea-collection"
                      className="group/btn inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                      style={{ color: 'var(--color-text-accent)' }}
                      aria-label={`Learn more about ${tea.name}`}
                    >
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover/btn:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={0.3}>
          <Link
            href="/tea-collection"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-medium text-sm tracking-wide transition-all duration-250"
            style={{
              background: 'var(--color-brand-primary)',
              color: '#14210F',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-secondary)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-primary)';
              (e.currentTarget as HTMLElement).style.transform = '';
              (e.currentTarget as HTMLElement).style.boxShadow = '';
            }}
          >
            View Full Tea Collection
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

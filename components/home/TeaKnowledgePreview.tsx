'use client'

import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const knowledgePoints = [
  {
    grade: 'OP',
    fact: 'Whole-leaf grade â€” larger, wiry leaves that brew into a lighter, more refined and balanced cup.',
  },
  {
    grade: 'BOP',
    fact: 'Broken-leaf grade â€” smaller pieces that brew faster, releasing a stronger, brisk and full-bodied liquor.',
  },
  {
    grade: 'BOPF',
    fact: 'Fine fannings â€” very small particles offering the fastest brew and the strongest colour and body.',
  },
  {
    grade: 'FBOP',
    fact: 'Broken leaf with golden tips â€” a grade that balances strength with refined aromatic character.',
  },
];

export default function TeaKnowledgePreview() {
  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: 'var(--color-bg-primary)' }}
      aria-label="Tea Knowledge"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            var(--color-brand-primary) 0px,
            var(--color-brand-primary) 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <AnimatedSection direction="left">
            <SectionHeading
              eyebrow="Tea Knowledge"
              title="Understanding Tea Grades"
              subtitle="Not all teas are alike. The grade of a tea â€” from whole-leaf OP to fine BOPF fannings â€” tells you a great deal about what to expect in the cup."
            />

            <div className="mt-8 space-y-4">
              {knowledgePoints.map((point, i) => (
                <div
                  key={point.grade}
                  className="flex items-start gap-4 p-4 rounded-sm transition-all duration-200 hover:-translate-x-1"
                  style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
                >
                  <span
                    className="shrink-0 inline-flex items-center justify-center w-11 h-8 text-xs font-bold tracking-widest rounded-sm"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary))',
                      color: '#FAF7F2',
                    }}
                  >
                    {point.grade}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {point.fact}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/tea-collection"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-sm font-medium text-sm tracking-wide transition-all duration-250"
                style={{
                  border: '1px solid var(--color-border-gold)',
                  color: 'var(--color-brand-gold)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.08)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-brand-gold)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-gold)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-gold)';
                  (e.currentTarget as HTMLElement).style.transform = '';
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                <BookOpen size={16} />
                Explore Tea Knowledge
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right: Visual */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              {/* Main visual card */}
              <div
                className="rounded-sm overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)',
                  minHeight: '380px',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=700&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.4,
                  }}
                  role="img"
                  aria-label="Close-up of premium tea leaves"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(13,26,8,0.7) 0%, rgba(21,34,16,0.5) 100%)' }}
                  aria-hidden="true"
                />

                <div className="relative p-10 flex flex-col justify-end h-full" style={{ minHeight: '380px' }}>
                  <div className="mt-auto">
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ color: 'var(--color-brand-gold)' }}
                    >
                      Did You Know
                    </p>
                    <p
                      className="font-serif text-xl sm:text-2xl font-medium leading-snug mb-4"
                      style={{ color: '#FAF7F2' }}
                    >
                      "Orange Pekoe" has nothing to do with orange flavour.
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(250,247,242,0.75)' }}>
                      It is a traditional tea-grade classification believed to derive from the Dutch Royal House of Orange-Nassau and the historical tea trade.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div
                className="absolute -bottom-5 -left-5 px-5 py-4 rounded-sm shadow-xl hidden sm:block"
                style={{
                  background: 'var(--color-bg-glass)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--color-border-gold)',
                }}
              >
                <p className="text-2xl font-serif font-bold" style={{ color: 'var(--color-brand-gold)' }}>8+</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>Tea Varieties</p>
              </div>

              <div
                className="absolute -top-5 -right-5 px-5 py-4 rounded-sm shadow-xl hidden sm:block"
                style={{
                  background: 'var(--color-bg-glass)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <p className="text-2xl font-serif font-bold" style={{ color: 'var(--color-brand-secondary)' }}>100%</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>Ceylon Origin</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}


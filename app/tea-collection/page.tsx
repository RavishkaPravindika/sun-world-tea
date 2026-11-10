import type { Metadata } from 'next';
import { teaGrades } from '@/data/teas';
import TeaGradeCard from '@/components/tea/TeaGradeCard';
import TeaComparison from '@/components/tea/TeaComparison';
import TeaFAQ from '@/components/tea/TeaFAQ';
import CTASection from '@/components/ui/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Tea Collection — Premium Ceylon Tea Grades',
  description:
    'Explore Sun World Tea\'s full collection: OP (Orange Pekoe), BOP, BOPF, FBOP, Pekoe, Green Tea and specialty Ceylon teas. In-depth tea knowledge for every grade.',
  openGraph: {
    title: 'Tea Collection | Sun World Tea',
    description: 'Discover our carefully selected range of premium Ceylon tea grades — from whole-leaf OP to fine BOPF and specialty varieties.',
  },
};

export default function TeaCollectionPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6 overflow-hidden"
        style={{
          background: 'var(--color-bg-tertiary)',
        }}
        aria-label="Tea Collection page hero"
      >
        {/* Abstract leaf shape decoration */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
          style={{
            background: 'var(--color-brand-accent)',
            opacity: 0.15,
            transform: 'translate(30%, -20%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'var(--color-bg-veil)' }}
          aria-hidden="true"
        />

        {/* Decorative border */}
        <div
          className="absolute inset-x-8 top-20 bottom-0 pointer-events-none hidden lg:block"
          style={{ borderLeft: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-text-accent)' }}
            >
              Sun World Tea
            </p>
            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-5"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Tea Collection
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
              style={{ color: 'var(--color-text-muted)' }}
            >
              A comprehensive guide to our carefully selected Ceylon tea grades — their leaf character, aroma, liquor and brewing notes. Presented for knowledge and appreciation, not commerce.
            </p>
            {/* Grade quick-links */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {teaGrades.map((tea) => (
                <a
                  key={tea.id}
                  href={`#tea-${tea.id}`}
                  className="grade-pill"
                >
                  {tea.grade}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tea Grades */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ background: 'var(--color-bg-primary)' }}
        aria-label="Tea Grade Information"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          {teaGrades.map((tea, index) => (
            <AnimatedSection key={tea.id} delay={0.05} direction="up">
              <TeaGradeCard tea={tea} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <TeaComparison />

      {/* FAQ */}
      <TeaFAQ />

      {/* CTA */}
      <CTASection
        eyebrow="Visit Us"
        title="Experience These Teas In Person"
        subtitle="The best way to discover which tea suits you is to visit Sun World Tea and experience the collection first-hand."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'Our Story', href: '/about' }}
        variant="green"
      />
    </>
  );
}

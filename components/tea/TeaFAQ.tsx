'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { teaFAQs } from '@/data/teas';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div
      className="rounded-sm overflow-hidden transition-all duration-200"
      style={{
        border: `1px solid ${open ? 'var(--color-border-gold)' : 'var(--color-border)'}`,
        background: 'var(--color-bg-card)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left transition-colors duration-200"
        aria-expanded={open}
        aria-controls={id}
        id={`${id}-button`}
        style={{
          background: open ? 'var(--color-brand-primary-subtle)' : 'transparent',
        }}
      >
        <div className="flex items-start gap-3">
          <HelpCircle
            size={17}
            className="shrink-0 mt-0.5"
            style={{ color: open ? 'var(--color-brand-primary)' : 'var(--color-text-accent)' }}
          />
          <span
            className="font-medium text-sm sm:text-base leading-snug"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {question}
          </span>
        </div>
        <span
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: open ? 'var(--color-brand-gold)' : 'var(--color-bg-secondary)',
            color: open ? '#14210F' : 'var(--color-text-muted)',
          }}
          aria-hidden="true"
        >
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </span>
      </button>

      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-button`}
        style={{
          maxHeight: open ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <div
          className="px-5 sm:px-6 pb-5 pt-0 ml-8"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-sm sm:text-base leading-relaxed pt-4" style={{ color: 'var(--color-text-muted)' }}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TeaFAQ() {
  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6"
      style={{ background: 'var(--color-bg-primary)' }}
      aria-label="Tea Knowledge FAQ"
    >
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="mb-10 sm:mb-12">
          <SectionHeading
            eyebrow="Tea Knowledge"
            title="Frequently Asked Questions"
            subtitle="Common questions about tea grades, brewing and Ceylon tea — answered."
            centered
          />
        </AnimatedSection>

        <div className="space-y-3">
          {teaFAQs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <FAQItem question={faq.question} answer={faq.answer} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

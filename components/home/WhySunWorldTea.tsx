'use client'

import { Leaf, Award, Heart, Users, Sprout, Globe } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const values = [
  {
    icon: Leaf,
    title: 'Carefully Selected Tea',
    description:
      'Every tea we offer is evaluated for leaf quality, aroma, appearance and taste before it reaches your cup. We work to maintain a consistent standard in everything we select.',
  },
  {
    icon: Award,
    title: 'Quality & Character',
    description:
      'We believe that exceptional tea should have character — a distinct personality in the cup. Quality is not just about grade; it is about the complete experience from leaf to liquor.',
  },
  {
    icon: Sprout,
    title: 'Natural Tea Experience',
    description:
      'We value tea in its most honest form — naturally grown, carefully processed, and presented without unnecessary embellishment. Authenticity is at the heart of what we do.',
  },
  {
    icon: Heart,
    title: 'Passion for Tea',
    description:
      'Sun World Tea was founded on a genuine love for tea. That passion shapes every decision we make — from which teas we stock to how we share tea knowledge with our customers.',
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description:
      'We want every visit to Sun World Tea to feel welcoming and informative. Our goal is to be a place where both tea newcomers and experienced drinkers feel at home.',
  },
  {
    icon: Globe,
    title: 'Modern Tea Culture',
    description:
      'We are building a contemporary tea destination that respects tradition while embracing the tastes and expectations of today\'s tea drinkers. Tea is for everyone.',
  },
];

export default function WhySunWorldTea() {
  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: 'var(--color-bg-secondary)' }}
      aria-label="Why Sun World Tea"
    >
      {/* Decorative radial background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(81,227,11,0.12) 0%, transparent 70%)',
          transform: 'translate(40%, -20%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection className="mb-14 sm:mb-16">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Why Sun World Tea"
            subtitle="We are a newer tea brand, but our commitment to quality and authentic tea culture is unwavering. Here is what drives us."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <div
                  className="group p-7 rounded-sm h-full transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-gold)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Subtle top gradient */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--color-brand-gold), transparent)' }}
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary))',
                      boxShadow: 'var(--glow-green)',
                    }}
                  >
                    <Icon size={22} color="#14210F" strokeWidth={1.5} />
                  </div>

                  <h3
                    className="font-serif text-lg font-semibold mb-3 leading-snug"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

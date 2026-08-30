'use client'

import Link from 'next/link';
import { Star, ExternalLink, Info } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { placeholderReviews, googleMapsUrl } from '@/data/reviews';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? '#C9A84C' : 'none'}
          color={i < rating ? '#C9A84C' : 'var(--color-border)'}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: 'var(--color-bg-secondary)' }}
      aria-label="Customer Reviews"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(74,124,40,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Placeholder notice */}
        <AnimatedSection>
          <div
            className="flex items-start gap-3 p-4 rounded-sm mb-10 max-w-2xl mx-auto"
            style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid var(--color-border-gold)' }}
            role="note"
            aria-label="Review integration notice"
          >
            <Info size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-brand-gold)' }} />
            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              <strong style={{ color: 'var(--color-brand-gold)' }}>Integration Note:</strong> These are structured placeholder reviews showing the format for this section. Real customer reviews from the{' '}
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80" style={{ color: 'var(--color-brand-gold)' }}>
                Google Maps listing
              </a>{' '}
              can be integrated via the Google Business Profile API or supplied manually.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-14 text-center">
          <SectionHeading
            eyebrow="What Our Customers Say"
            title="Reviews from Our Guests"
            subtitle="We are proud to share feedback from those who have visited Sun World Tea and experienced our selection first-hand."
            centered
          />

          {/* Google branding */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
              Google Reviews
            </span>
            <div className="flex items-center gap-0.5 ml-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#C9A84C" color="#C9A84C" aria-hidden="true" />)}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {placeholderReviews.map((review, index) => (
            <AnimatedSection key={review.id} delay={index * 0.07}>
              <blockquote
                className="relative group flex flex-col h-full p-6 rounded-sm transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-gold)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Quote mark */}
                <span
                  className="absolute top-4 right-5 font-serif text-5xl leading-none opacity-10 select-none pointer-events-none"
                  style={{ color: 'var(--color-brand-gold)' }}
                  aria-hidden="true"
                >
                  "
                </span>

                <div className="flex items-center gap-3 mb-4">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-semibold text-sm"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary))',
                      color: '#FAF7F2',
                    }}
                    aria-hidden="true"
                  >
                    {review.initials}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-sm block" style={{ color: 'var(--color-text-primary)' }}>
                      {review.name}
                    </cite>
                    <StarRating rating={review.rating} />
                  </div>
                </div>

                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-muted)' }}>
                  "{review.text}"
                </p>

                <div
                  className="flex items-center justify-between mt-4 pt-4"
                  style={{ borderTop: '1px solid var(--color-border)' }}
                >
                  <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {review.date}
                  </span>
                  {review.isPlaceholder && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--color-brand-gold)' }}
                    >
                      Sample Format
                    </span>
                  )}
                </div>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={0.3}>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm font-medium text-sm tracking-wide transition-all duration-250 border"
            style={{
              borderColor: 'var(--color-border-gold)',
              color: 'var(--color-brand-gold)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.08)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.transform = '';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            View on Google Maps
            <ExternalLink size={14} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}


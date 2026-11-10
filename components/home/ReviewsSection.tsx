'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Star, ExternalLink, MessageSquarePlus, RefreshCw } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { GoogleReview, ReviewsResponse, googleMapsUrl, googleWriteReviewUrl } from '@/data/reviews';

function isGoogleReview(value: unknown): value is GoogleReview {
  if (!value || typeof value !== 'object') return false;
  const review = value as Record<string, unknown>;
  return (
    typeof review.id === 'string' &&
    typeof review.name === 'string' &&
    typeof review.initials === 'string' &&
    typeof review.rating === 'number' &&
    typeof review.text === 'string' &&
    typeof review.date === 'string' &&
    (review.avatar === undefined || typeof review.avatar === 'string') &&
    (review.profileUrl === undefined || typeof review.profileUrl === 'string')
  );
}

function isReviewsResponse(value: unknown): value is ReviewsResponse {
  if (!value || typeof value !== 'object') return false;
  const response = value as Record<string, unknown>;
  return (
    Array.isArray(response.reviews) &&
    (response.rating === null || typeof response.rating === 'number') &&
    typeof response.totalReviews === 'number' &&
    response.reviews.every(isGoogleReview)
  );
}

function getApiError(value: unknown): string {
  if (value && typeof value === 'object' && 'error' in value && typeof value.error === 'string') {
    return value.error;
  }
  return 'Google reviews are temporarily unavailable.';
}

async function requestReviews(): Promise<ReviewsResponse> {
  const res = await fetch('/api/reviews', { cache: 'no-store' });
  const data: unknown = await res.json();
  if (!res.ok) {
    throw new Error(getApiError(data));
  }
  if (!isReviewsResponse(data)) {
    throw new Error('Google reviews response was invalid.');
  }
  return data;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? '#51E30B' : 'none'}
          color={i < rating ? '#51E30B' : 'var(--color-border)'}
        />
      ))}
    </div>
  );
}

function ReviewCardSkeleton() {
  return (
    <div
      className="p-6 rounded-sm h-full animate-pulse flex flex-col justify-between"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        minHeight: '220px',
      }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full shrink-0"
            style={{ background: 'var(--color-bg-tertiary)' }}
          />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-28 rounded" style={{ background: 'var(--color-bg-tertiary)' }} />
            <div className="h-3 w-20 rounded" style={{ background: 'var(--color-bg-tertiary)' }} />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full rounded" style={{ background: 'var(--color-bg-tertiary)' }} />
          <div className="h-3 w-5/6 rounded" style={{ background: 'var(--color-bg-tertiary)' }} />
          <div className="h-3 w-4/6 rounded" style={{ background: 'var(--color-bg-tertiary)' }} />
        </div>
      </div>
      <div
        className="mt-4 pt-4 h-3 w-24 rounded"
        style={{ background: 'var(--color-bg-tertiary)', borderTop: '1px solid var(--color-border)' }}
      />
    </div>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = useCallback(async () => {
    setIsRefreshing(true);
    setError(null);
    try {
      const data = await requestReviews();
      setReviews(data.reviews);
      setRating(data.rating);
      setTotalReviews(data.totalReviews);
    } catch (error) {
      console.error('Failed to fetch real-time reviews:', error);
      setError(error instanceof Error ? error.message : 'Google reviews are temporarily unavailable.');
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    let active = true;
    requestReviews()
      .then((data) => {
        if (!active) return;
        setReviews(data.reviews);
        setRating(data.rating);
        setTotalReviews(data.totalReviews);
      })
      .catch((error: unknown) => {
        if (!active) return;
        console.error('Failed to fetch real-time reviews:', error);
        setError(error instanceof Error ? error.message : 'Google reviews are temporarily unavailable.');
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

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
          background: 'radial-gradient(ellipse at 50% 50%, rgba(81,227,11,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection className="mb-14 text-center">
          <SectionHeading
            eyebrow="What Our Customers Say"
            title="Reviews from Our Guests"
            subtitle="Real feedback from tea lovers and visitors who have experienced Sun World Tea."
            centered
          />

          {/* Google branding & Live Rating Summary */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {rating !== null && totalReviews !== null && (
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  Google Reviews
                </span>
                <span className="text-xs font-bold" style={{ color: 'var(--color-text-accent)' }}>
                  {rating.toFixed(1)}
                </span>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={13} fill="#51E30B" color="#51E30B" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  ({totalReviews} reviews)
                </span>
              </div>
            )}

            <button
              onClick={fetchReviews}
              disabled={isRefreshing}
              title="Refresh live reviews"
              className="p-2 rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-50"
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)',
              }}
              aria-label="Refresh real-time reviews"
            >
              <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
            </button>
          </div>
        </AnimatedSection>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, idx) => <ReviewCardSkeleton key={idx} />)
            : reviews.length > 0
              ? reviews.map((review, index) => (
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
                      style={{ color: 'var(--color-brand-primary)' }}
                      aria-hidden="true"
                    >
                      &quot;
                    </span>

                    <div className="flex items-center gap-3 mb-4">
                      {/* Avatar with image or initials */}
                      {review.avatar ? (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[var(--color-border)]">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-semibold text-sm"
                          style={{
                            background:
                              'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary))',
                            color: '#14210F',
                          }}
                          aria-hidden="true"
                        >
                          {review.initials ||
                            review.name
                              .split(' ')
                              .map((w) => w[0])
                              .join('')
                              .slice(0, 2)
                              .toUpperCase()}
                        </div>
                      )}

                      <div className="overflow-hidden">
                        <cite
                          className="not-italic font-semibold text-sm block truncate"
                          style={{ color: 'var(--color-text-primary)' }}
                        >
                          {review.name}
                        </cite>
                        <StarRating rating={review.rating} />
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-muted)' }}>
                      &quot;{review.text}&quot;
                    </p>

                    <div
                      className="flex items-center justify-between mt-4 pt-4"
                      style={{ borderTop: '1px solid var(--color-border)' }}
                    >
                      <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {review.date || 'Recent'}
                      </span>
                      <div className="flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                          Google
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </AnimatedSection>
                ))
              : (
                <p
                  className="md:col-span-2 lg:col-span-3 text-center py-10"
                  style={{ color: 'var(--color-text-muted)' }}
                  role={error ? 'alert' : 'status'}
                >
                  {error ??
                    (totalReviews
                      ? 'Google provides the rating and review count, but not the review details through this API response. Read the reviews on Google Maps.'
                      : 'No Google reviews are available yet.')}
                </p>
              )}
        </div>
        {error && reviews.length > 0 && (
          <p className="mt-4 text-center text-sm" style={{ color: 'var(--color-text-muted)' }} role="status">
            {error}
          </p>
        )}

        {/* Action Buttons */}
        <AnimatedSection className="mt-12 flex flex-wrap items-center justify-center gap-4" delay={0.3}>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm font-medium text-sm tracking-wide transition-all duration-250 border"
            style={{
              borderColor: 'var(--color-border-gold)',
              color: 'var(--color-text-accent)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-primary-subtle)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-gold)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.transform = '';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Read All on Google Maps
            <ExternalLink size={14} />
          </a>

          <a
            href={googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm font-medium text-sm tracking-wide transition-all duration-250"
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
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <MessageSquarePlus size={16} />
            Write a Review
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

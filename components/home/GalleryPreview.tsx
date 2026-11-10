'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { heroGalleryImages } from '@/data/gallery';

export default function GalleryPreview() {
  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6"
      style={{ background: 'var(--color-bg-primary)' }}
      aria-label="Gallery Preview"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Gallery"
            title="A Visual Journey Through Tea"
            subtitle="From leaf to cup — a selection of images capturing the world of Sun World Tea."
          />
          <Link
            href="/gallery"
            className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium transition-all duration-250 border self-start sm:self-auto"
            style={{
              borderColor: 'var(--color-border-gold)',
              color: 'var(--color-text-accent)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-primary-subtle)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.transform = '';
            }}
          >
            View Full Gallery
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-0">
          {heroGalleryImages.map((image, index) => (
            <AnimatedSection key={image.id} delay={index * 0.06} className="mb-4 break-inside-avoid">
              <Link
                href="/gallery"
                className="gallery-item block rounded-sm overflow-hidden relative group"
                aria-label={`View gallery — ${image.alt}`}
                style={{
                  aspectRatio: index % 3 === 0 ? '4/5' : index % 3 === 1 ? '1/1' : '3/4',
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: 'rgba(16,27,19,0.35)' }}
                  aria-hidden="true"
                >
                  <div
                    className="px-3 py-1.5 rounded-sm text-xs font-medium tracking-wide"
                    style={{ background: 'var(--color-bg-glass)', color: 'var(--color-text-primary)', backdropFilter: 'blur(8px)' }}
                  >
                    View Gallery
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

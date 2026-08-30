'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryImages, galleryCategories, type GalleryCategory } from '@/data/gallery';
import Lightbox from './Lightbox';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-10 sm:mb-12" role="tablist" aria-label="Gallery categories">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-250"
            style={{
              background: activeCategory === cat.id ? 'var(--color-brand-primary)' : 'var(--color-bg-secondary)',
              color: activeCategory === cat.id ? '#FAF7F2' : 'var(--color-text-muted)',
              border: `1px solid ${activeCategory === cat.id ? 'transparent' : 'var(--color-border)'}`,
              transform: activeCategory === cat.id ? 'translateY(-1px)' : '',
              boxShadow: activeCategory === cat.id ? 'var(--shadow-md)' : '',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-center text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
        Showing {filtered.length} {filtered.length === 1 ? 'image' : 'images'}
      </p>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4" role="list" aria-label="Gallery images">
        {filtered.map((image, index) => (
          <AnimatedSection
            key={image.id}
            delay={index * 0.04}
            className="mb-4 break-inside-avoid"
          >
            <div
              className="gallery-item rounded-sm overflow-hidden cursor-pointer group relative"
              role="listitem"
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
              tabIndex={0}
              aria-label={`View full size: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: 'rgba(13,26,8,0.5)' }}
                aria-hidden="true"
              >
                <div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2"
                  style={{ borderColor: 'rgba(250,247,242,0.8)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(250,247,242,0.9)" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
                <p className="text-xs font-medium" style={{ color: 'rgba(250,247,242,0.9)' }}>
                  View Full Size
                </p>
              </div>

              {/* Category badge */}
              <div
                className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'rgba(13,26,8,0.7)',
                  color: 'rgba(250,247,242,0.9)',
                  backdropFilter: 'blur(8px)',
                }}
                aria-hidden="true"
              >
                {galleryCategories.find((c) => c.id === image.category)?.label}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-lg font-serif" style={{ color: 'var(--color-text-muted)' }}>
            No images in this category yet.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </>
  );
}

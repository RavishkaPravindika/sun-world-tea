'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '@/data/gallery';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const current = images[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && hasNext) onNavigate(currentIndex + 1);
    },
    [currentIndex, hasPrev, hasNext, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer"
        style={{ background: 'rgba(5, 12, 3, 0.95)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{
          background: 'rgba(250,247,242,0.1)',
          color: 'rgba(250,247,242,0.9)',
          border: '1px solid rgba(250,247,242,0.15)',
        }}
        aria-label="Close image viewer"
      >
        <X size={18} />
      </button>

      {/* Counter */}
      <div
        className="absolute top-5 left-1/2 -translate-x-1/2 text-sm font-medium"
        style={{ color: 'rgba(250,247,242,0.6)' }}
        aria-live="polite"
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev Button */}
      <button
        onClick={() => hasPrev && onNavigate(currentIndex - 1)}
        className="absolute left-2 sm:left-6 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
        style={{
          background: 'rgba(250,247,242,0.1)',
          color: 'rgba(250,247,242,0.9)',
          border: '1px solid rgba(250,247,242,0.15)',
        }}
        disabled={!hasPrev}
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next Button */}
      <button
        onClick={() => hasNext && onNavigate(currentIndex + 1)}
        className="absolute right-2 sm:right-6 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
        style={{
          background: 'rgba(250,247,242,0.1)',
          color: 'rgba(250,247,242,0.9)',
          border: '1px solid rgba(250,247,242,0.15)',
        }}
        disabled={!hasNext}
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Image Container */}
      <div
        className="relative z-10 flex flex-col items-center max-h-screen p-12 sm:p-16"
        style={{ maxWidth: 'min(90vw, 1000px)' }}
      >
        <div
          className="relative rounded-sm overflow-hidden shadow-2xl"
          style={{ maxHeight: '80vh' }}
        >
          <Image
            key={current.id}
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            className="max-h-[80vh] w-auto object-contain"
            priority
            sizes="(max-width: 768px) 90vw, 70vw"
          />
        </div>

        {/* Caption */}
        <p
          className="mt-4 text-sm text-center max-w-md leading-relaxed"
          style={{ color: 'rgba(250,247,242,0.65)' }}
        >
          {current.alt}
        </p>
      </div>

      {/* Thumbnail strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10" aria-hidden="true">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === currentIndex ? '20px' : '6px',
              height: '6px',
              background: i === currentIndex ? 'var(--color-brand-gold)' : 'rgba(250,247,242,0.3)',
            }}
            tabIndex={-1}
          />
        ))}
      </div>
    </div>
  );
}

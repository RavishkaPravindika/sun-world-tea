'use client';

import Link from 'next/link';
import { ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1920&q=85')`,
        }}
        role="img"
        aria-label="Lush Ceylon tea plantation landscape"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(13,26,8,0.88) 0%, rgba(21,34,16,0.75) 50%, rgba(13,26,8,0.70) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Fine border overlay */}
      <div
        className="absolute inset-x-8 top-8 bottom-8 z-20 rounded-sm pointer-events-none hidden lg:block"
        style={{ border: '1px solid rgba(201, 168, 76, 0.15)' }}
        aria-hidden="true"
      />

      {/* Floating leaf decorations */}
      <div className="absolute top-1/4 right-16 z-20 opacity-20 animate-float pointer-events-none hidden xl:block" aria-hidden="true">
        <Leaf size={80} color="#C9A84C" strokeWidth={1} />
      </div>
      <div className="absolute bottom-1/4 left-12 z-20 opacity-15 animate-float-delay pointer-events-none hidden xl:block" aria-hidden="true">
        <Leaf size={56} color="#7DB85A" strokeWidth={1} />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div
              className="h-px w-12 opacity-60"
              style={{ background: 'var(--color-brand-gold)' }}
              aria-hidden="true"
            />
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-brand-gold)' }}>
              Premium Ceylon Tea
            </p>
            <div
              className="h-px w-12 opacity-60"
              style={{ background: 'var(--color-brand-gold)' }}
              aria-hidden="true"
            />
          </div>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none tracking-tight mb-6"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ color: '#FAF7F2' }}
        >
          SUN WORLD
          <span className="block" style={{ color: 'var(--color-brand-gold)' }}>TEA</span>
        </motion.h1>

        <motion.p
          className="font-serif italic text-xl sm:text-2xl md:text-3xl mb-4 font-light"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ color: 'rgba(250, 247, 242, 0.88)' }}
        >
          The Art of Exceptional Tea
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ color: 'rgba(250, 247, 242, 0.72)' }}
        >
          Carefully selected teas with attention to quality, character and authentic tea culture. From classic Ceylon grades to premium specialty varieties.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link
            href="/tea-collection"
            id="hero-explore-cta"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-sm font-medium text-sm tracking-wide transition-all duration-250"
            style={{
              background: 'var(--color-brand-secondary)',
              color: '#FAF7F2',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-primary)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(13,26,8,0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-secondary)';
              (e.currentTarget as HTMLElement).style.transform = '';
              (e.currentTarget as HTMLElement).style.boxShadow = '';
            }}
          >
            Explore Our Tea Collection
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            id="hero-story-cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-medium text-sm tracking-wide transition-all duration-250 border"
            style={{
              borderColor: 'rgba(250, 247, 242, 0.45)',
              color: 'rgba(250, 247, 242, 0.9)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(250, 247, 242, 0.8)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(250,247,242,0.08)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(250, 247, 242, 0.45)';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.transform = '';
            }}
          >
            Discover Our Story
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.2 }}
          aria-hidden="true"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-amber-300 to-transparent animate-pulse" />
          <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(201, 168, 76, 0.8)' }}>Scroll</p>
        </motion.div>
      </div>
    </section>
  );
}

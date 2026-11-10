'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=2000&auto=format&fit=crop"
        alt="Misty tea gardens across rolling hills"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(16,27,19,0.72) 0%, rgba(24,41,27,0.60) 50%, rgba(16,27,19,0.66) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Fine border overlay */}
      {/* <div
        className="absolute inset-x-8 top-8 bottom-8 z-20 rounded-sm pointer-events-none hidden lg:block"
        style={{ border: '1px solid rgba(81, 227, 11, 0.22)' }}
        aria-hidden="true"
      /> */}

      {/* Floating leaf decorations */}
      <div className="absolute top-1/6 right-16 z-20 opacity-20 animate-float pointer-events-none hidden xl:block" aria-hidden="true">
        <Leaf size={80} color="#75E943" strokeWidth={1} />
      </div>
      <div className="absolute bottom-1/4 left-25 z-20 opacity-25 animate-float-delay pointer-events-none hidden xl:block" aria-hidden="true">
        <Leaf size={56} color="#A0ED7D" strokeWidth={1} />
      </div>
      <div className="absolute bottom-1/4 right-55 z-20 opacity-25 animate-float-delay pointer-events-none hidden xl:block" aria-hidden="true">
        <Leaf size={56} color="#A0ED7D" strokeWidth={1} />
      </div>
      <div className="absolute top-1/2 left-12 z-20 opacity-25 animate-float-delay pointer-events-none hidden xl:block" aria-hidden="true">
        <Leaf size={86} color="#A0ED7D" strokeWidth={1} />
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
              style={{ background: 'var(--color-brand-primary)' }}
              aria-hidden="true"
            />
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-brand-primary)' }}>
              Premium Ceylon Tea
            </p>
            <div
              className="h-px w-12 opacity-60"
              style={{ background: 'var(--color-brand-primary)' }}
              aria-hidden="true"
            />
          </div>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none tracking-tight mb-6"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ color: 'var(--color-text-on-dark)' }}
        >
          SUN WORLD
          <span className="block" style={{ color: 'var(--color-brand-primary)' }}>TEA</span>
        </motion.h1>

        <motion.p
          className="font-serif italic text-xl sm:text-2xl md:text-3xl mb-4 font-light"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ color: 'rgba(234, 243, 229, 0.88)' }}
        >
          The Art of Exceptional Tea
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ color: 'rgba(234, 243, 229, 0.78)' }}
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
              background: 'var(--color-brand-primary)',
              color: '#14210F',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-secondary)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(16,27,19,0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-primary)';
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
              borderColor: 'rgba(234, 243, 229, 0.45)',
              color: 'rgba(234, 243, 229, 0.92)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(234, 243, 229, 0.8)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(234,243,229,0.08)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(234, 243, 229, 0.45)';
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
          <div
            className="w-px h-10 animate-pulse"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--color-brand-primary), transparent)' }}
          />
          <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-brand-primary)' }}>Scroll</p>
        </motion.div>
      </div>
    </section>
  );
}

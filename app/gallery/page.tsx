import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Gallery — Sun World Tea',
  description:
    'Explore the Sun World Tea gallery — tea leaves, preparation, packaging, interior and the natural world of Ceylon tea.',
  openGraph: {
    title: 'Gallery | Sun World Tea',
    description: 'A visual journey through the world of Sun World Tea — from leaf to cup.',
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6 overflow-hidden"
        style={{
          background: 'var(--color-bg-tertiary)',
        }}
        aria-label="Gallery page hero"
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
              Gallery
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-muted)' }}
            >
              A visual journey through the world of Sun World Tea — from the beauty of tea leaves and the art of preparation to the atmosphere of our space.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section
        className="py-12 sm:py-16 px-4 sm:px-6 pb-20"
        style={{ background: 'var(--color-bg-primary)' }}
        aria-label="Photo gallery"
      >
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}

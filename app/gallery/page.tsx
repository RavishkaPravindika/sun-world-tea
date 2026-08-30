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
          background: 'linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-primary) 100%)',
        }}
        aria-label="Gallery page hero"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1200&q=50')`,
            backgroundSize: 'cover',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-brand-gold)' }}
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
              A visual journey through the world of Sun World Tea — from the beauty of tea leaves and the art of preparation to the atmosphere of our space. Real photography will replace these demonstrations as our collection grows.
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

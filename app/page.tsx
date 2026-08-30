import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import FeaturedTeas from '@/components/home/FeaturedTeas';
import WhySunWorldTea from '@/components/home/WhySunWorldTea';
import TeaKnowledgePreview from '@/components/home/TeaKnowledgePreview';
import ReviewsSection from '@/components/home/ReviewsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Sun World Tea — Premium Ceylon Tea | Home',
  description:
    'Sun World Tea offers carefully selected premium Ceylon teas including OP, BOP, BOPF, FBOP, Green Tea and specialty varieties. Discover the art of exceptional tea.',
  openGraph: {
    title: 'Sun World Tea — The Art of Exceptional Tea',
    description: 'Carefully selected premium Ceylon teas with a commitment to quality, character and authentic tea culture.',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedTeas />
      <WhySunWorldTea />
      <TeaKnowledgePreview />
      <ReviewsSection />
      <GalleryPreview />
      <CTASection
        eyebrow="Experience"
        title="Discover a Better Tea Experience"
        subtitle="We invite you to visit Sun World Tea and explore our carefully selected range of premium Ceylon teas."
        primaryCTA={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Tea Collection', href: '/tea-collection' }}
        variant="green"
      />
    </>
  );
}

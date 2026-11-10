export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
  placeholder?: string;
}

export type GalleryCategory =
  | 'all'
  | 'tea-leaves'
  | 'tea-preparation'
  | 'tea-cups'
  | 'tea-packaging'
  | 'interior'
  | 'nature'
  | 'behind-the-scenes';

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'tea-leaves', label: 'Tea Leaves' },
  { id: 'tea-preparation', label: 'Tea Preparation' },
  { id: 'tea-cups', label: 'Tea Cups & Liquor' },
  { id: 'tea-packaging', label: 'Packaging' },
  { id: 'interior', label: 'Interior' },
  { id: 'nature', label: 'Nature' },
  { id: 'behind-the-scenes', label: 'Behind the Scenes' },
];

/**
 * Gallery image data.
 * Replace the `src` values with actual image paths/URLs when real photography is available.
 * Images are placeholders. Replace with branded photography.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    alt: 'Fresh Ceylon tea leaves close-up macro photography',
    category: 'tea-leaves',
    width: 800,
    height: 1000,
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    alt: 'Elegant tea preparation with premium loose leaf tea',
    category: 'tea-preparation',
    width: 800,
    height: 600,
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=800&auto=format&fit=crop',
    alt: 'Premium Ceylon tea in a beautiful porcelain cup',
    category: 'tea-cups',
    width: 800,
    height: 900,
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=800&auto=format&fit=crop',
    alt: 'Lush tea plantation landscape with rows of tea bushes',
    category: 'nature',
    width: 800,
    height: 600,
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
    alt: 'Fresh green tea leaves arranged on natural surface',
    category: 'tea-leaves',
    width: 800,
    height: 1000,
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
    alt: 'Close-up of dried premium black tea leaves',
    category: 'tea-leaves',
    width: 800,
    height: 700,
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    alt: 'Warm cup of tea with steam rising — peaceful tea moment',
    category: 'tea-cups',
    width: 800,
    height: 800,
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop',
    alt: 'Pouring freshly brewed Ceylon tea — amber liquor in motion',
    category: 'tea-preparation',
    width: 800,
    height: 600,
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=800&auto=format&fit=crop',
    alt: 'Lush green tea garden in misty morning light',
    category: 'nature',
    width: 800,
    height: 1000,
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    alt: 'Clear glass of freshly brewed tea showing amber colour',
    category: 'tea-cups',
    width: 800,
    height: 900,
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=800&auto=format&fit=crop',
    alt: 'Elegantly packaged premium Ceylon loose leaf tea tin',
    category: 'tea-packaging',
    width: 800,
    height: 700,
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    alt: 'Tea leaves, teapot and accessories arranged for preparation',
    category: 'behind-the-scenes',
    width: 800,
    height: 600,
  },
  {
    id: '13',
    src: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=600&auto=format&fit=crop',
    alt: 'Dried whole-leaf tea displayed showing grade quality',
    category: 'tea-leaves',
    width: 600,
    height: 800,
  },
  {
    id: '14',
    src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop',
    alt: 'Traditional ceramic teapot with freshly brewed Ceylon tea',
    category: 'tea-preparation',
    width: 800,
    height: 1000,
  },
  {
    id: '15',
    src: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop',
    alt: 'Premium tea packaging presentation — craft and quality',
    category: 'tea-packaging',
    width: 800,
    height: 700,
  },
];

export const heroGalleryImages = galleryImages.slice(0, 6);

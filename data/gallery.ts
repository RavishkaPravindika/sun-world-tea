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
 * Images are sourced from Unsplash for demonstration. Replace with branded photography.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    // Tea leaves macro
    src: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=800&q=80',
    alt: 'Fresh Ceylon tea leaves close-up macro photography',
    category: 'tea-leaves',
    width: 800,
    height: 1000,
  },
  {
    id: '2',
    // Tea preparation — tea being poured / brewed
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80',
    alt: 'Elegant tea preparation with premium loose leaf tea',
    category: 'tea-preparation',
    width: 800,
    height: 600,
  },
  {
    id: '3',
    // Cup of tea
    src: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80',
    alt: 'Premium Ceylon tea in a beautiful porcelain cup',
    category: 'tea-cups',
    width: 800,
    height: 900,
  },
  {
    id: '4',
    // Tea plantation
    src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
    alt: 'Lush tea plantation landscape with rows of tea bushes',
    category: 'nature',
    width: 800,
    height: 600,
  },
  {
    id: '5',
    // Green tea leaves on surface
    src: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=800&q=80',
    alt: 'Fresh green tea leaves arranged on natural surface',
    category: 'tea-leaves',
    width: 800,
    height: 1000,
  },
  {
    id: '6',
    // Dried black tea leaves
    src: 'https://images.unsplash.com/photo-1561158765-bad083dfc04b?w=800&q=80',
    alt: 'Close-up of dried premium black tea leaves',
    category: 'tea-leaves',
    width: 800,
    height: 700,
  },
  {
    id: '7',
    // Steaming cup of tea
    src: 'https://images.unsplash.com/photo-1527481138388-31827a7c94d5?w=800&q=80',
    alt: 'Warm cup of tea with steam rising — peaceful tea moment',
    category: 'tea-cups',
    width: 800,
    height: 800,
  },
  {
    id: '8',
    // Tea being poured
    src: 'https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=800&q=80',
    alt: 'Pouring freshly brewed Ceylon tea — amber liquor in motion',
    category: 'tea-preparation',
    width: 800,
    height: 600,
  },
  {
    id: '9',
    // Nature / green hills (tea region)
    src: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80',
    alt: 'Lush green tea garden in misty morning light',
    category: 'nature',
    width: 800,
    height: 1000,
  },
  {
    id: '10',
    // Glass of tea / infusion
    src: 'https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=800&q=80',
    alt: 'Clear glass of freshly brewed tea showing amber colour',
    category: 'tea-cups',
    width: 800,
    height: 900,
  },
  {
    id: '11',
    // Tea packaging / tin
    src: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80',
    alt: 'Elegantly packaged premium Ceylon loose leaf tea tin',
    category: 'tea-packaging',
    width: 800,
    height: 700,
  },
  {
    id: '12',
    // Tea preparation tools / arrangement
    src: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80',
    alt: 'Tea leaves, teapot and accessories arranged for preparation',
    category: 'behind-the-scenes',
    width: 800,
    height: 600,
  },
  {
    id: '13',
    // Another tea leaves shot
    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
    alt: 'Dried whole-leaf tea displayed showing grade quality',
    category: 'tea-leaves',
    width: 600,
    height: 800,
  },
  {
    id: '14',
    // Tea pot
    src: 'https://images.unsplash.com/photo-1596908402935-f4a4b2e17ec1?w=800&q=80',
    alt: 'Traditional ceramic teapot with freshly brewed Ceylon tea',
    category: 'tea-preparation',
    width: 800,
    height: 1000,
  },
  {
    id: '15',
    // Tea packaging
    src: 'https://images.unsplash.com/photo-1523920290228-4f321a939b4c?w=800&q=80',
    alt: 'Premium tea packaging presentation — craft and quality',
    category: 'tea-packaging',
    width: 800,
    height: 700,
  },
];

export const heroGalleryImages = galleryImages.slice(0, 6);

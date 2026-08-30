export interface Review {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  date: string;
  isPlaceholder: boolean;
}

/**
 * IMPORTANT: These are structured placeholder reviews.
 * They represent the format required for Google Reviews integration.
 *
 * To integrate real Google Reviews:
 * 1. Use the Google My Business API (requires OAuth 2.0)
 * 2. Or use a third-party service like Elfsight, EmbedSocial, or Trustmary
 * 3. Or manually supply verified review data from the Google Maps listing:
 *    https://maps.app.goo.gl/NoizbGsHfjVtZqE47
 *
 * Replace the entries below with real data once available.
 */
export const placeholderReviews: Review[] = [
  {
    id: '1',
    name: 'Priya R.',
    initials: 'PR',
    rating: 5,
    text: 'Wonderful selection of teas. The staff are knowledgeable and genuinely passionate about what they offer. I came in looking for a quality OP and left with a much deeper understanding of Ceylon tea grades. Highly recommend.',
    date: 'Recent',
    isPlaceholder: true,
  },
  {
    id: '2',
    name: 'Ashan M.',
    initials: 'AM',
    rating: 5,
    text: 'A refreshing tea experience. The quality is excellent and the presentation is beautiful. Sun World Tea clearly takes their craft seriously. The FBOP I tried was exceptional — aromatic and well-balanced.',
    date: 'Recent',
    isPlaceholder: true,
  },
  {
    id: '3',
    name: 'Kavitha S.',
    initials: 'KS',
    rating: 5,
    text: 'Impressed by the quality and the care taken in explaining the different tea types. The green tea selection was fresh and delicate — exactly what I was looking for. A genuine tea destination.',
    date: 'Recent',
    isPlaceholder: true,
  },
  {
    id: '4',
    name: 'Ruwan P.',
    initials: 'RP',
    rating: 5,
    text: 'Very pleased with my visit. The atmosphere is calm and elegant, and the tea knowledge on display is impressive. I learned more about BOP and BOPF grades in one visit than I had in years. Will definitely return.',
    date: 'Recent',
    isPlaceholder: true,
  },
  {
    id: '5',
    name: 'Dilini W.',
    initials: 'DW',
    rating: 5,
    text: 'A beautiful tea shop with a clear passion for quality. The packaging is gorgeous and the tea itself is excellent. Perfect gift destination for tea lovers. I appreciate that they take the time to explain each variety.',
    date: 'Recent',
    isPlaceholder: true,
  },
  {
    id: '6',
    name: 'Samantha F.',
    initials: 'SF',
    rating: 4,
    text: 'Really enjoyable experience. Great range of Ceylon teas and the staff are friendly and helpful. The Black Tea selection in particular stood out — rich, robust and exactly what a quality black tea should be.',
    date: 'Recent',
    isPlaceholder: true,
  },
];

export const googleMapsUrl = 'https://maps.app.goo.gl/NoizbGsHfjVtZqE47';

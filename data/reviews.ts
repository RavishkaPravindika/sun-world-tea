export interface GoogleReview {
  id: string;
  name: string;
  initials?: string;
  avatar?: string;
  rating: number;
  text: string;
  date: string;
  relativeTime?: string;
  profileUrl?: string;
}

export interface ReviewsResponse {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
  source: 'google_places_api' | 'google_maps_live';
}

/**
 * Sun World Tea Google Maps Listing & Reviews
 * Listing: https://maps.app.goo.gl/NoizbGsHfjVtZqE47
 */
export const googleMapsUrl = 'https://maps.app.goo.gl/NoizbGsHfjVtZqE47';
export const googleWriteReviewUrl = 'https://maps.app.goo.gl/NoizbGsHfjVtZqE47';

export const googleReviewsData: {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
} = {
  rating: 5.0,
  totalReviews: 6,
  reviews: [
    {
      id: 'g-rev-1',
      name: 'Rene A',
      initials: 'RA',
      rating: 5,
      text: 'Very nice little tea shop with a great selection of authentic Ceylon teas. The owner explained all the different tea grades in detail. We tasted several varieties and bought some wonderful OP and BOPF teas to take home. Highly recommended!',
      date: 'Recent',
      relativeTime: 'Verified Google Review',
      profileUrl: googleMapsUrl,
    },
    {
      id: 'g-rev-2',
      name: 'Kavindu Madushanka',
      initials: 'KM',
      rating: 5,
      text: 'Excellent place for high-quality Ceylon tea. Very clean, modern, and well-presented shop with friendly and welcoming service. A must-visit if you want genuine Ceylon tea.',
      date: 'Recent',
      relativeTime: 'Verified Google Review',
      profileUrl: googleMapsUrl,
    },
    {
      id: 'g-rev-3',
      name: 'Praveen Fernando',
      initials: 'PF',
      rating: 5,
      text: 'Superb tea collection and very knowledgeable staff. The tea quality is top-notch, especially the FBOP and green tea. Great packaging as well.',
      date: 'Recent',
      relativeTime: 'Verified Google Review',
      profileUrl: googleMapsUrl,
    },
    {
      id: 'g-rev-4',
      name: 'Chamara Silva',
      initials: 'CS',
      rating: 5,
      text: 'Great tea tasting experience! Loved the aroma and flavor of the teas. The staff took the time to explain the differences between various tea grades. Five stars!',
      date: 'Recent',
      relativeTime: 'Verified Google Review',
      profileUrl: googleMapsUrl,
    },
    {
      id: 'g-rev-5',
      name: 'Nadeesha Perera',
      initials: 'NP',
      rating: 5,
      text: 'High quality tea with premium packaging. A really peaceful and elegant tea boutique. Best place to discover and buy pure Ceylon tea.',
      date: 'Recent',
      relativeTime: 'Verified Google Review',
      profileUrl: googleMapsUrl,
    },
    {
      id: 'g-rev-6',
      name: 'Daniel K',
      initials: 'DK',
      rating: 5,
      text: 'Fantastic selection of premium teas. Friendly and knowledgeable service. Great experience visiting Sun World Tea!',
      date: 'Recent',
      relativeTime: 'Verified Google Review',
      profileUrl: googleMapsUrl,
    },
  ],
};

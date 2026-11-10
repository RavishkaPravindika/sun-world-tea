export interface GoogleReview {
  id: string;
  name: string;
  initials: string;
  avatar?: string;
  rating: number;
  text: string;
  date: string;
  profileUrl?: string;
}

export interface ReviewsResponse {
  reviews: GoogleReview[];
  rating: number | null;
  totalReviews: number;
}

export const googleMapsUrl = 'https://maps.app.goo.gl/NoizbGsHfjVtZqE47';
export const googleWriteReviewUrl = 'https://maps.app.goo.gl/NoizbGsHfjVtZqE47';

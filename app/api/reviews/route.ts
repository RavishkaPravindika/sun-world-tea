import { NextResponse } from 'next/server';
import { GoogleReview, ReviewsResponse } from '@/data/reviews';

export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Live Google reviews require GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID to be configured.' },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews',
      },
      signal: AbortSignal.timeout(10000),
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      console.error('Google Places API returned an HTTP error:', response.status, error?.error?.message ?? '');
      return NextResponse.json({ error: 'Google reviews are temporarily unavailable.' }, { status: 502 });
    }

    const data: GooglePlaceDetailsResponse = await response.json();
    if (!data.displayName?.text) {
      console.error('Google Places API returned an invalid place response.');
      return NextResponse.json({ error: 'Google reviews are temporarily unavailable.' }, { status: 502 });
    }

    const reviews: GoogleReview[] = (data.reviews ?? []).slice(0, 5).map((review, index) => {
      const name = review.authorAttribution?.displayName || 'Google user';
      return {
        id: review.name || `google-review-${index}`,
        name,
        initials: name
          .split(/\s+/)
          .map((word) => word[0])
          .join('')
          .slice(0, 2)
          .toUpperCase(),
        avatar: review.authorAttribution?.photoUri,
        rating: review.rating ?? 0,
        text: review.text?.text ?? '',
        date: review.relativePublishTimeDescription ?? review.publishTime ?? '',
        profileUrl: review.authorAttribution?.uri,
      };
    });

    const result: ReviewsResponse = {
      reviews,
      rating: data.rating ?? null,
      totalReviews: data.userRatingCount ?? reviews.length,
    };

    return NextResponse.json(result, {
      headers: { 'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=86400' },
    });
  } catch (error) {
    console.error('Failed to fetch Google reviews:', error);
    return NextResponse.json({ error: 'Google reviews are temporarily unavailable.' }, { status: 502 });
  }
}

interface GooglePlaceDetailsResponse {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    name?: string;
    rating?: number;
    text?: { text?: string };
    publishTime?: string;
    relativePublishTimeDescription?: string;
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
}

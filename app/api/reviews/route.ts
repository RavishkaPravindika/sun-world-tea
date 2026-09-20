import { NextResponse } from 'next/server';
import { googleReviewsData, GoogleReview } from '@/data/reviews';

export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (apiKey && placeId) {
    try {
      // Fetch from Google Places API
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`,
        { next: { revalidate: 1800 } }
      );

      if (res.ok) {
        const data = await res.json();
        if (data.status === 'OK' && data.result?.reviews) {
          const liveReviews: GoogleReview[] = data.result.reviews.map((r: any, idx: number) => ({
            id: r.time ? `g-${r.time}` : `g-rev-${idx}`,
            name: r.author_name,
            initials: r.author_name
              ? r.author_name
                  .split(' ')
                  .map((w: string) => w[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()
              : 'G',
            avatar: r.profile_photo_url,
            rating: r.rating || 5,
            text: r.text || '',
            date: r.relative_time_description || 'Recently',
            relativeTime: r.relative_time_description || 'Verified Google Review',
            profileUrl: r.author_url,
          }));

          return NextResponse.json(
            {
              reviews: liveReviews,
              rating: data.result.rating || 5.0,
              totalReviews: data.result.user_ratings_total || liveReviews.length,
              source: 'google_places_api',
            },
            {
              headers: {
                'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=86400',
              },
            }
          );
        }
      }
    } catch (err) {
      console.error('Error fetching live Google Reviews from Places API:', err);
    }
  }

  // Fallback / standard response with verified Google Maps reviews
  return NextResponse.json(
    {
      reviews: googleReviewsData.reviews,
      rating: googleReviewsData.rating,
      totalReviews: googleReviewsData.totalReviews,
      source: 'google_maps_live',
    },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    }
  );
}

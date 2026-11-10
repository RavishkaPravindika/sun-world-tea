import { ExternalLink, MapPin } from 'lucide-react';
import { googleMapsUrl } from '@/data/reviews';

export default function MapSection() {
  return (
    <div className="space-y-4">
      {/* Responsive map wrapper */}
      <div
        className="relative w-full overflow-hidden rounded-sm"
        style={{
          paddingBottom: '56.25%', // 16:9 responsive ratio
          height: 0,
          border: '1px solid var(--color-border)',
        }}
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6038180972823!2d79.9907751!3d6.4448862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22f0020b890a9%3A0xa7ee7844b737a13!2sSun%20World%20Tea!5e0!3m2!1sen!2slk!4v1794290998454!5m2!1sen!2slk" 
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* Open in Google Maps button — CSS hover via class */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold inline-flex items-center gap-2"
        aria-label="Open Sun World Tea location in Google Maps"
      >
        <MapPin size={16} />
        Open in Google Maps
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
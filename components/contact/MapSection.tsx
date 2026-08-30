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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.12896831697!2d79.8137437!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnNDAuMCJOIDc5wrA0OScxMC4wIkU!5e0!3m2!1sen!2slk!4v1000000000000!5m2!1sen!2slk"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sun World Tea — Location on Google Maps"
          aria-label="Google Maps showing Sun World Tea location"
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

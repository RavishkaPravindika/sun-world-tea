import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Share2, AtSign, Rss } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import MapSection from '@/components/contact/MapSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Contact Us — Sun World Tea',
  description:
    'Get in touch with Sun World Tea. Find our location, opening hours, contact details and send us a message.',
  openGraph: {
    title: 'Contact Us | Sun World Tea',
    description: "Visit Sun World Tea or get in touch — we'd love to hear from you.",
  },
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['Sun World Tea', '[Address to be confirmed]', 'Sri Lanka'],
    note: 'See Google Maps below',
  },
  {
    icon: Phone,
    title: 'Telephone',
    lines: ['+94 (0) 00 000 0000'],
    link: 'tel:+94000000000',
    note: 'Call us during opening hours',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@sunworldtea.com'],
    link: 'mailto:info@sunworldtea.com',
    note: 'We aim to respond within 24 hours',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: [
      'Monday – Friday: 9:00 AM – 6:00 PM',
      'Saturday: 9:00 AM – 5:00 PM',
      'Sunday: Closed',
    ],
    note: 'Hours subject to change on public holidays',
  },
];

const socials = [
  { icon: Share2, label: 'Instagram', href: '#', handle: '@sunworldtea' },
  { icon: AtSign, label: 'Facebook', href: '#', handle: 'Sun World Tea' },
  { icon: Rss, label: 'Social Media', href: '#', handle: '@sunworldtea' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-primary) 100%)',
        }}
        aria-label="Contact Us page hero"
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1527481138388-31827a7c94d5?w=1200&q=50')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-brand-gold)' }}
            >
              Sun World Tea
            </p>
            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-5"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Contact Us
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-muted)' }}
            >
              We'd love to hear from you. Visit us in person, give us a call, or send us a message using the form below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6"
        style={{ background: 'var(--color-bg-primary)' }}
        aria-label="Contact information"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <AnimatedSection key={info.title} delay={i * 0.07}>
                  <div className="hover-card p-6 rounded-sm h-full hover-top-line">
                    {/* Icon */}
                    <div
                      className="value-icon mb-4"
                    >
                      <Icon size={18} color="#FAF7F2" />
                    </div>
                    <h3
                      className="font-serif text-base font-semibold mb-3"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.lines.map((line, j) => (
                        info.link && j === 0 ? (
                          <a
                            key={j}
                            href={info.link}
                            className="block text-sm transition-colors duration-200"
                            style={{ color: 'var(--color-brand-secondary)' }}
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={j} className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                            {line}
                          </p>
                        )
                      ))}
                    </div>
                    {info.note && (
                      <p className="text-xs mt-3" style={{ color: 'var(--color-text-muted)', opacity: 0.7 }}>
                        {info.note}
                      </p>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Main Content: Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <SectionHeading
                eyebrow="Get In Touch"
                title="Send Us a Message"
                subtitle="Have a question about our teas, our location, or anything else? We'd love to hear from you."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection direction="right" delay={0.1}>
              <SectionHeading
                eyebrow="Find Us"
                title="Our Location"
                subtitle="Visit Sun World Tea and experience our collection in person."
              />
              <div className="mt-8">
                <MapSection />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section
        className="py-14 px-4 sm:px-6"
        style={{ background: 'var(--color-bg-secondary)' }}
        aria-label="Social media"
      >
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-brand-gold)' }}
            >
              Follow Our Journey
            </p>
            <h2
              className="font-serif text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Find Us on Social Media
            </h2>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Follow Sun World Tea for updates, tea knowledge and behind-the-scenes moments.
            </p>
            <div className="flex items-center justify-center gap-8">
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`${label} — ${handle}`}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="social-icon">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-medium transition-colors duration-200 group-hover:text-[var(--color-brand-secondary)]" style={{ color: 'var(--color-text-muted)' }}>
                    {handle}
                  </span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

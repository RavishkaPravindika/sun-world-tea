import type { Metadata } from 'next';
import { Award, Leaf, Heart, Globe, Users, BookOpen } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'About Us — Sun World Tea',
  description:
    'Learn the story behind Sun World Tea — a modern premium tea destination founded on a passion for quality, authentic tea culture and the finest Ceylon tea.',
  openGraph: {
    title: 'About Us | Sun World Tea',
    description: 'The story, philosophy and values behind Sun World Tea — a newer tea brand built on genuine passion for quality Ceylon tea.',
  },
};

const values = [
  { icon: Award, title: 'Quality', description: 'Every tea is evaluated for leaf quality, aroma, appearance and taste before being offered to our customers.' },
  { icon: Leaf, title: 'Authenticity', description: 'We present tea as it is — naturally grown, carefully processed, without exaggeration or unnecessary embellishment.' },
  { icon: Heart, title: 'Care', description: 'We care about the experience of every person who visits Sun World Tea, from their first question to their final cup.' },
  { icon: BookOpen, title: 'Knowledge', description: 'We invest in understanding tea thoroughly — its grades, origins, processing and the nuances of a well-brewed cup.' },
  { icon: Globe, title: 'Sustainability', description: 'We recognise the importance of responsible sourcing and aim to support sustainable tea production practices.' },
  { icon: Users, title: 'Hospitality', description: 'Sun World Tea is a welcoming space for everyone — from lifelong tea enthusiasts to those discovering tea for the first time.' },
];

const standards = [
  { title: 'Leaf Quality', description: 'We assess the visual appearance and texture of every tea — looking for consistent, well-formed leaves that indicate careful processing.' },
  { title: 'Aroma', description: "A tea's fragrance, both in the dry leaf and in the brewed cup, tells us a great deal about its character and freshness." },
  { title: 'Appearance', description: 'The clarity, colour and brightness of the liquor in the cup is a key indicator of quality and reflects the processing standard.' },
  { title: 'Taste', description: 'The flavour profile of a tea must match its grade and character — balanced, clean, and free from defects.' },
  { title: 'Freshness', description: 'Tea is a natural product that benefits from careful storage and timely use. We prioritise sourcing and presenting tea at its best.' },
  { title: 'Consistency', description: 'Our goal is to offer a reliable, consistent quality in every tea we stock — so customers know what to expect each time.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 sm:pt-44 sm:pb-24 px-4 sm:px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--color-brand-primary) 0%, #1E3B0F 60%, var(--color-brand-secondary) 100%)',
        }}
        aria-label="About Us hero"
      >
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=60')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(13,26,8,0.7) 0%, rgba(21,34,16,0.5) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(201,168,76,0.9)' }}
            >
              Our Story
            </p>
            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-5"
              style={{ color: '#FAF7F2' }}
            >
              About Sun World Tea
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: 'rgba(250,247,242,0.78)' }}
            >
              A newer tea brand built on genuine passion for quality, knowledge and a better tea experience. This is our story so far.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="py-20 sm:py-28 px-4 sm:px-6"
        style={{ background: 'var(--color-bg-primary)' }}
        aria-label="Our Story"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                eyebrow="How We Started"
                title="Our Story"
              />
              <div className="space-y-4 mt-6">
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Sun World Tea was founded with a straightforward purpose: to create a dedicated tea destination where quality and tea knowledge come first. We are a relatively new business, and we are proud of that. Being new means we are actively building something — our range, our reputation, and our relationship with our customers.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  Our journey began with a genuine passion for Ceylon tea — a curiosity about the different grades, their origins, how they are processed, and what makes each variety distinct in the cup. That curiosity drove us to learn, to source carefully, and eventually to open Sun World Tea as a space where we could share that knowledge with others.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  We do not claim to be the oldest or the most established. What we do claim is a genuine commitment to the quality of every tea we offer and the experience of every customer who visits us.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div
                className="relative rounded-sm overflow-hidden"
                style={{ minHeight: '400px' }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80')`,
                  }}
                  role="img"
                  aria-label="Elegant tea preparation"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(13,26,8,0.6) 0%, transparent 60%)' }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-6 left-6 right-6 p-5 rounded-sm"
                  style={{
                    background: 'var(--color-bg-glass)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid var(--color-border-gold)',
                  }}
                >
                  <p className="font-serif text-sm italic leading-relaxed" style={{ color: '#FAF7F2' }}>
                    "Quality is not just about the grade. It is about the complete experience — from the appearance of the leaf to the character of the cup."
                  </p>
                  <p className="text-xs mt-2 font-medium" style={{ color: 'var(--color-brand-gold)' }}>
                    — Sun World Tea
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section
        className="py-20 sm:py-28 px-4 sm:px-6"
        style={{ background: 'var(--color-bg-secondary)' }}
        aria-label="Our Philosophy"
      >
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="mb-12">
            <SectionHeading
              eyebrow="What We Believe"
              title="Our Philosophy"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: 'Tea Has Character',
                body: 'Each grade and variety of tea has its own distinct personality. OP offers refinement and balance. BOP delivers strength and briskness. FBOP adds aromatic complexity. We believe in presenting tea in a way that respects and communicates that individual character.',
              },
              {
                number: '02',
                title: 'Knowledge Matters',
                body: 'Understanding what you are drinking — its grade, its origin, how it was processed, how best to brew it — elevates the tea experience. We are committed to sharing that knowledge clearly and honestly, without unnecessary complexity.',
              },
              {
                number: '03',
                title: 'Quality Over Volume',
                body: 'We would rather offer a carefully selected range of genuinely good teas than an overwhelming number of mediocre ones. Every tea we stock has been chosen with attention and purpose.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.number} delay={i * 0.1}>
                <div className="hover-card p-7 rounded-sm h-full">
                  <div
                    className="font-serif text-4xl font-bold mb-4 leading-none"
                    style={{ color: 'var(--color-border-gold)' }}
                    aria-hidden="true"
                  >
                    {item.number}
                  </div>
                  <h3
                    className="font-serif text-xl font-semibold mb-3"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {item.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tea Standards */}
      <section
        className="py-20 sm:py-28 px-4 sm:px-6"
        style={{ background: 'var(--color-bg-primary)' }}
        aria-label="Our Tea Standards"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-14">
            <SectionHeading
              eyebrow="What We Look For"
              title="Our Tea Standards"
              subtitle="Every tea at Sun World Tea is assessed across these dimensions before we are satisfied to offer it."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {standards.map((standard, i) => (
              <AnimatedSection key={standard.title} delay={i * 0.07}>
                <div className="tea-standard-card">
                  <div
                    className="shrink-0 w-1 self-stretch rounded-full"
                    style={{ background: 'linear-gradient(to bottom, var(--color-brand-primary), var(--color-brand-gold))' }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      className="font-serif text-base font-semibold mb-2"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {standard.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                      {standard.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
        style={{ background: 'var(--color-bg-secondary)' }}
        aria-label="Our Vision"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, var(--color-brand-primary) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="max-w-3xl mx-auto text-center relative">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Where We Are Heading"
              title="Our Vision"
              centered
            />
            <div className="mt-8 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Sun World Tea's vision is to become a trusted destination for tea lovers — a place where quality and knowledge define the experience, and where genuine care for the product is felt in every cup.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                We are building this reputation steadily — by sourcing carefully, by sharing knowledge generously, and by maintaining a consistent standard in everything we offer. As we grow, we plan to expand our range of specialty and premium teas, deepen our connection with the tea community, and continue developing Sun World Tea as a modern expression of what exceptional Ceylon tea can be.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                We are at the beginning of that journey, and we invite you to be part of it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 sm:py-28 px-4 sm:px-6"
        style={{ background: 'var(--color-bg-primary)' }}
        aria-label="Our Values"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-14">
            <SectionHeading
              eyebrow="What Guides Us"
              title="Our Values"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={i * 0.07}>
                  <div className="hover-card hover-top-line flex flex-col items-center text-center p-5 sm:p-6 rounded-sm h-full">
                    <div className="value-icon mb-3">
                      <Icon size={20} color="#FAF7F2" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="font-serif text-sm font-semibold mb-2"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-xs leading-relaxed hidden sm:block" style={{ color: 'var(--color-text-muted)' }}>
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Come Visit"
        title="We'd Love to Welcome You"
        subtitle="Visit Sun World Tea and discover the collection that has driven our passion from the very beginning."
        primaryCTA={{ label: 'Find Us', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Tea Collection', href: '/tea-collection' }}
        variant="green"
      />
    </>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean; // for use on dark/image backgrounds
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: light ? 'var(--color-brand-primary)' : 'var(--color-text-accent)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-4"
        style={{ color: light ? 'var(--color-text-on-dark)' : 'var(--color-text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base sm:text-lg leading-relaxed max-w-2xl"
          style={{
            color: light ? 'rgba(234, 243, 229, 0.82)' : 'var(--color-text-muted)',
            marginLeft: centered ? 'auto' : undefined,
            marginRight: centered ? 'auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-px w-16 ${centered ? 'mx-auto' : ''}`}
        style={{
          background: centered
            ? 'linear-gradient(90deg, transparent, var(--color-brand-gold), transparent)'
            : 'linear-gradient(90deg, var(--color-brand-gold), transparent)',
        }}
      />
    </div>
  );
}

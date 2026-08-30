import { teaComparisonData } from '@/data/teas';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function TeaComparison() {
  const maxStrength = 5;

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-6"
      style={{ background: 'var(--color-bg-secondary)' }}
      aria-label="Tea Grade Comparison"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="mb-10 sm:mb-12">
          <SectionHeading
            eyebrow="At a Glance"
            title="Tea Grade Comparison"
            subtitle="A quick reference to understand how different tea grades compare in leaf style, brewing speed and typical character."
            centered
          />
        </AnimatedSection>

        {/* Desktop: Table-style cards */}
        <AnimatedSection delay={0.1}>
          <div
            className="rounded-sm overflow-hidden"
            style={{ border: '1px solid var(--color-border)' }}
          >
            {/* Header Row */}
            <div
              className="hidden sm:grid grid-cols-4 gap-0 px-6 py-4"
              style={{
                background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary))',
              }}
            >
              {['Grade', 'Leaf Style', 'Infusion Speed', 'Typical Character'].map((header) => (
                <div key={header} className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(250,247,242,0.9)' }}>
                  {header}
                </div>
              ))}
            </div>

            {/* Data Rows */}
            <div>
              {teaComparisonData.map((row, index) => (
                <div
                  key={row.grade}
                  className="group"
                  style={{
                    borderBottom: index < teaComparisonData.length - 1 ? '1px solid var(--color-border)' : 'none',
                  }}
                >
                  {/* Desktop Row */}
                  <div
                    className="hidden sm:grid grid-cols-4 gap-0 px-6 py-5 transition-colors duration-200 group-hover:bg-[rgba(74,124,40,0.04)]"
                    style={{ background: index % 2 === 0 ? 'var(--color-bg-card)' : 'var(--color-bg-secondary)' }}
                  >
                    {/* Grade */}
                    <div className="flex items-center">
                      <span
                        className="inline-block px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded-sm"
                        style={{ background: 'var(--color-brand-primary)', color: '#FAF7F2' }}
                      >
                        {row.grade}
                      </span>
                    </div>
                    {/* Leaf Style */}
                    <div className="flex items-center pr-4">
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        {row.leafStyle}
                      </span>
                    </div>
                    {/* Infusion Speed */}
                    <div className="flex items-center pr-4">
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        {row.infusionSpeed}
                      </span>
                    </div>
                    {/* Strength bar + character */}
                    <div className="flex flex-col justify-center gap-1.5">
                      <div
                        className="h-1.5 rounded-full overflow-hidden w-24"
                        style={{ background: 'var(--color-bg-tertiary)' }}
                        aria-label={`Strength: ${row.strength} out of ${maxStrength}`}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${(row.strength / maxStrength) * 100}%`,
                            background: 'linear-gradient(90deg, var(--color-brand-secondary), var(--color-brand-gold))',
                          }}
                        />
                      </div>
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        {row.typicalCharacter}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Card */}
                  <div
                    className="sm:hidden p-5 transition-colors duration-200"
                    style={{ background: index % 2 === 0 ? 'var(--color-bg-card)' : 'var(--color-bg-secondary)' }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="inline-block px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded-sm"
                        style={{ background: 'var(--color-brand-primary)', color: '#FAF7F2' }}
                      >
                        {row.grade}
                      </span>
                      {/* Strength indicator */}
                      <div
                        className="h-1.5 rounded-full overflow-hidden w-20"
                        style={{ background: 'var(--color-bg-tertiary)' }}
                        aria-label={`Strength: ${row.strength} out of ${maxStrength}`}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(row.strength / maxStrength) * 100}%`,
                            background: 'linear-gradient(90deg, var(--color-brand-secondary), var(--color-brand-gold))',
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Leaf Style</p>
                        <p style={{ color: 'var(--color-text-secondary)' }}>{row.leafStyle}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Speed</p>
                        <p style={{ color: 'var(--color-text-secondary)' }}>{row.infusionSpeed}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Character</p>
                        <p style={{ color: 'var(--color-text-secondary)' }}>{row.typicalCharacter}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-6">
          <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
            * Strength bar indicates relative body/intensity. All teas are influenced by water quality, temperature and brew time.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

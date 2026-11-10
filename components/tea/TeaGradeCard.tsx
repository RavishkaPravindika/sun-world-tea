'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Leaf, Wind, Coffee, Droplets } from 'lucide-react';
import { TeaGrade } from '@/data/teas';

interface TeaGradeCardProps {
  tea: TeaGrade;
  index: number;
}

const propertyIcons = {
  leafAppearance: Leaf,
  aroma: Wind,
  liquor: Droplets,
  tasteProfile: Coffee,
};

export default function TeaGradeCard({ tea, index }: TeaGradeCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      id={`tea-${tea.id}`}
      className="rounded-sm overflow-hidden transition-all duration-300"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Accent Bar */}
      <div
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-gold), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm"
                style={{ background: 'var(--color-brand-primary)', color: '#14210F' }}
              >
                {tea.grade}
              </span>
              <span
                className="text-xs font-medium capitalize px-2.5 py-1 rounded-full"
                style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-muted)' }}
              >
                {tea.category === 'black' ? 'Black Tea' : tea.category === 'green' ? 'Green Tea' : 'Specialty'}
              </span>
            </div>
            <h2
              className="font-serif text-2xl sm:text-3xl font-semibold leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {tea.name}
            </h2>
            <p
              className="text-sm font-medium italic mt-1"
              style={{ color: 'var(--color-brand-text)' }}
            >
              {tea.tagline}
            </p>
          </div>

          {/* Brewing indicators */}
          <div
            className="flex gap-4 sm:gap-6 p-4 rounded-sm shrink-0"
            style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
          >
            <div className="text-center">
              <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-text-muted)' }}>Infusion</p>
              <p className="text-sm font-semibold capitalize" style={{ color: 'var(--color-text-primary)' }}>
                {tea.infusionSpeed}
              </p>
            </div>
            <div className="w-px self-stretch" style={{ background: 'var(--color-border)' }} aria-hidden="true" />
            <div className="text-center">
              <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-text-muted)' }}>Body</p>
              <p className="text-sm font-semibold capitalize" style={{ color: 'var(--color-text-primary)' }}>
                {tea.bodyStrength}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
          {tea.description}
        </p>

        {/* Properties grid — always visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {(
            [
              { key: 'leafAppearance', label: 'Leaf Appearance', icon: Leaf },
              { key: 'aroma', label: 'Aroma', icon: Wind },
              { key: 'liquor', label: 'Liquor / Infusion', icon: Droplets },
              { key: 'tasteProfile', label: 'Taste Profile', icon: Coffee },
            ] as const
          ).map(({ key, label, icon: Icon }) => (
            <div
              key={key}
              className="flex gap-3 p-4 rounded-sm"
              style={{ background: 'var(--color-bg-secondary)' }}
            >
              <div
                className="shrink-0 w-8 h-8 rounded-sm flex items-center justify-center mt-0.5"
                style={{ background: 'var(--color-brand-natural-soft)' }}
              >
                <Icon size={15} style={{ color: 'var(--color-text-accent)' }} />
              </div>
              <div>
                <p className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                  {label}
                </p>
                <p className="text-sm leading-snug" style={{ color: 'var(--color-text-primary)' }}>
                  {tea[key]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable: Brewing Notes */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 w-full sm:w-auto"
          style={{ color: 'var(--color-text-accent)' }}
          aria-expanded={expanded}
          aria-controls={`brewing-notes-${tea.id}`}
        >
          {expanded ? (
            <>
              <ChevronUp size={16} />
              Hide Brewing Notes
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              Show Brewing Notes
            </>
          )}
        </button>

        {expanded && (
          <div
            id={`brewing-notes-${tea.id}`}
            className="mt-4 p-4 rounded-sm"
            style={{
              background: 'linear-gradient(135deg, var(--color-brand-primary-subtle), var(--color-brand-natural-soft))',
              border: '1px solid var(--color-border-gold)',
            }}
            role="region"
            aria-label="Brewing notes"
          >
            <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-accent)' }}>
              Brewing Notes
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              {tea.brewingNotes}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

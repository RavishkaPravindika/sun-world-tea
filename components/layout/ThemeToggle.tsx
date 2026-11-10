'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border flex items-center justify-center opacity-50" style={{ borderColor: 'var(--color-border)' }}>
        <span className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 group"
      style={{
        borderColor: 'var(--color-border-gold)',
        background: 'var(--color-bg-secondary)',
        color: 'var(--color-text-accent)',
      }}
    >
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'var(--color-brand-primary-subtle)' }}
      />
      {theme === 'dark' ? (
        <Sun size={16} className="relative z-10" />
      ) : (
        <Moon size={16} className="relative z-10" />
      )}
    </button>
  );
}

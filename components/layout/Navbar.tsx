'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tea-collection', label: 'Tea Collection' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          scrolled
            ? 'py-3 shadow-lg'
            : 'py-5'
        )}
        style={{
          background: scrolled
            ? 'var(--color-bg-glass)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Sun World Tea — Home"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary))',
                boxShadow: 'var(--glow-green)',
              }}
            >
              <Leaf size={16} color="#FAF7F2" />
            </div>
            <span
              className="font-serif font-semibold tracking-wide text-lg leading-none transition-colors duration-200"
              style={{ color: scrolled || pathname !== '/' ? 'var(--color-text-primary)' : '#FAF7F2' }}
            >
              SUN WORLD TEA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium tracking-wide transition-all duration-200 pb-0.5 group',
                  'after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300',
                  pathname === link.href
                    ? 'after:w-full'
                    : 'after:w-0 hover:after:w-full'
                )}
                style={{
                  color:
                    pathname === link.href
                      ? 'var(--color-brand-gold)'
                      : scrolled || pathname !== '/'
                      ? 'var(--color-text-secondary)'
                      : 'rgba(250, 247, 242, 0.88)',
                  // @ts-ignore
                  '--tw-after-bg': 'var(--color-brand-gold)',
                }}
              >
                <span>{link.label}</span>
                <span
                  className="absolute bottom-0 left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{
                    background: 'var(--color-brand-gold)',
                    width: pathname === link.href ? '100%' : '0%',
                  }}
                />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="w-9 h-9 flex items-center justify-center rounded transition-colors duration-200"
              style={{
                color: scrolled || pathname !== '/' ? 'var(--color-text-primary)' : '#FAF7F2',
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{ background: 'rgba(13, 26, 8, 0.5)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-72 lg:hidden flex flex-col transition-transform duration-350',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ background: 'var(--color-bg-primary)', borderLeft: '1px solid var(--color-border)' }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary))' }}
            >
              <Leaf size={13} color="#FAF7F2" />
            </div>
            <span className="font-serif font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
              SUN WORLD TEA
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center px-4 py-3.5 rounded-sm text-base font-medium transition-all duration-200',
                    pathname === link.href ? 'font-semibold' : ''
                  )}
                  style={{
                    color: pathname === link.href ? 'var(--color-brand-gold)' : 'var(--color-text-secondary)',
                    background: pathname === link.href ? 'var(--color-bg-secondary)' : 'transparent',
                    borderLeft: pathname === link.href ? '2px solid var(--color-brand-gold)' : '2px solid transparent',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 py-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs font-medium tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>
            THE ART OF EXCEPTIONAL TEA
          </p>
        </div>
      </div>
    </>
  );
}

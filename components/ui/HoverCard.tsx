'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
}

export default function HoverCard({ children, className = '', style, hoverStyle }: HoverCardProps) {
  return (
    <div
      className={cn('transition-all duration-300', className)}
      style={style}
      onMouseEnter={(e) => {
        if (hoverStyle) {
          Object.assign((e.currentTarget as HTMLElement).style, hoverStyle);
        }
      }}
      onMouseLeave={(e) => {
        if (hoverStyle && style) {
          // Reset only the properties that were changed by hoverStyle
          Object.keys(hoverStyle).forEach((key) => {
            (e.currentTarget as HTMLElement).style[key as any] = (style as any)[key] ?? '';
          });
        }
      }}
    >
      {children}
    </div>
  );
}

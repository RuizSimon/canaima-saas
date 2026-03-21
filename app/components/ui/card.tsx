import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <section className={`rounded-2xl border border-[var(--border-soft)] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ${className}`}>
      {children}
    </section>
  );
}

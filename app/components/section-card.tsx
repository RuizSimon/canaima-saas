import { ReactNode } from 'react';
 codex/improve-project-structure-for-saas-platform-3srlgs
import { Card } from '@/app/components/ui/card';
import { SectionHeader } from '@/app/components/ui/section-header';

 main

type SectionCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionCard({ title, description, children }: SectionCardProps) {
  return (
 codex/improve-project-structure-for-saas-platform-3srlgs
    <Card>
      <SectionHeader title={title} description={description} />
      {children}
    </Card>

    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <header className="mb-4">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </header>
      {children}
    </section>
 main
  );
}

import { ReactNode } from 'react';
import { Card } from '@/app/components/ui/card';
import { SectionHeader } from '@/app/components/ui/section-header';

type SectionCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <SectionHeader title={title} description={description} />
      <div className="mt-4">{children}</div>
    </Card>
  );
}
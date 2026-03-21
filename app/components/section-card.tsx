import { ReactNode } from 'react';
import { Card } from '@/app/components/ui/card';
import { SectionHeader } from '@/app/components/ui/section-header';

type SectionCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <Card>
      <SectionHeader title={title} description={description} />
      {children}
    </Card>
  );
}

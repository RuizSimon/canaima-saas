import { Card } from '@/app/components/ui/card';

type KpiCardProps = {
  title: string;
  value: string;
  description: string;
};

export function KpiCard({ title, value, description }: KpiCardProps) {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
      <p className="mt-2 text-sm text-emerald-600">{description}</p>
    </Card>
  );
}
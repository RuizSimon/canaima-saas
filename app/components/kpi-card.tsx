import { Card } from '@/app/components/ui/card';

type KpiCardProps = {
  title: string;
  value: string;
  trend: string;
  trendTone?: 'positive' | 'neutral' | 'warning';
};

const trendToneMap = {
  positive: 'text-emerald-600',
  neutral: 'text-[var(--text-muted)]',
  warning: 'text-amber-600',
};

export function KpiCard({ title, value, trend, trendTone = 'positive' }: KpiCardProps) {
  return (
    <Card className="relative overflow-hidden p-5">
      <div className="absolute left-0 top-0 h-full w-1.5 bg-[var(--brand-primary)]/85" />
      <div className="pl-2">
        <div className="flex items-start justify-between">
          <p className="text-sm font-medium text-[var(--text-muted)]">{title}</p>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-soft)] text-[var(--brand-primary)]">
            ◔
          </span>
        </div>
        <p className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-main)]">{value}</p>
        <p className={`mt-2 text-xs font-semibold ${trendToneMap[trendTone]}`}>{trend}</p>
      </div>
    </Card>
  );
}

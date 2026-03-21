 codex/improve-project-structure-for-saas-platform-3srlgs
import { Card } from '@/app/components/ui/card';


 main
type KpiCardProps = {
  title: string;
  value: string;
  trend: string;
 codex/improve-project-structure-for-saas-platform-3srlgs
  trendTone?: 'positive' | 'neutral' | 'warning';
};

const trendToneMap = {
  positive: 'text-emerald-600',
  neutral: 'text-[var(--text-muted)]',
  warning: 'text-amber-600',

  trendTone?: 'positive' | 'neutral';
 main
};

export function KpiCard({ title, value, trend, trendTone = 'positive' }: KpiCardProps) {
  return (
 codex/improve-project-structure-for-saas-platform-3srlgs
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-[var(--text-muted)]">{title}</p>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-soft)] text-[var(--brand-primary)]">
          ◔
        </span>
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-main)]">{value}</p>
      <p className={`mt-2 text-xs font-semibold ${trendToneMap[trendTone]}`}>{trend}</p>
    </Card>

    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
      <p className={`mt-2 text-xs font-medium ${trendTone === 'positive' ? 'text-emerald-600' : 'text-slate-500'}`}>
        {trend}
      </p>
    </article>
 main
  );
}

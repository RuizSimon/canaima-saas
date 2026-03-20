type KpiCardProps = {
  title: string;
  value: string;
  trend: string;
  trendTone?: 'positive' | 'neutral';
};

export function KpiCard({ title, value, trend, trendTone = 'positive' }: KpiCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
      <p className={`mt-2 text-xs font-medium ${trendTone === 'positive' ? 'text-emerald-600' : 'text-slate-500'}`}>
        {trend}
      </p>
    </article>
  );
}

type StatusTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

type StatusBadgeProps = {
  label: string;
  tone?: StatusTone;
};

const toneClassMap: Record<StatusTone, string> = {
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-rose-100 text-rose-700',
  info: 'bg-sky-100 text-sky-700',
  neutral: 'bg-slate-100 text-slate-700',
};

export function StatusBadge({ label, tone = 'neutral' }: StatusBadgeProps) {
  return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${toneClassMap[tone]}`}>{label}</span>;
}

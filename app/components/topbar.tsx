import { BrandLogo } from '@/app/components/branding/brand-logo';
import { Button } from '@/app/components/ui/button';

type TopbarProps = {
  title: string;
  subtitle: string;
  actionLabel?: string;
};

export function Topbar({ title, subtitle, actionLabel }: TopbarProps) {
  return (
    <header className="mb-6 rounded-2xl border border-[var(--border-soft)] bg-white/95 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-2 w-32 rounded-md border border-[var(--border-soft)] bg-[var(--surface-soft)] px-2 py-1.5">
            <BrandLogo variant="blue" className="h-6 w-full" />
          </div>
          <p className="text-sm font-medium text-[var(--text-muted)]">{subtitle}</p>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-main)]">{title}</h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-2 text-sm text-[var(--text-muted)]">
            <span aria-hidden>⌕</span>
            <input
              placeholder="Buscar..."
              className="w-44 bg-transparent text-sm outline-none placeholder:text-[var(--text-muted)]"
            />
          </label>

          <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-white text-[var(--text-muted)] hover:bg-[var(--surface-soft)]">
            🔔
          </button>

          <div className="flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-white px-2 py-1.5">
            <div className="grid h-8 w-8 place-content-center rounded-lg bg-[var(--brand-primary)] text-xs font-semibold text-white">
              CE
            </div>
            <div className="pr-2">
              <p className="text-xs font-semibold text-[var(--text-main)]">Equipo Canaima</p>
              <p className="text-[11px] text-[var(--text-muted)]">Administrador</p>
            </div>
          </div>

          {actionLabel ? <Button>{actionLabel}</Button> : null}
        </div>
      </div>
    </header>
  );
}

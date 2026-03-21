import { AppShell } from '@/app/components/app-shell';
import { BrandLogo } from '@/app/components/branding/brand-logo';
import { KpiCard } from '@/app/components/kpi-card';
import { Card } from '@/app/components/ui/card';
import { SectionHeader } from '@/app/components/ui/section-header';

const kpis = [
  { title: 'Solicitudes activas', value: '128', trend: '+12% vs semana pasada' },
  { title: 'Viajes en curso', value: '42', trend: '+6% en tiempo real' },
  { title: 'Viajes completados hoy', value: '67', trend: '94% cumplimiento SLA' },
  { title: 'Ingresos del mes', value: '$148,700', trend: 'Actualizado hace 5 min', trendTone: 'neutral' as const },
];

const routeTasks = [
  'Ruta Caracas Centro → Chacao · 08:30 AM',
  'Ruta Guarenas → Plaza Venezuela · 09:10 AM',
  'Ruta Los Teques → Altamira · 09:45 AM',
  'Ruta La Guaira → Maiquetía · 10:00 AM',
];

const recentActivities = [
  'Servicio #SRV-2214 asignado al chofer José Contreras.',
  'Vehículo VAN-14 completó mantenimiento preventivo.',
  'Factura #FAC-9041 emitida para cliente corporativo Andina.',
  'Aprobada carga de gasolina para flota nocturna.',
];

const weeklyUsage = [72, 76, 79, 73, 88, 91, 85];

export default function Home() {
  return (
    <AppShell>
      <header className="mb-6 rounded-2xl border border-[var(--border-soft)] bg-white px-5 py-5 shadow-[0_14px_32px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="mb-3 inline-flex w-36 rounded-md border border-[var(--border-soft)] bg-[var(--surface-soft)] px-2 py-1.5">
              <BrandLogo variant="blue" className="h-7 w-full" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">Dashboard</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[var(--text-main)]">Centro de control logístico</h1>
            <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
              Monitorea las operaciones críticas de Canaima Express en tiempo real y prioriza rutas,
              asignaciones y cumplimiento de servicio desde un solo panel.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-2 text-sm text-[var(--text-muted)]">
              <span aria-hidden>⌕</span>
              <input
                placeholder="Buscar servicio, cliente o ruta"
                className="w-52 bg-transparent text-sm outline-none placeholder:text-[var(--text-muted)]"
              />
            </label>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-soft)] text-[var(--text-muted)] hover:bg-[var(--surface-soft)]">
              🔔
            </button>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-2 py-1.5">
              <div className="grid h-8 w-8 place-content-center rounded-lg bg-[var(--brand-primary)] text-xs font-semibold text-white">CE</div>
              <div className="pr-2">
                <p className="text-xs font-semibold text-[var(--text-main)]">Equipo Canaima</p>
                <p className="text-[11px] text-[var(--text-muted)]">Administrador</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((card) => (
          <KpiCard
            key={card.title}
            title={card.title}
            value={card.value}
            trend={card.trend}
            trendTone={card.trendTone}
          />
        ))}
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <SectionHeader
            eyebrow="Métricas"
            title="Rendimiento y capacidad de flota"
            description="Área visual preparada para integrar gráficas avanzadas y métricas futuras"
          />

          <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Utilización semanal</p>
              <div className="mt-4 grid h-48 grid-cols-7 items-end gap-2">
                {weeklyUsage.map((value, index) => (
                  <div key={`${value}-${index}`} className="flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-[var(--brand-primary)] to-[#4b6190]"
                      style={{ height: `${value}%` }}
                    />
                    <span className="text-xs text-[var(--text-muted)]">D{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-[var(--border-soft)] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Ocupación</p>
                <p className="mt-2 text-3xl font-semibold text-[var(--brand-primary)]">87%</p>
              </div>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Puntualidad</p>
                <p className="mt-2 text-3xl font-semibold text-emerald-600">94%</p>
              </div>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">Alertas abiertas</p>
                <p className="mt-2 text-3xl font-semibold text-amber-600">04</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <SectionHeader
            title="Actividad reciente"
            description="Eventos operativos y administrativos del turno actual"
          />
          <ul className="space-y-2 text-sm text-[var(--text-main)]">
            {recentActivities.map((activity) => (
              <li key={activity} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-3 py-2.5">
                {activity}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-4">
        <Card>
          <SectionHeader
            title="Hoja de ruta prioritaria"
            description="Despachos con mayor impacto operativo para las próximas horas"
          />
          <div className="grid gap-3 md:grid-cols-2">
            {routeTasks.map((task) => (
              <div key={task} className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text-main)]">
                {task}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </AppShell>
  );
}

import { AppShell } from '@/app/components/app-shell';
import { KpiCard } from '@/app/components/kpi-card';
import { SectionCard } from '@/app/components/section-card';

export default function Page() {
  return (
    <AppShell>
      <div className="space-y-6">
        <header className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Panel operativo</p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Dashboard ejecutivo
            </h1>
          </div>

          <button className="rounded-xl bg-[var(--brand-primary)] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[var(--brand-primary-hover)]">
            Generar reporte
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <KpiCard
            title="Solicitudes activas"
            value="128"
            description="+12% vs semana pasada"
          />
          <KpiCard
            title="Viajes en curso"
            value="42"
            description="+6% en tiempo real"
          />
          <KpiCard
            title="Viajes completados hoy"
            value="67"
            description="94% cumplimiento SLA"
          />
          <KpiCard
            title="Ingresos del mes"
            value="$148,700"
            description="Actualizado hace 5 min"
          />
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <SectionCard
            title="Hoja de ruta prioritaria"
            description="Próximos despachos confirmados para hoy"
          >
            <div className="space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                Ruta Caracas Centro → Chacao · 08:30 AM
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                Ruta Guarenas → Plaza Venezuela · 09:10 AM
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                Ruta Los Teques → Altamira · 09:45 AM
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                Ruta La Guaira → Maiquetía · 10:00 AM
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Actividad reciente"
            description="Eventos operativos y administrativos"
          >
            <div className="space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                Servicio #SRV-2214 asignado al chofer José Contreras.
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                Vehículo VAN-14 completó mantenimiento preventivo.
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                Factura #FAC-9041 emitida para cliente corporativo Andina.
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                Aprobada carga de gasolina para flota nocturna.
              </div>
            </div>
          </SectionCard>
        </section>
      </div>
    </AppShell>
  );
}
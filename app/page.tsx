import { AppShell } from '@/app/components/app-shell';
import { KpiCard } from '@/app/components/kpi-card';
import { SectionCard } from '@/app/components/section-card';
import { Topbar } from '@/app/components/topbar';

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

export default function Home() {
  return (
    <AppShell>
      <Topbar />

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

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <SectionCard title="Hoja de ruta prioritaria" description="Próximos despachos confirmados para hoy">
          <ul className="space-y-2 text-sm text-slate-700">
            {routeTasks.map((task) => (
              <li key={task} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                {task}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Actividad reciente" description="Eventos operativos y administrativos">
          <ul className="space-y-2 text-sm text-slate-700">
            {recentActivities.map((activity) => (
              <li key={activity} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                {activity}
              </li>
            ))}
          </ul>
        </SectionCard>
      </section>
    </AppShell>
  );
}

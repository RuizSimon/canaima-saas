import { ServiceRequest, ServiceStatus } from '@/app/lib/mock-service-requests';
 codex/improve-project-structure-for-saas-platform-3srlgs
import { Card } from '@/app/components/ui/card';
import { StatusBadge } from '@/app/components/ui/status-badge';

 main

type RequestsTableProps = {
  requests: ServiceRequest[];
};

 codex/improve-project-structure-for-saas-platform-3srlgs
const statusTone: Record<ServiceStatus, 'warning' | 'info' | 'neutral' | 'success'> = {
  Pendiente: 'warning',
  Asignado: 'info',
  'En ruta': 'neutral',
  Completado: 'success',

const statusStyles: Record<ServiceStatus, string> = {
  Pendiente: 'bg-amber-100 text-amber-700',
  Asignado: 'bg-sky-100 text-sky-700',
  'En ruta': 'bg-violet-100 text-violet-700',
  Completado: 'bg-emerald-100 text-emerald-700',
 main
};

export function RequestsTable({ requests }: RequestsTableProps) {
  return (
 codex/improve-project-structure-for-saas-platform-3srlgs
    <Card className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[var(--border-soft)] text-sm">
          <thead className="bg-[var(--surface-soft)] text-left text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">

    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
 main
            <tr>
              <th className="px-4 py-3">ID del servicio</th>
              <th className="px-4 py-3">Organización</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Origen</th>
              <th className="px-4 py-3">Destino</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Conductor</th>
              <th className="px-4 py-3">Vehículo</th>
            </tr>
          </thead>
 codex/improve-project-structure-for-saas-platform-3srlgs
          <tbody className="divide-y divide-[var(--border-soft)] bg-white text-[var(--text-main)]">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-[var(--surface-soft)]/70">
                <td className="px-4 py-3 font-semibold">{request.id}</td>

          <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-slate-50/90">
                <td className="px-4 py-3 font-semibold text-slate-900">{request.id}</td>
 main
                <td className="px-4 py-3">{request.organization}</td>
                <td className="px-4 py-3">{request.date}</td>
                <td className="px-4 py-3">{request.origin}</td>
                <td className="px-4 py-3">{request.destination}</td>
                <td className="px-4 py-3">
 codex/improve-project-structure-for-saas-platform-3srlgs
                  <StatusBadge label={request.status} tone={statusTone[request.status]} />

                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[request.status]}`}>
                    {request.status}
                  </span>
 main
                </td>
                <td className="px-4 py-3">{request.driver}</td>
                <td className="px-4 py-3">{request.vehicle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 codex/improve-project-structure-for-saas-platform-3srlgs
    </Card>

    </section>
 main
  );
}

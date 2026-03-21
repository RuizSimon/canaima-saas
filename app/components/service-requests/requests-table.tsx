import { ServiceRequest, ServiceStatus } from '@/app/lib/mock-service-requests';
import { Card } from '@/app/components/ui/card';
import { StatusBadge } from '@/app/components/ui/status-badge';

type RequestsTableProps = {
  requests: ServiceRequest[];
};

const statusTone: Record<ServiceStatus, 'warning' | 'info' | 'neutral' | 'success'> = {
  Pendiente: 'warning',
  Asignado: 'info',
  'En ruta': 'neutral',
  Completado: 'success',
};

export function RequestsTable({ requests }: RequestsTableProps) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[var(--border-soft)] text-sm">
          <thead className="bg-[var(--surface-soft)] text-left text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
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
          <tbody className="divide-y divide-[var(--border-soft)] bg-white text-[var(--text-main)]">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-[var(--surface-soft)]/70">
                <td className="px-4 py-3 font-semibold">{request.id}</td>
                <td className="px-4 py-3">{request.organization}</td>
                <td className="px-4 py-3">{request.date}</td>
                <td className="px-4 py-3">{request.origin}</td>
                <td className="px-4 py-3">{request.destination}</td>
                <td className="px-4 py-3">
                  <StatusBadge label={request.status} tone={statusTone[request.status]} />
                </td>
                <td className="px-4 py-3">{request.driver}</td>
                <td className="px-4 py-3">{request.vehicle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

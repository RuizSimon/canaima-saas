import { ServiceRequest, ServiceStatus } from '@/app/lib/mock-service-requests';
import { Card } from '@/app/components/ui/card';
import { StatusBadge } from '@/app/components/ui/status-badge';

type RequestsTableProps = {
  requests: ServiceRequest[];
};

const statusTone: Record<ServiceStatus, 'warning' | 'info' | 'success'> = {
  Pendiente: 'warning',
  Asignada: 'info',
  Completada: 'success',
};

export function RequestsTable({ requests }: RequestsTableProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[var(--border-soft)] text-sm">
          <thead className="bg-[var(--surface-soft)] text-left text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">Ruta</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-soft)] bg-white text-[var(--text-main)]">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-[var(--surface-soft)]/70">
                <td className="px-4 py-3 font-semibold">{request.id}</td>
                <td className="px-4 py-3">{request.client}</td>
                <td className="px-4 py-3">
                  {request.origin} → {request.destination}
                </td>
                <td className="px-4 py-3">{request.date}</td>
                <td className="px-4 py-3">
                  <StatusBadge label={request.status} tone={statusTone[request.status]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

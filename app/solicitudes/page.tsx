import { AppShell } from '@/app/components/app-shell';
import { NewRequestModal } from '@/app/components/service-requests/new-request-modal';
import { RequestsTable } from '@/app/components/service-requests/requests-table';
import { serviceRequests } from '@/app/lib/mock-service-requests';

export default function SolicitudesPage() {
  return (
    <AppShell>
      <header className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Operaciones</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Solicitudes de servicio</h1>
        </div>
        <NewRequestModal />
      </header>

      <RequestsTable requests={serviceRequests} />
    </AppShell>
  );
}

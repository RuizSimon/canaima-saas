import { AppShell } from '@/app/components/app-shell';
import { NewRequestModal } from '@/app/components/service-requests/new-request-modal';
import { RequestsTable } from '@/app/components/service-requests/requests-table';
 codex/improve-project-structure-for-saas-platform-3srlgs
import { Topbar } from '@/app/components/topbar';

 main
import { serviceRequests } from '@/app/lib/mock-service-requests';

export default function SolicitudesPage() {
  return (
    <AppShell>
 codex/improve-project-structure-for-saas-platform-3srlgs
      <Topbar title="Solicitudes de servicio" subtitle="Operaciones" />

      <div className="mb-4 flex justify-end">
        <NewRequestModal />
      </div>

      <header className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">Operaciones</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Solicitudes de servicio</h1>
        </div>
        <NewRequestModal />
      </header>
 main

      <RequestsTable requests={serviceRequests} />
    </AppShell>
  );
}

import { AppShell } from '@/app/components/app-shell';
import { NewRequestModal } from '@/app/components/service-requests/new-request-modal';
import { RequestsTable } from '@/app/components/service-requests/requests-table';
import { Topbar } from '@/app/components/topbar';
import { serviceRequests } from '@/app/lib/mock-service-requests';

export default function SolicitudesPage() {
  return (
    <AppShell>
      <Topbar title="Solicitudes de servicio" subtitle="Operaciones" />

      <div className="mb-4 flex justify-end">
        <NewRequestModal />
      </div>

      <RequestsTable requests={serviceRequests} />
    </AppShell>
  );
}

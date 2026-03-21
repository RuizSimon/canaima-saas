import { AppShell } from '@/app/components/app-shell';
import { SolicitudesModule } from '@/app/components/service-requests/solicitudes-module';
import { Topbar } from '@/app/components/topbar';

export default function SolicitudesPage() {
  return (
    <AppShell>
      <Topbar
        title="Solicitudes de servicio"
        subtitle="Operaciones"
        actionLabel="Exportar listado"
      />
      <SolicitudesModule />
    </AppShell>
  );
}

export type ServiceStatus = 'Pendiente' | 'Asignado' | 'En ruta' | 'Completado';

export type ServiceRequest = {
  id: string;
  organization: string;
  date: string;
  origin: string;
  destination: string;
  status: ServiceStatus;
  driver: string;
  vehicle: string;
};

export const serviceRequests: ServiceRequest[] = [
  {
    id: 'SRV-2401',
    organization: 'Grupo Andino',
    date: '2026-03-20',
    origin: 'Caracas Centro',
    destination: 'Chacao',
    status: 'Pendiente',
    driver: 'Por asignar',
    vehicle: 'Por asignar',
  },
  {
    id: 'SRV-2402',
    organization: 'Hospital Metropolitano',
    date: '2026-03-20',
    origin: 'Baruta',
    destination: 'Los Palos Grandes',
    status: 'Asignado',
    driver: 'José Contreras',
    vehicle: 'VAN-14',
  },
  {
    id: 'SRV-2403',
    organization: 'Universidad Central',
    date: '2026-03-21',
    origin: 'Ciudad Universitaria',
    destination: 'La California',
    status: 'En ruta',
    driver: 'María Silva',
    vehicle: 'BUS-09',
  },
  {
    id: 'SRV-2404',
    organization: 'Centro Empresarial Torre Sur',
    date: '2026-03-19',
    origin: 'Altamira',
    destination: 'La Castellana',
    status: 'Completado',
    driver: 'Carlos Pérez',
    vehicle: 'VAN-05',
  },
];

export const shiftOptions = ['Mañana', 'Tarde', 'Noche'];
export const serviceTypeOptions = ['Traslado corporativo', 'Ruta fija', 'Traslado especial'];

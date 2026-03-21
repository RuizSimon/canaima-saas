export type ServiceStatus = 'Pendiente' | 'Asignada' | 'Completada';

export type ServiceRequest = {
  id: string;
  client: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  serviceType: string;
  notes: string;
  status: ServiceStatus;
};

export type CreateServiceRequestInput = {
  client: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  serviceType: string;
  notes: string;
};

export const serviceRequests: ServiceRequest[] = [
  {
    id: 'SRV-2401',
    client: 'Grupo Andino',
    origin: 'Caracas Centro',
    destination: 'Chacao',
    date: '2026-03-21',
    time: '08:30',
    serviceType: 'Traslado corporativo',
    notes: 'Requiere llegada 10 minutos antes.',
    status: 'Pendiente',
  },
  {
    id: 'SRV-2402',
    client: 'Hospital Metropolitano',
    origin: 'Baruta',
    destination: 'Los Palos Grandes',
    date: '2026-03-21',
    time: '09:10',
    serviceType: 'Ruta fija',
    notes: 'Unidad con acceso prioritario.',
    status: 'Asignada',
  },
  {
    id: 'SRV-2403',
    client: 'Universidad Central',
    origin: 'Ciudad Universitaria',
    destination: 'La California',
    date: '2026-03-20',
    time: '07:45',
    serviceType: 'Traslado especial',
    notes: 'Confirmar punto de encuentro interno.',
    status: 'Completada',
  },
];

export const serviceTypeOptions = ['Traslado corporativo', 'Ruta fija', 'Traslado especial'];

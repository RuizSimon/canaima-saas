export type NavItem = {
  label: string;
  href: string;
};

export const sidebarItems: NavItem[] = [
  { label: 'Dashboard', href: '/' },
  { label: 'Solicitudes de servicio', href: '/solicitudes' },
  { label: 'Asignar viaje', href: '#' },
  { label: 'Viajes reservados', href: '#' },
  { label: 'Viajes asignados', href: '#' },
  { label: 'Viajes completados', href: '#' },
  { label: 'Hoja de ruta', href: '#' },
  { label: 'Clientes / Organizaciones', href: '#' },
  { label: 'Choferes', href: '#' },
  { label: 'Vehículos', href: '#' },
  { label: 'Facturación', href: '#' },
  { label: 'Mantenimiento', href: '#' },
  { label: 'Gastos de gasolina', href: '#' },
  { label: 'Nómina', href: '#' },
];

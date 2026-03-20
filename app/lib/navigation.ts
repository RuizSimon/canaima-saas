export type NavItem = {
  label: string;
  href: string;
};

export const sidebarItems: NavItem[] = [
  { label: 'Dashboard', href: '/' },
  { label: 'Solicitudes de servicio', href: '/solicitudes-servicio' },
  { label: 'Asignar viaje', href: '/asignar-viaje' },
  { label: 'Viajes reservados', href: '/viajes-reservados' },
  { label: 'Viajes asignados', href: '/viajes-asignados' },
  { label: 'Viajes completados', href: '/viajes-completados' },
  { label: 'Hoja de ruta', href: '/hoja-de-ruta' },
  { label: 'Clientes / Organizaciones', href: '/clientes-organizaciones' },
  { label: 'Choferes', href: '/choferes' },
  { label: 'Vehículos', href: '/vehiculos' },
  { label: 'Facturación', href: '/facturacion' },
  { label: 'Mantenimiento', href: '/mantenimiento' },
  { label: 'Gastos de gasolina', href: '/gastos-gasolina' },
  { label: 'Nómina', href: '/nomina' },
];

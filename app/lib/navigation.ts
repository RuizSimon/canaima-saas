export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const sidebarGroups: NavGroup[] = [
  {
    title: 'Principal',
    items: [
      { label: 'Dashboard', href: '/', icon: '▦' },
      { label: 'Solicitudes de servicio', href: '/solicitudes', icon: '▤' },
      { label: 'Asignar viaje', href: '/asignar-viaje', icon: '⇄' },
      { label: 'Viajes reservados', href: '/viajes-reservados', icon: '◷' },
      { label: 'Viajes asignados', href: '/viajes-asignados', icon: '✓' },
      { label: 'Viajes completados', href: '/viajes-completados', icon: '◎' },
      { label: 'Hoja de ruta', href: '/hoja-de-ruta', icon: '↗' },
    ],
  },
  {
    title: 'Operaciones',
    items: [
      { label: 'Clientes / Organizaciones', href: '/clientes-organizaciones', icon: '⌂' },
      { label: 'Choferes', href: '/choferes', icon: '👤' },
      { label: 'Vehículos', href: '/vehiculos', icon: '▣' },
      { label: 'Facturación', href: '/facturacion', icon: '$' },
      { label: 'Mantenimiento', href: '/mantenimiento', icon: '⚙' },
      { label: 'Gastos de gasolina', href: '/gastos-gasolina', icon: '⛽' },
      { label: 'Nómina', href: '/nomina', icon: '▧' },
    ],
  },
];
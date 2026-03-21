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
      { label: 'Asignar viaje', href: '#', icon: '⇄' },
      { label: 'Viajes reservados', href: '#', icon: '◷' },
      { label: 'Viajes asignados', href: '#', icon: '✓' },
      { label: 'Viajes completados', href: '#', icon: '◎' },
      { label: 'Hoja de ruta', href: '#', icon: '↗' },
    ],
  },
  {
    title: 'Operaciones',
    items: [
      { label: 'Clientes / Organizaciones', href: '#', icon: '⌂' },
      { label: 'Choferes', href: '#', icon: '👤' },
      { label: 'Vehículos', href: '#', icon: '▣' },
      { label: 'Facturación', href: '#', icon: '$' },
      { label: 'Mantenimiento', href: '#', icon: '⚙' },
      { label: 'Gastos de gasolina', href: '#', icon: '⛽' },
      { label: 'Nómina', href: '#', icon: '▧' },
    ],
  },
];

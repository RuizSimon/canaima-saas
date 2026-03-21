export type NavItem = {
  label: string;
  href: string;
 codex/improve-project-structure-for-saas-platform-3srlgs
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

};

export const sidebarItems: NavItem[] = [
  { label: 'Dashboard', href: '/' },
 codex/improve-project-structure-for-saas-platform-1xch2d
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
 main
 main
];

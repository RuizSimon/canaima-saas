import Link from 'next/link';
import { sidebarItems } from '@/app/lib/navigation';

type SidebarProps = {
  activePath?: string;
};

export function Sidebar({ activePath = '/' }: SidebarProps) {
  return (
    <aside className="w-full border-b border-slate-800 bg-slate-950 px-4 py-6 text-slate-100 lg:w-72 lg:border-b-0 lg:border-r lg:px-5">
      <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-300">Canaima Express</p>
        <h1 className="mt-2 text-lg font-semibold">Sistema SaaS Logístico</h1>
        <p className="mt-1 text-xs text-slate-400">Centro de control operativo</p>
      </div>

      <nav aria-label="Menú principal">
        <ul className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = item.href === activePath;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-600/40'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

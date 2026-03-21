 codex/improve-project-structure-for-saas-platform-3srlgs

 codex/improve-project-structure-for-saas-platform-1xch2d
 main
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
 codex/improve-project-structure-for-saas-platform-3srlgs
import { BrandLogo } from '@/app/components/branding/brand-logo';
import { sidebarGroups } from '@/app/lib/navigation';

import { sidebarItems } from '@/app/lib/navigation';
 main

export function Sidebar() {
  const pathname = usePathname();

 codex/improve-project-structure-for-saas-platform-3srlgs
  return (
    <aside className="w-full border-b border-[#30406a] bg-[var(--brand-primary)] px-4 py-6 text-slate-100 lg:w-72 lg:border-b-0 lg:border-r lg:px-5">
      <div className="mb-6 rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-4">
        <div className="rounded-xl border border-white/20 bg-white/5 px-3 py-3">
          <BrandLogo variant="white" className="h-14 w-full" />
        </div>
        <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9d5f2]">Canaima Express</p>
          <h1 className="mt-1 text-base font-semibold text-white">Control logístico</h1>
          <p className="mt-1 text-xs text-slate-300">Plataforma SaaS de operaciones y movilidad</p>
        </div>
      </div>

      <nav aria-label="Menú principal" className="space-y-5">
        {sidebarGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9eb1df]">
              {group.title}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = item.href !== '#' && item.href === pathname;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                        isActive
                          ? 'bg-white/12 text-white ring-1 ring-white/25'
                          : 'text-slate-200 hover:bg-white/8 hover:text-white'
                      }`}
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 text-[11px] leading-none">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}


import Link from 'next/link';
import { sidebarItems } from '@/app/lib/navigation';

type SidebarProps = {
  activePath?: string;
};

export function Sidebar({ activePath = '/' }: SidebarProps) {
 main
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
 codex/improve-project-structure-for-saas-platform-1xch2d
            const isActive = item.href === pathname;

            const isActive = item.href === activePath;
 main

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
 main
      </nav>
    </aside>
  );
}

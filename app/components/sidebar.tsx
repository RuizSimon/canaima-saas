'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/app/components/branding/brand-logo';
import { sidebarGroups } from '@/app/lib/navigation';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-[#2D3C64] bg-[#1C2A4D] px-4 py-6 text-slate-100 lg:w-72 lg:border-b-0 lg:border-r lg:px-5">
      <div className="mb-7 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-[#1A2542] p-4 shadow-[0_14px_30px_-24px_rgba(0,0,0,0.8)]">
        <div className="rounded-xl border border-white/20 bg-white/5 px-3 py-3">
          <BrandLogo variant="white" className="h-14 w-full" />
        </div>

        <div className="mt-3.5 space-y-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B8C8EC]">
            Canaima Express
          </p>
          <h1 className="text-base font-semibold tracking-tight text-white">Control logístico</h1>
          <p className="text-xs leading-5 text-slate-300/95">
            Plataforma SaaS de operaciones y movilidad
          </p>
        </div>
      </div>

      <nav aria-label="Menú principal" className="space-y-6">
        {sidebarGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2.5 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#95AADA]">
              {group.title}
            </p>
            <ul className="space-y-1.5">
              {group.items.map((item) => {
                const isActive = item.href !== '#' && item.href === pathname;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`group relative flex items-center gap-3 overflow-hidden rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ease-out ${
                        isActive
                          ? 'bg-white/10 text-white ring-1 ring-inset ring-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]'
                          : 'text-slate-200/95 hover:bg-white/8 hover:text-white'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute inset-y-1 left-1.5 w-1 rounded-full transition-opacity duration-200 ${
                          isActive ? 'bg-[#B8C8EC] opacity-100' : 'bg-[#B8C8EC] opacity-0 group-hover:opacity-60'
                        }`}
                      />

                      <span
                        className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[12px] leading-none transition-colors duration-200 ${
                          isActive ? 'bg-white/16 text-white' : 'bg-white/10 text-slate-100 group-hover:bg-white/14'
                        }`}
                      >
                        {item.icon}
                      </span>

                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/app/components/branding/brand-logo';
import { sidebarGroups } from '@/app/lib/navigation';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-[#30406a] bg-[var(--brand-primary)] px-4 py-6 text-slate-100 lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r lg:px-5">
      <div className="mb-6 rounded-2xl border border-white/15 bg-gradient-to-b from-white/15 to-white/5 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
        <div className="rounded-xl border border-white/20 bg-white/8 px-3 py-3">
          <BrandLogo variant="white" className="h-14 w-full" />
        </div>
        <div className="mt-3 border-t border-white/10 pt-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c9d5f2]">Canaima Express</p>
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
            <ul className="space-y-1.5">
              {group.items.map((item) => {
                const isActive = item.href !== '#' && item.href === pathname;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                        isActive
                          ? 'bg-white/15 text-white ring-1 ring-white/35 shadow-[0_6px_20px_rgba(0,0,0,0.16)]'
                          : 'text-slate-200 hover:bg-white/10 hover:text-white'
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
      </nav>
    </aside>
  );
}

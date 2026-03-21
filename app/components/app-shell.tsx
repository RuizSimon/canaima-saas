import { ReactNode } from 'react';
import { Sidebar } from '@/app/components/sidebar';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 lg:flex-row">
      <Sidebar />
      <main className="flex-1 p-5 sm:p-8">{children}</main>
    </div>
  );
}
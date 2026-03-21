import { ReactNode } from 'react';
import { Sidebar } from '@/app/components/sidebar';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--surface-main)] lg:flex-row">
      <Sidebar />
      <main className="flex-1 bg-[radial-gradient(circle_at_top,_#ffffff,_#f4f7fc_50%)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </main>
    </div>
  );
}

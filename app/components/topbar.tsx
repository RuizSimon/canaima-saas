export function Topbar() {
  return (
    <header className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">Panel operativo</p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Dashboard ejecutivo</h2>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
          Generar reporte
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          CE
        </div>
      </div>
    </header>
  );
}

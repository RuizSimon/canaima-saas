'use client';

import { FormEvent, useState } from 'react';
import { serviceTypeOptions, shiftOptions } from '@/app/lib/mock-service-requests';

export function NewRequestModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700"
      >
        Nueva solicitud
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Crear solicitud de servicio</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-1 text-sm text-slate-500 hover:bg-slate-100"
              >
                Cerrar
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
              <Field label="Organización" name="organization" />
              <Field label="Fecha" name="date" type="date" />
              <Field label="Hora" name="time" type="time" />
              <SelectField label="Turno" name="shift" options={shiftOptions} />
              <Field label="Usuarios" name="users" type="number" />
              <Field label="Origen" name="origin" />
              <Field label="Destino" name="destination" />
              <SelectField label="Tipo de servicio" name="serviceType" options={serviceTypeOptions} />
              <Field label="Conductor" name="driver" />
              <Field label="Vehículo" name="vehicle" />
              <Field label="Logista" name="logista" />
              <label className="flex flex-col gap-1 md:col-span-2">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Observaciones</span>
                <textarea
                  name="notes"
                  rows={3}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none ring-slate-300 focus:ring"
                  placeholder="Detalles adicionales de la solicitud"
                />
              </label>

              <div className="md:col-span-2 flex items-center justify-end gap-2 border-t border-slate-200 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                >
                  Guardar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
};

function Field({ label, name, type = 'text' }: FieldProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</span>
      <input
        required
        name={name}
        type={type}
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none ring-slate-300 focus:ring"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
};

function SelectField({ label, name, options }: SelectFieldProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</span>
      <select
        required
        name={name}
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none ring-slate-300 focus:ring"
        defaultValue=""
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

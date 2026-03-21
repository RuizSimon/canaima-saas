'use client';

import { FormEvent, useState } from 'react';
import { serviceTypeOptions, shiftOptions } from '@/app/lib/mock-service-requests';
import { Button } from '@/app/components/ui/button';
import { SelectField, TextAreaField, TextField } from '@/app/components/ui/form-field';

export function NewRequestModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Nueva solicitud
      </Button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-3xl rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-main)] p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--text-main)]">Crear solicitud de servicio</h3>
              <Button type="button" variant="ghost" onClick={() => setIsOpen(false)} className="shadow-none">
                Cerrar
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
              <TextField required label="Organización" name="organization" />
              <TextField required label="Fecha" name="date" type="date" />
              <TextField required label="Hora" name="time" type="time" />
              <SelectField required label="Turno" name="shift" options={shiftOptions} />
              <TextField required label="Usuarios" name="users" type="number" />
              <TextField required label="Origen" name="origin" />
              <TextField required label="Destino" name="destination" />
              <SelectField required label="Tipo de servicio" name="serviceType" options={serviceTypeOptions} />
              <TextField required label="Conductor" name="driver" />
              <TextField required label="Vehículo" name="vehicle" />
              <TextField required label="Logista" name="logista" />
              <div className="md:col-span-2">
                <TextAreaField
                  label="Observaciones"
                  name="notes"
                  rows={3}
                  placeholder="Detalles adicionales de la solicitud"
                />
              </div>

              <div className="md:col-span-2 flex items-center justify-end gap-2 border-t border-[var(--border-soft)] pt-4">
                <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Guardar solicitud</Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

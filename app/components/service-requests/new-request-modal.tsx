'use client';

import { FormEvent, useState } from 'react';
import { CreateServiceRequestInput, serviceTypeOptions } from '@/app/lib/mock-service-requests';
import { Button } from '@/app/components/ui/button';
import { SelectField, TextAreaField, TextField } from '@/app/components/ui/form-field';

type NewRequestModalProps = {
  onCreate: (payload: CreateServiceRequestInput) => void;
};

export function NewRequestModal({ onCreate }: NewRequestModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    onCreate({
      client: String(formData.get('client') ?? ''),
      origin: String(formData.get('origin') ?? ''),
      destination: String(formData.get('destination') ?? ''),
      date: String(formData.get('date') ?? ''),
      time: String(formData.get('time') ?? ''),
      serviceType: String(formData.get('serviceType') ?? ''),
      notes: String(formData.get('notes') ?? ''),
    });

    event.currentTarget.reset();
    setIsOpen(false);
  };

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Nueva solicitud
      </Button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-main)] p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--text-main)]">Crear solicitud de servicio</h3>
              <Button type="button" variant="ghost" onClick={() => setIsOpen(false)} className="shadow-none">
                Cerrar
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
              <TextField required label="Cliente / organización" name="client" />
              <TextField required label="Fecha" name="date" type="date" />
              <TextField required label="Origen" name="origin" />
              <TextField required label="Destino" name="destination" />
              <TextField required label="Hora" name="time" type="time" />
              <SelectField required label="Tipo de servicio" name="serviceType" options={serviceTypeOptions} />
              <div className="md:col-span-2">
                <TextAreaField
                  label="Observaciones"
                  name="notes"
                  rows={3}
                  placeholder="Detalles operativos para la solicitud"
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

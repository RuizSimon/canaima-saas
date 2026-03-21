import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type BaseFieldProps = {
  label: string;
  name: string;
};

type TextFieldProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement>;

export function TextField({ label, name, className = '', ...props }: TextFieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">{label}</span>
      <input
        name={name}
        className={`rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 text-sm text-[var(--text-main)] outline-none ring-[var(--brand-primary)]/20 transition focus:ring ${className}`}
        {...props}
      />
    </label>
  );
}

type SelectFieldProps = BaseFieldProps & {
  options: string[];
  required?: boolean;
};

export function SelectField({ label, name, options, required }: SelectFieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 text-sm text-[var(--text-main)] outline-none ring-[var(--brand-primary)]/20 transition focus:ring"
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

type TextAreaFieldProps = BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaField({ label, name, className = '', ...props }: TextAreaFieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">{label}</span>
      <textarea
        name={name}
        className={`rounded-xl border border-[var(--border-soft)] bg-white px-3 py-2.5 text-sm text-[var(--text-main)] outline-none ring-[var(--brand-primary)]/20 transition focus:ring ${className}`}
        {...props}
      />
    </label>
  );
}

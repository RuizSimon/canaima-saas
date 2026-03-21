type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="mb-4">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">{eyebrow}</p> : null}
      <h3 className="mt-1 text-lg font-semibold text-[var(--text-main)]">{title}</h3>
      {description ? <p className="mt-1 text-sm text-[var(--text-muted)]">{description}</p> : null}
    </header>
  );
}

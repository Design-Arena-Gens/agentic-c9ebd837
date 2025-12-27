import { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-lg">
      <header className="mb-4 space-y-2">
        <h2 className="text-xl font-semibold text-rose-900">{title}</h2>
        {description ? (
          <p className="text-sm text-rose-700/80">{description}</p>
        ) : null}
      </header>
      <div className="space-y-4 text-sm text-stone-700">{children}</div>
    </section>
  );
}


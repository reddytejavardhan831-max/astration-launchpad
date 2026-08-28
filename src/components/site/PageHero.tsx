export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="surface-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="animate-rise text-xs font-semibold uppercase tracking-[0.24em] opacity-90">
          {eyebrow}
        </p>
        <h1 className="animate-rise mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="animate-rise mt-4 max-w-2xl text-base opacity-90 sm:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}

export function RegisterButton({ label = "Register Now" }: { label?: string }) {
  return (
    <a
      href="https://forms.gle/TaHXNL8ZeaYomtPC7"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-brand-bright"
    >
      {label}
    </a>
  );
}

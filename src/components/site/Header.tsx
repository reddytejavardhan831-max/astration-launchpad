import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={SITE.logo}
            alt="AstraVizion AI Solutions logo"
            className="h-10 w-10 shrink-0 rounded-xl object-cover"
            loading="eager"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold text-navy sm:text-lg">
              {SITE.name}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-navy"
              activeProps={{ className: "bg-secondary text-navy" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.register}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-brand-bright"
          >
            Register Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-navy lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                  activeProps={{ className: "bg-secondary text-navy" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={SITE.register}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-bright"
          >
            Register Now
          </a>
        </nav>
      )}
    </header>
  );
}

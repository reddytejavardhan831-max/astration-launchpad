import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border surface-soft">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="min-w-0">
            <h2 className="font-display text-lg font-bold text-navy">{SITE.name}</h2>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {SITE.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{SITE.mission}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-flex items-center gap-2 break-all text-sm font-medium text-primary hover:underline"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              {SITE.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-bold text-navy">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted-foreground hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={SITE.register}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Register Now
            </a>
          </nav>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold text-navy">Connect With Us</h3>
            <SocialLinks className="mt-4 justify-center md:justify-start" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-1 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>CEO: {SITE.ceo}</p>
        </div>
      </div>
    </footer>
  );
}

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "Instagram",
    href: SITE.instagram,
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden focusable="false">
        <defs>
          <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FDB438" />
            <stop offset="45%" stopColor="#E1306C" />
            <stop offset="100%" stopColor="#5B51D8" />
          </linearGradient>
        </defs>
        <path
          fill="url(#ig)"
          d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.6-3.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden focusable="false">
        <path
          fill="#0A66C2"
          d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z"
        />
      </svg>
    ),
  },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

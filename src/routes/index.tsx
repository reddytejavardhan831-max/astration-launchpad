import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Briefcase, CalendarDays, GraduationCap, Rocket, Sparkles, Target, Eye } from "lucide-react";
import { RegisterButton } from "@/components/site/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AstraVizion AI Solutions — Free Power BI Internship & AI Training" },
      {
        name: "description",
        content:
          "Empowering students and professionals with AI, Power BI and Data Analytics skills. Join the Virtual Free Internship on Power BI today.",
      },
      { property: "og:title", content: "AstraVizion AI Solutions — Applied Intelligence" },
      {
        property: "og:description",
        content: "Free Power BI internship, AI training, FDPs, workshops and consulting.",
      },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: Briefcase, title: "Employability First", text: "Skills that hiring managers actually ask for." },
  { icon: BarChart3, title: "Hands-On Projects", text: "Learn by building real dashboards & models." },
  { icon: GraduationCap, title: "Free & Affordable", text: "Zero-cost internship, low-cost certifications." },
  { icon: Rocket, title: "Industry Ready", text: "Bridge the gap between classroom and career." },
];

const upcoming = [
  {
    title: "Interview Skills",
    date: "From September 15, 2026",
    text: "Communication, resume and mock interviews to get placement-ready.",
  },
  {
    title: "Certification Course on Tally ERP 9",
    date: "From October 1, 2026",
    text: "Practical accounting skills with an industry-recognised certificate.",
  },
];

function Home() {
  return (
    <>
      <section className="surface-deep">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-rise">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              {SITE.tagline}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-6xl">
              Learn AI skills.
              <br /> Build your career.
            </h1>
            <p className="mt-5 max-w-xl text-lg opacity-90">
              AI-driven learning for students, professionals, educators and businesses — training,
              internships, research and solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <RegisterButton label="Register Now — It's Free" />
              <a
                href={SITE.register}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Explore Programs
              </a>
            </div>
          </div>

          <div className="animate-rise rounded-2xl bg-card p-7 text-card-foreground shadow-[var(--shadow-soft)]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Now Open</p>
            <h2 className="mt-2 text-2xl font-extrabold text-navy">
              Virtual Free Internship on Power BI
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• 100% online, 100% free</li>
              <li>• Real dashboards, real datasets</li>
              <li>• Certificate on completion</li>
            </ul>
            <div className="mt-6">
              <RegisterButton />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="card-soft p-7">
            <Eye className="h-7 w-7 text-primary" aria-hidden />
            <h2 className="mt-3 text-xl font-bold text-navy">Our Vision</h2>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.vision}</p>
          </article>
          <article className="card-soft p-7">
            <Target className="h-7 w-7 text-primary" aria-hidden />
            <h2 className="mt-3 text-xl font-bold text-navy">Our Mission</h2>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.mission}</p>
          </article>
        </div>
      </section>

      <section className="surface-soft">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Projects</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy">Current & Upcoming Projects</h2>

          <article className="mt-8 rounded-2xl surface-deep p-8 sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              <Sparkles className="h-4 w-4" aria-hidden /> Current · Free
            </span>
            <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Virtual Free Internship on Power BI
            </h3>
            <ul className="mt-5 grid gap-2 text-sm opacity-95 sm:grid-cols-3">
              <li>• 100% online & fully free</li>
              <li>• Real dashboards and datasets</li>
              <li>• Certificate on completion</li>
            </ul>
            <div className="mt-8 inline-block rounded-xl bg-white p-0.5">
              <RegisterButton />
            </div>
          </article>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {upcoming.map((u) => (
              <article key={u.title} className="card-soft p-7">
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary">
                  <CalendarDays className="h-4 w-4" aria-hidden /> {u.date}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy">{u.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{u.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-navy">Why Students Choose Us</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <article key={b.title} className="card-soft p-6">
              <b.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 font-bold text-navy">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

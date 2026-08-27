import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Sparkles } from "lucide-react";
import { PageHero, RegisterButton } from "@/components/site/PageHero";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Free Power BI Internship & Upcoming Courses" },
      {
        name: "description",
        content:
          "Current: Virtual Free Internship on Power BI. Upcoming: Interview Skills (Sep 15, 2026) and Tally ERP 9 certification (Oct 1, 2026).",
      },
      { property: "og:title", content: "Projects — AstraVizion AI Solutions" },
      {
        property: "og:description",
        content: "Join the free Power BI internship and our upcoming certification courses.",
      },
    ],
  }),
  component: Projects,
});

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

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Learn now. Level up next."
        subtitle="One free internship running today, two certification programs coming soon."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <article className="rounded-2xl surface-deep p-8 sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="h-4 w-4" aria-hidden /> Current · Free
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Virtual Free Internship on Power BI
          </h2>
          <ul className="mt-5 grid gap-2 text-sm opacity-95 sm:grid-cols-3">
            <li>• 100% online & fully free</li>
            <li>• Real dashboards and datasets</li>
            <li>• Certificate on completion</li>
          </ul>
          <div className="mt-8 inline-block rounded-xl bg-white p-0.5">
            <RegisterButton />
          </div>
        </article>

        <h2 className="mt-16 text-2xl font-extrabold text-navy">Upcoming Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
      </section>
    </>
  );
}

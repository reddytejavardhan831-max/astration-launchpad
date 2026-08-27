import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  GraduationCap,
  Users,
  Presentation,
  FlaskConical,
  LineChart,
} from "lucide-react";
import { PageHero, RegisterButton } from "@/components/site/PageHero";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Internships, Training, FDPs & Workshops" },
      {
        name: "description",
        content:
          "Internships, professional training, Faculty Development Programs, workshops, research support and business consulting in AI and analytics.",
      },
      { property: "og:title", content: "Programs — AstraVizion AI Solutions" },
      {
        property: "og:description",
        content: "Industry-focused AI, Power BI and analytics programs for every learner.",
      },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    icon: Briefcase,
    title: "Internships",
    text: "Industry-focused, project-based internships with mentor guidance.",
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    text: "AI, Machine Learning, Data Analytics and Power BI, taught hands-on.",
  },
  {
    icon: Users,
    title: "Faculty Development Programs",
    text: "Upskill educators with modern AI and analytics curriculum support.",
  },
  {
    icon: Presentation,
    title: "Workshops",
    text: "Short, high-impact sessions for colleges, teams and communities.",
  },
  {
    icon: FlaskConical,
    title: "Research Support",
    text: "Guidance on research design, tools and quality publications.",
  },
  {
    icon: LineChart,
    title: "Business Consulting",
    text: "Affordable AI adoption and digital transformation for organizations.",
  },
];

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Practical programs built for real careers"
        subtitle="Choose the path that fits you — learn, apply, and get certified."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="card-soft p-7">
              <p.icon className="h-7 w-7 text-primary" aria-hidden />
              <h2 className="mt-3 text-lg font-bold text-navy">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-2xl surface-deep p-8 text-center">
          <h2 className="text-2xl font-extrabold">Start with our Free Power BI Internship</h2>
          <p className="mt-2 text-sm opacity-90">Online. Free. Certificate on completion.</p>
          <div className="mt-6">
            <div className="inline-block rounded-xl bg-white p-0.5">
              <RegisterButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

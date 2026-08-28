import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Goal } from "lucide-react";
import { PageHero, RegisterButton } from "@/components/site/PageHero";
import { GOALS, OBJECTIVES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AstraVizion AI Solutions" },
      {
        name: "description",
        content:
          "AstraVizion AI Solutions delivers AI, Power BI, Data Science and Digital Transformation training, internships, FDPs and consulting.",
      },
      { property: "og:title", content: "About AstraVizion AI Solutions" },
      {
        property: "og:description",
        content: "Our goals, objectives and mission in AI-powered education and innovation.",
      },
    ],
  }),
  component: About,
});

const points = [
  "Industry-focused internships & professional training",
  "Faculty Development Programs (FDPs) and workshops",
  "Research support and publication guidance",
  "Business consulting in AI & Digital Transformation",
  "Focus areas: AI, Power BI, Business Analytics, Data Science",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An emerging technology and innovation organization"
        subtitle="We empower students, professionals, educators and businesses through AI-driven learning and solutions."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-navy">Who We Are</h2>
            <p className="mt-4 text-muted-foreground">
              AstraVizion AI Solutions builds practical bridges between academic learning and real
              industry demand. We train, mentor and certify learners while helping organizations
              adopt AI with confidence.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our work spans Artificial Intelligence, Power BI, Business Analytics, Data Science and
              Digital Transformation — always applied, always career-first.
            </p>
            <div className="mt-6">
              <RegisterButton />
            </div>
          </div>
          <ul className="grid gap-3">
            {points.map((p) => (
              <li key={p} className="card-soft px-5 py-4 text-sm font-medium text-navy">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-soft">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Goal className="mx-auto h-10 w-10 text-primary" aria-hidden />
            <h2 className="mt-4 text-2xl font-extrabold text-navy sm:text-3xl">Our Goals</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Five clear ambitions that guide every program we design and every partnership we build.
            </p>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GOALS.map((goal, i) => (
              <li
                key={goal}
                className="card-soft flex gap-4 p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-navy">{goal}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden />
          <h2 className="mt-4 text-2xl font-extrabold text-navy sm:text-3xl">Our Objectives</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Practical targets that turn our goals into real outcomes for learners and organizations.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {OBJECTIVES.map((obj) => (
            <li key={obj} className="flex items-start gap-3 card-soft px-5 py-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span className="text-sm font-medium text-navy">{obj}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

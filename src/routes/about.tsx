import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target } from "lucide-react";
import { PageHero, RegisterButton } from "@/components/site/PageHero";
import { SITE } from "@/lib/site";

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
        content: "Our story, vision and mission in AI-powered education and innovation.",
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
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
          <article className="card-soft p-8">
            <Eye className="h-8 w-8 text-primary" aria-hidden />
            <h2 className="mt-3 text-xl font-bold text-navy">Vision</h2>
            <p className="mt-2 text-muted-foreground">{SITE.vision}</p>
          </article>
          <article className="card-soft p-8">
            <Target className="h-8 w-8 text-primary" aria-hidden />
            <h2 className="mt-3 text-xl font-bold text-navy">Mission</h2>
            <p className="mt-2 text-muted-foreground">{SITE.mission}</p>
          </article>
        </div>
      </section>
    </>
  );
}

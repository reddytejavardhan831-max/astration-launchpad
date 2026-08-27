import { createFileRoute } from "@tanstack/react-router";
import { Check, Eye, Target } from "lucide-react";
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
        content: "Our story, vision, mission, goals and objectives in AI-powered education and innovation.",
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

const goals = [
  "Become a trusted provider of AI, Data Analytics, Digital Transformation and technology-driven solutions.",
  "Bridge academia and industry through practical training, internships, workshops and certifications.",
  "Empower students, graduates, professionals and organizations with future-ready digital skills.",
  "Develop innovative and affordable AI-powered solutions for organizations and startups.",
  "Build a strong ecosystem connecting education, technology, research and industry.",
];

const objectives = [
  "Deliver quality training in AI, Machine Learning, Data Analytics and Power BI.",
  "Run internships, FDPs and workshops for students, graduates and educators.",
  "Boost employability through project-based, hands-on learning.",
  "Support organizations in adopting AI and digital transformation.",
  "Provide research support, publication guidance and consultancy.",
  "Encourage entrepreneurship and innovation skills.",
  "Build collaborations with colleges, industry and communities.",
  "Create affordable digital products and AI-powered solutions.",
  "Promote ethical, responsible and inclusive use of AI.",
  "Stay continuously updated with emerging industry trends.",
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

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-extrabold text-navy">Our Goals</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Five goals that guide every program, partnership and product we build.
        </p>
        <ol className="mt-8 grid gap-5">
          {goals.map((goal, i) => (
            <li key={goal} className="card-soft flex gap-5 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl surface-deep font-display text-lg font-extrabold">
                {i + 1}
              </span>
              <p className="min-w-0 self-center text-base font-medium text-navy">{goal}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="surface-soft">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-extrabold text-navy">Our Objectives</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Concise commitments that turn learning into opportunity.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {objectives.map((o) => (
              <li key={o} className="card-soft flex items-start gap-3 p-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary">
                  <Check className="h-4 w-4 text-primary" aria-hidden />
                </span>
                <span className="min-w-0 text-sm font-medium text-navy">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

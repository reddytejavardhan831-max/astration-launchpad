import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/goals")({
  head: () => ({
    meta: [
      { title: "Goals — AstraVizion AI Solutions" },
      {
        name: "description",
        content:
          "Our five goals: trusted AI solutions, industry-ready skills, future-ready learners, affordable innovation and a strong ecosystem.",
      },
      { property: "og:title", content: "Our Goals — AstraVizion AI Solutions" },
      {
        property: "og:description",
        content: "Five goals driving AI education, research and industry impact.",
      },
    ],
  }),
  component: Goals,
});

const goals = [
  "Become a trusted provider of AI, Data Analytics, Digital Transformation and technology-driven solutions.",
  "Bridge academia and industry through practical training, internships, workshops and certifications.",
  "Empower students, graduates, professionals and organizations with future-ready digital skills.",
  "Develop innovative and affordable AI-powered solutions for organizations and startups.",
  "Build a strong ecosystem connecting education, technology, research and industry.",
];

function Goals() {
  return (
    <>
      <PageHero
        eyebrow="Goals"
        title="Five goals that guide everything we do"
        subtitle="Clear direction. Measurable impact. Career-first outcomes."
      />

      <section className="mx-auto max-w-5xl px-4 py-16">
        <ol className="grid gap-5">
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
    </>
  );
}

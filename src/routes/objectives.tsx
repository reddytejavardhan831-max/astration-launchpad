import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/objectives")({
  head: () => ({
    meta: [
      { title: "Objectives — AstraVizion AI Solutions" },
      {
        name: "description",
        content:
          "Training in AI, ML, Data Analytics and Power BI, internships, FDPs, workshops, research, consultancy, ethical AI and industry collaboration.",
      },
      { property: "og:title", content: "Our Objectives — AstraVizion AI Solutions" },
      {
        property: "og:description",
        content: "What we focus on to deliver future-ready skills and AI adoption.",
      },
    ],
  }),
  component: Objectives,
});

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

function Objectives() {
  return (
    <>
      <PageHero
        eyebrow="Objectives"
        title="What we focus on, every single day"
        subtitle="Concise commitments that turn learning into opportunity."
      />

      <section className="mx-auto max-w-5xl px-4 py-16">
        <ul className="grid gap-4 sm:grid-cols-2">
          {objectives.map((o) => (
            <li key={o} className="card-soft flex items-start gap-3 p-5">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary">
                <Check className="h-4 w-4 text-primary" aria-hidden />
              </span>
              <span className="min-w-0 text-sm font-medium text-navy">{o}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

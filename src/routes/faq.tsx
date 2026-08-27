import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { PageHero, RegisterButton } from "@/components/site/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — AstraVizion AI Solutions" },
      {
        name: "description",
        content:
          "Frequently asked questions about AstraVizion AI internships, training, certifications and registration.",
      },
      { property: "og:title", content: "FAQ — AstraVizion AI Solutions" },
      {
        property: "og:description",
        content: "Answers about our free Power BI internship, programs, certificates and more.",
      },
    ],
  }),
  component: FAQ,
});

const faqs = [
  {
    question: "Who can join AstraVizion AI programs?",
    answer:
      "Our programs are open to students, graduates, working professionals, educators and anyone eager to build future-ready skills in AI, Data Analytics, Power BI and Digital Transformation.",
  },
  {
    question: "Is the Power BI internship really free?",
    answer:
      "Yes. The Virtual Free Internship on Power BI is completely free. You get hands-on projects, real datasets and a certificate on completion.",
  },
  {
    question: "How do I register?",
    answer:
      "Click the Register Now button on our website and fill out the Google Form. You will receive further instructions via email.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Participants who complete the internship or certification course receive an industry-recognised certificate from AstraVizion AI Solutions.",
  },
  {
    question: "What is the mode of delivery?",
    answer:
      "All programs are 100% online with live sessions, recorded materials, hands-on assignments and mentor support.",
  },
  {
    question: "What are the upcoming programs?",
    answer:
      "Interview Skills starts September 15, 2026 and Certification Course on Tally ERP 9 starts October 1, 2026.",
  },
  {
    question: "Do you offer training for colleges and faculty?",
    answer:
      "Yes. We run Faculty Development Programs (FDPs), workshops and customised training for educational institutions and corporate teams.",
  },
  {
    question: "How can organisations collaborate with you?",
    answer:
      "Organisations can partner with us for consulting, AI adoption, digital transformation projects, research support and customised employee training.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="card-soft overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-bold text-navy">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Quick answers about our internships, training, certificates and collaboration opportunities."
      />

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-12 rounded-2xl surface-deep p-8 text-center">
          <h2 className="text-xl font-bold">Still have questions?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm opacity-90">
            Reach out to us at{" "}
            <a href={`mailto:${SITE.email}`} className="underline">
              {SITE.email}
            </a>{" "}
            or register for our free Power BI internship today.
          </p>
          <div className="mt-6 inline-block rounded-xl bg-white p-0.5">
            <RegisterButton />
          </div>
        </div>
      </section>
    </>
  );
}

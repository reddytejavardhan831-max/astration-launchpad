import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { useState } from "react";
import { PageHero, RegisterButton } from "@/components/site/PageHero";
import { SocialLinks } from "@/components/site/SocialLinks";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AstraVizion AI Solutions" },
      {
        name: "description",
        content:
          "Reach AstraVizion AI Solutions at astravizionaisolutions@gmail.com, follow us on Instagram and LinkedIn, or register for the free Power BI internship.",
      },
      { property: "og:title", content: "Contact AstraVizion AI Solutions" },
      { property: "og:description", content: "Email, social links and registration in one place." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk — students, colleges and companies welcome"
        subtitle="Questions about programs, collaborations or consulting? We reply fast."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold text-navy">Get in touch</h2>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-5 inline-flex items-center gap-2 break-all text-base font-semibold text-primary hover:underline"
          >
            <Mail className="h-5 w-5 shrink-0" aria-hidden />
            {SITE.email}
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            Ready to join the Virtual Free Internship on Power BI?
          </p>
          <div className="mt-3">
            <RegisterButton />
          </div>

          <h3 className="mt-10 text-sm font-bold text-navy">Connect With Us</h3>
          <SocialLinks className="mt-4" />
        </div>

        <form
          className="card-soft p-7"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h2 className="text-xl font-bold text-navy">Send a message</h2>
          <div className="mt-5 grid gap-4">
            <label className="grid gap-1.5 text-sm font-medium text-navy">
              Name
              <input
                required
                name="name"
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-navy">
              Email
              <input
                required
                type="email"
                name="email"
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-navy">
              Message
              <textarea
                required
                name="message"
                rows={4}
                className="rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </label>
            <button
              type="submit"
              className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
            {sent && (
              <p role="status" className="text-sm font-medium text-primary">
                Thanks! Please also email us at {SITE.email} so we can reply directly.
              </p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

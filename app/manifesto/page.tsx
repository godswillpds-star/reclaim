import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Manifesto",
  description: "The RECLAIM manifesto — a declaration about time, attention, and human potential.",
};

const principles = [
  { n: "01", t: "Time is the substrate of life.", b: "Everything you hope to do, become, or build requires time. It is the one resource that cannot be reacquired, only reallocated. We treat it accordingly." },
  { n: "02", t: "Attention is not free.", b: "The content you consume is not free — it is paid for with your attention, which is the raw material of your life. We name this trade honestly." },
  { n: "03", t: "Enjoyment is not the enemy.", b: "Pleasure, entertainment, and rest are part of a full life. The problem is not consumption — the problem is consumption that masquerades as choice." },
  { n: "04", t: "Agency is reclaimable.", b: "The systems fighting for your attention are sophisticated. So is the human capacity to redirect it. You can learn, train, and design for agency." },
  { n: "05", t: "Small investments compound.", b: "Thirty minutes a day toward something you care about produces outcomes that no amount of scrolling ever will. We build for the compounding curve." },
  { n: "06", t: "Technology should return attention.", b: "We build a technology whose success is measured by what you do when you are not using it. That is the opposite of how modern products are designed." },
  { n: "07", t: "This is a movement, not a product.", b: "RECLAIM is not an app with a philosophy. It is a philosophy that will express itself as an app, a body of writing, and a global community." },
];

export default function Manifesto() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-ash mb-6">The manifesto</p>
        <h1 className="font-serif text-5xl md:text-7xl tracking-tightest leading-[0.95]">
          The time of your life belongs to you.
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-14 prose-reclaim">
          <p>
            There has never been a moment in human history with more access to
            information, entertainment, and content. There has also never been a
            moment where it was easier to lose whole years of your life to a
            screen you did not intend to pick up.
          </p>
          <p>
            This is not a moral failure of individuals. It is a design outcome
            of an industry. Thousands of brilliant people are paid extraordinary
            sums to capture and hold your attention. They study your psychology,
            your impulses, your vulnerabilities. They are good at it.
          </p>
          <p>
            But you are also capable. You have ambitions that do not appear on a
            feed. You have a body that needs movement, relationships that need
            presence, projects that need focus, potential that has not been
            exercised. Those things require time — and time is the one resource
            that is being taken from you, hour by hour, without your conscious
            consent.
          </p>
          <p className="font-serif italic text-2xl text-ink">
            RECLAIM is the decision to take it back.
          </p>
          <p>
            Not by rejecting technology — but by choosing it. Not by refusing
            pleasure — but by remembering that pleasure is one part of a life,
            not the whole of it. Not by blaming yourself — but by acknowledging
            the asymmetry and choosing a different path anyway.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-ash mb-6">Principles</p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tightest mb-16">
            Seven commitments.
          </h2>
          <div className="space-y-12">
            {principles.map((p) => (
              <div key={p.n} className="grid md:grid-cols-[80px_1fr] gap-6 border-t border-ink/10 pt-8">
                <p className="font-serif text-ember text-xl">{p.n}</p>
                <div>
                  <h3 className="font-serif text-2xl mb-3">{p.t}</h3>
                  <p className="text-ash leading-relaxed">{p.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-24 border-t border-ink/10 pt-14">
          <p className="text-xs uppercase tracking-widest text-ash mb-4">Take the first step</p>
          <p className="font-serif text-2xl md:text-3xl mb-6 max-w-lg">
            If you believe this, you are already part of it.
          </p>
          <WaitlistForm />
        </div>
      </Reveal>
    </div>
  );
}
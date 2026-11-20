import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "What RECLAIM is, what we are building, and why.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-ash mb-6">About</p>
        <h1 className="font-serif text-5xl md:text-7xl tracking-tightest leading-[0.95]">
          A human-development initiative.
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-14 prose-reclaim">
          <p>
            RECLAIM is a human-development technology initiative and global
            movement focused on helping people reclaim their time, take control
            of their attention, and invest in their personal potential.
          </p>
          <p>
            We exist because a generation is being asked to trade its life —
            hour by hour, scroll by scroll — for content it did not ask for and
            does not need. Not because individuals are weak, but because the
            systems designed to capture attention are extraordinarily strong.
          </p>
          <p>
            We are building three things, in sequence:
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {[
            {
              k: "The movement",
              v: "A community of people who believe that time, attention, and potential are not just personal assets — they are the foundation of a meaningful life. The movement speaks first through writing and philosophy.",
            },
            {
              k: "The technology",
              v: "An application designed to return attention, not capture it. A tool whose success is measured not by time-in-app but by what you do when you are not in it. This is the opposite of how modern products are designed.",
            },
            {
              k: "The world",
              v: "A slowly shifting norm in how humanity relates to technology. We do not believe this changes through individual discipline alone. It changes through better tools, better defaults, and better philosophy — and we are committed to all three.",
            },
          ].map((item) => (
            <div key={item.k} className="border-t border-ink/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-ash mb-3">{item.k}</p>
              <p className="text-lg leading-relaxed text-ink/80 max-w-prose">{item.v}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-24 border-t border-ink/10 pt-12 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-ash mb-3">What we are</p>
            <p className="text-lg leading-relaxed">
              A manifesto. A library of essays. A movement. And, soon, an
              application.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-ash mb-3">What we are not</p>
            <p className="text-lg leading-relaxed">
              Anti-technology. Moralistic. A productivity cult. A feed dressed
              in minimalist branding.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-20 bg-ink text-paper rounded-2xl p-10 md:p-14">
          <p className="text-xs uppercase tracking-widest text-paper/40 mb-4">Our promise</p>
          <p className="font-serif text-3xl md:text-5xl tracking-tightest leading-[1.05]">
            Your life.
            <br />
            Your time.
            <br />
            <span className="text-ember italic">Your potential.</span>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
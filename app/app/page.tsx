import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "The App",
  description: "The RECLAIM application — a product designed to return your attention, not capture it.",
};

export default function AppPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-ash mb-6">Coming soon</p>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tightest leading-[0.95]">
            A tool that gives you back time.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-10 max-w-prose text-lg md:text-xl text-ash leading-relaxed">
            The RECLAIM application is being built with a single design
            constraint: its success must be measured by what you do when you are
            not using it.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-ink/10">
        <div className="max-w-4xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-2">
          {[
            { t: "Intent over engagement", b: "You open it with a purpose and it helps you close it. There is no infinite feed. There is no algorithm optimizing for retention." },
            { t: "Attention as a resource", b: "A clear, honest picture of where your time goes — and what it could become if redirected toward your own ambition." },
            { t: "Built for compounding", b: "Small daily investments, tracked and honored. The app makes the invisible curve of personal growth visible." },
            { t: "No dark patterns", b: "No streaks engineered to create guilt. No notifications designed to hook. No mechanics that take more than they give." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 80}>
              <div className="border-t border-ink/10 pt-6">
                <h2 className="font-serif text-2xl mb-3">{f.t}</h2>
                <p className="text-ash leading-relaxed">{f.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-paper/40 mb-8">
              Early access
            </p>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tightest leading-[1.05] max-w-2xl mx-auto">
              Be first when it launches.
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-paper/60 text-lg">
              Join the movement and we will let you know the moment RECLAIM is
              ready.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-md [&_input]:text-paper [&_input]:border-paper/20 [&_input]:focus:border-ember [&_input]:placeholder:text-paper/30 [&_button]:bg-ember [&_button]:text-ink [&_button:hover]:bg-paper [&_p]:text-paper/40">
                <WaitlistForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
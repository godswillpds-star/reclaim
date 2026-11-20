import Link from "next/link";
import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export default async function Home() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-ash mb-8">
            A human-development initiative
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-serif text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-tightest max-w-4xl">
            Take back your time.
            <br />
            Take charge of your{" "}
            <span className="italic text-ember">life.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 max-w-prose text-lg md:text-xl text-ink/80 leading-relaxed">
            We live in a world with more content, entertainment, and information
            than ever before. And yet, many of us struggle to make time for the
            things that actually matter — our ambitions, our health, our
            relationships, our potential.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="#join"
              className="bg-ink text-paper px-8 py-4 rounded-full text-sm font-medium hover:bg-ember hover:text-ink transition-colors duration-300"
            >
              Join the movement
            </Link>
            <Link
              href="/manifesto"
              className="px-8 py-4 rounded-full text-sm font-medium border border-ink/20 hover:border-ink transition-colors"
            >
              Read the manifesto →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* THE PROBLEM */}
      <section className="border-y border-ink/10 bg-bone/40">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-ash mb-6">
              The observation
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tightest max-w-3xl">
              Nothing is wrong with enjoying technology. But something is wrong
              when we no longer <em className="text-ember">choose</em> how we spend
              our attention.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16 mt-16">
            {[
              {
                n: "01",
                title: "Time is finite.",
                body: "Every hour consumed is an hour not invested. Not every hour must be productive — but every hour should be chosen.",
              },
              {
                n: "02",
                title: "Attention is the currency.",
                body: "Thousands of teams are paid to capture yours. That asymmetry is not your fault. But reclaiming it is your responsibility.",
              },
              {
                n: "03",
                title: "Potential compounds.",
                body: "Small, deliberate investments in yourself — daily — create outcomes that no amount of consumption ever will.",
              },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 100}>
                <div>
                  <p className="font-serif text-ember text-2xl mb-3">{item.n}</p>
                  <h3 className="font-serif text-xl md:text-2xl mb-3">{item.title}</h3>
                  <p className="text-ash leading-relaxed text-sm md:text-base">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROMISE */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-ash mb-6">
              The promise
            </p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tightest">
              Your life.
              <br />
              Your time.
              <br />
              <span className="text-ember italic">Your potential.</span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-6 text-lg text-ink/80 leading-relaxed">
              <p>
                RECLAIM is not anti-technology. It is pro-intention. We exist to
                help people build a different relationship with their time,
                their attention, and the tools that surround them.
              </p>
              <p>
                We are building a movement, an editorial voice, and a
                technology — an application designed not to capture your
                attention, but to return it to you.
              </p>
              <p className="font-serif italic text-ink">
                We are building the opposite of a feed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARTICLES PREVIEW */}
      <section className="border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-ash mb-4">
                  Writing
                </p>
                <h2 className="font-serif text-3xl md:text-5xl tracking-tightest">
                  Signals, not noise.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/articles"
                className="text-sm font-medium border-b border-ink/20 pb-1 hover:border-ember hover:text-ember transition-colors"
              >
                All articles →
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 100}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section
        id="join"
        className="border-t border-ink/10 bg-ink text-paper"
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-40 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-paper/40 mb-8">
              Join the movement
            </p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tightest max-w-3xl mx-auto">
              The app is coming. The movement starts now.
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-paper/60 text-lg leading-relaxed">
              Be the first to know when RECLAIM launches. Get essays on
              attention, time, and potential — no noise, no spam.
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
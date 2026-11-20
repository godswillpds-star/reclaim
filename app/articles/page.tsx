import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Essays on attention, time, technology, and human potential — from the RECLAIM editorial desk.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-ash mb-6">Writing</p>
        <h1 className="font-serif text-5xl md:text-7xl tracking-tightest leading-[0.95] max-w-3xl">
          Signals, not noise.
        </h1>
        <p className="mt-8 max-w-prose text-lg text-ash leading-relaxed">
          Essays on attention, time, technology, and human potential. Written
          for people who suspect there is more to life than the feed.
        </p>
      </Reveal>

      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 3) * 80}>
            <ArticleCard article={a} />
          </Reveal>
        ))}
      </div>

      {articles.length === 0 && (
        <p className="mt-20 text-ash">No articles yet. Check back soon.</p>
      )}
    </div>
  );
}
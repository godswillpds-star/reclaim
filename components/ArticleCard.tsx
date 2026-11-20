import Link from "next/link";
import type { Article } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  const dateStr = article.date
    ? new Date(article.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="h-full flex flex-col border-t border-ink/10 pt-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-ash mb-4">
          <span>{article.category}</span>
          <span aria-hidden>·</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="font-serif text-2xl leading-snug tracking-tight mb-3 group-hover:text-ember transition-colors">
          {article.title}
        </h3>
        <p className="text-ash text-sm leading-relaxed flex-1">{article.excerpt}</p>
        <p className="mt-6 text-xs text-ash">{dateStr}</p>
      </article>
    </Link>
  );
}

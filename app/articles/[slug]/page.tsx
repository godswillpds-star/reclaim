import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getArticle, getAllArticles } from "@/lib/articles";
import WaitlistForm from "@/components/WaitlistForm";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const dateStr = article.date
    ? new Date(article.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article className="max-w-3xl mx-auto px-6 py-20 md:py-28">
      <Reveal>
        <Link
          href="/articles"
          className="text-xs uppercase tracking-widest text-ash hover:text-ember transition-colors"
        >
          ← All articles
        </Link>

        <header className="mt-10">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-ash mb-6">
            <span>{article.category}</span>
            <span aria-hidden>·</span>
            <span>{article.readTime}</span>
            {dateStr && (
              <>
                <span aria-hidden>·</span>
                <span>{dateStr}</span>
              </>
            )}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tightest leading-[1.02]">
            {article.title}
          </h1>
          <p className="mt-6 text-xl text-ash leading-relaxed">{article.excerpt}</p>
        </header>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-14 prose-reclaim">
          <MDXRemote
            source={article.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-20 pt-12 border-t border-ink/10">
          <p className="text-xs uppercase tracking-widest text-ash mb-4">
            Join the movement
          </p>
          <p className="font-serif text-2xl md:text-3xl mb-6 max-w-lg">
            If this resonated, you're one of us. Get the next essay before
            anyone else.
          </p>
          <WaitlistForm />
        </div>
      </Reveal>
    </article>
  );
}
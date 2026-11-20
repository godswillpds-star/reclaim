import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl tracking-tightest mb-3">
            RECLAIM<span className="text-ember">.</span>
          </p>
          <p className="text-ash text-sm max-w-xs leading-relaxed">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ash mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/manifesto" className="hover:text-ember transition-colors">Manifesto</Link></li>
            <li><Link href="/articles" className="hover:text-ember transition-colors">Articles</Link></li>
            <li><Link href="/about" className="hover:text-ember transition-colors">About</Link></li>
            <li><Link href="/app" className="hover:text-ember transition-colors">The App</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ash mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li><a href={`mailto:${site.email}`} className="hover:text-ember transition-colors">{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-ash">
          <span>© {new Date().getFullYear()} RECLAIM. All rights reserved.</span>
          <span className="font-serif italic">Your life. Your time. Your potential.</span>
        </div>
      </div>
    </footer>
  );
}
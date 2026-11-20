"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="font-serif text-xl tracking-tightest font-semibold">
          RECLAIM<span className="text-ember">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors hover:text-ink ${
                pathname === l.href ? "text-ink font-medium" : "text-ash"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#join"
            className="bg-ink text-paper text-sm px-5 py-2 rounded-full hover:bg-ember hover:text-ink transition-colors duration-300"
          >
            Join the movement
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-ink transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-ink transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-paper px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-lg font-serif">
              {l.label}
            </Link>
          ))}
          <Link href="/#join" className="mt-2 bg-ink text-paper text-center py-3 rounded-full">
            Join the movement
          </Link>
        </div>
      )}
    </header>
  );
}
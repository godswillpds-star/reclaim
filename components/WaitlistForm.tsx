"use client";
import { useState } from "react";

export default function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="font-serif text-lg text-ember">
        You&apos;re in. We&apos;ll be in touch. Reclaim something today.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className={`w-full ${compact ? "" : "max-w-md"}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
          placeholder="your@email.com"
          aria-label="Email address"
          className="flex-1 bg-transparent border border-ink/20 rounded-full px-5 py-3 text-sm placeholder:text-ash focus:outline-none focus:border-ember transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-ink text-paper px-6 py-3 rounded-full text-sm font-medium hover:bg-ember hover:text-ink transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join the movement"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-600 mt-2 ml-2">
          Please enter a valid email address.
        </p>
      )}
      <p className="text-xs text-ash mt-3 ml-2">
        No spam. Only signal. Unsubscribe anytime.
      </p>
    </form>
  );
}

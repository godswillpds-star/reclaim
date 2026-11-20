import { NextResponse } from "next/server";

// Simple in-memory + log-based capture for launch phase.
// Swap for Resend / ConvertKit / Loops later — interface stays identical.
export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (typeof email !== "string" || !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    console.log("[reclaim:subscribe]", new Date().toISOString(), email);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
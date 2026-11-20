import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE_NAME ?? "Waitlist";

  console.log("SUBSCRIBE HIT", {
    hasToken: !!AIRTABLE_TOKEN,
    hasBase: !!AIRTABLE_BASE,
    table: AIRTABLE_TABLE,
  });

  try {
    const { email } = await req.json();
    if (typeof email !== "string" || !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      console.warn("SUBSCRIBE: invalid email", email);
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE) {
      console.error("SUBSCRIBE: missing env vars", {
        AIRTABLE_TOKEN: AIRTABLE_TOKEN ? "set" : "MISSING",
        AIRTABLE_BASE_ID: AIRTABLE_BASE ? "set" : "MISSING",
      });
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${encodeURIComponent(AIRTABLE_TABLE)}`;
    console.log("SUBSCRIBE: posting to Airtable", url);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: { Email: email } }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("SUBSCRIBE: Airtable rejected", {
        status: res.status,
        statusText: res.statusText,
        body,
      });
      return NextResponse.json(
        { error: "Airtable rejected", status: res.status, body },
        { status: 500 }
      );
    }

    const data = await res.json();
    console.log("SUBSCRIBE: success", data.id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SUBSCRIBE: exception", err);
    return NextResponse.json(
      { error: "Subscribe failed", detail: String(err) },
      { status: 500 }
    );
  }
}
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Explicitly extract fields to avoid missing phone
    const payload = {
      name: body.name,
      email: body.email,
      phone: body.phone,   // ✅ make sure this is here
      message: body.message,
    };

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbx-cfbnJMdHpBmg_3M6JMV6Gbtn80p5T0nnJSnu1jTg1JFR-h145E7RR3nZZCdXMEOS/exec";

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ result: "error", message: err.message }, { status: 500 });
  }
}

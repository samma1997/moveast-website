import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.log("[contact] submission", {
      ...payload,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { ok: true, delivery: "logged" },
      { status: 501 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 }
    );
  }
}

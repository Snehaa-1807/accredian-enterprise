import { NextRequest, NextResponse } from "next/server";

const enquiries: Record<string, unknown>[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }
    const entry = { id: `enq_${Date.now()}`, name, email, company: company ?? "", message: message ?? "", createdAt: new Date().toISOString() };
    enquiries.push(entry);
    console.log("[Accredian] New enquiry:", entry);
    return NextResponse.json({ success: true, data: entry }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ count: enquiries.length, enquiries });
}

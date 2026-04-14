import { NextResponse } from "next/server";
import { z } from "zod";
import { projectSchema } from "@/lib/schemas/project";

export async function GET() {
  return NextResponse.json({ ok: true, data: [] });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = projectSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: z.treeifyError(parsed.error) }, { status: 400 });
  }
  return NextResponse.json({ ok: true, data: parsed.data }, { status: 201 });
}

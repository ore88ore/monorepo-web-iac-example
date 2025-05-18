import { NextResponse } from "next/server";
import { generateUuid } from "shared";

export async function GET() {
  const uuid = generateUuid();
  return NextResponse.json({ uuid });
}

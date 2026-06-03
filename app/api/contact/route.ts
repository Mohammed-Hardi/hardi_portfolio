import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Use the contact links on the portfolio page to get in touch.",
  });
}

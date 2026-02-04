import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

/**
 * Serves the standalone HTML file at /cinnda.
 * Edit public/cinnda.html to change the content.
 * The main app runs normally; only this URL returns plain HTML.
 */
export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "cinnda.html");
    const html = readFileSync(filePath, "utf-8");
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}

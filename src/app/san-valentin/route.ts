import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

/**
 * Serves the Valentine page at /san-valentin.
 * Edit public/san-valentin.html to change the content.
 */
export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "san-valentin.html");
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

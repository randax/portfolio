import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const secret = body?.secret;
  const tag = body?.tag;

  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, error: "REVALIDATE_SECRET is not configured" },
      { status: 500 },
    );
  }

  if (typeof secret !== "string" || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: "Invalid secret" }, { status: 401 });
  }

  if (typeof tag !== "string" || !tag.trim()) {
    return NextResponse.json({ ok: false, error: "Missing tag" }, { status: 400 });
  }

  try {
    await revalidateTag(tag, "default");
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Failed to revalidate tag",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, revalidated: tag });
}

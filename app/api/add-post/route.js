import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const res = await request.json();
    const { title, content } = res;
    const result = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        author: {
          create: {
            name: "Dravish",
          },
        },
      },
    });

    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid JSON data" }, { status: 400 });
  }
}
export async function GET() {
  return NextResponse.json(
    { message: "GET method is not allowed" },
    { status: 405 }
  );
}

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: any;
      slug: string;
    };
  }
) {
  try {
    const data = params;
    const post = await prisma.schedule.findFirst({
      where: { id: data.id },
      include: {
        route: true,
        bus: true,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}

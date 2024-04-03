import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const location = searchParams.get("location");

    // if (location !== "string") {
    //   throw new Error("failed to request data");
    // }

    const post = await prisma.schedule.findMany({
      where: {
        route: {
          some: {
            location: { contains: "", mode: "insensitive" },
          },
        },
      },
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

  //   return NextResponse.json({ message: "hey" }, { status: 200 });
}

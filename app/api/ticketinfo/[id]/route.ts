import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: any;
    };
  }
) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const seatId = searchParams ? searchParams.get("sIds") : null;
    const selectedSeatId = seatId?.split(", ");
    console.log(selectedSeatId);
    const data = params;
    const post = await prisma.schedule.findMany({
      where: {
        id: data.id,
        ticket: {
          some: {
            id: {
              in: selectedSeatId,
            },
          },
        },
      },
      include: {
        route: true,
        bus: true,
        ticket: {
          where: {
            id: {
              in: selectedSeatId,
            },
          },
        },
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not get post" },
      { status: 500 }
    );
  }
}

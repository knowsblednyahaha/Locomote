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
    const seatNumber = searchParams ? searchParams.get("sIds") : null;
    const selectedSeats = seatNumber?.split(",").map((i) => Number(i));
    const data = params;
    // const post = await prisma.schedule.findMany({
    //   where: {
    //     id: data.id,
    //     ticket: {
    //       some: {
    //         seatNumber: {
    //           in: selectedSeats,
    //         },
    //       },
    //     },
    //   },
    //   include: {
    //     route: true,
    //     bus: true,
    //     ticket: {
    //       where: {
    //         seatNumber: { in: selectedSeats },
    //       },
    //     },
    //   },
    // });

    return NextResponse.json(selectedSeats, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}

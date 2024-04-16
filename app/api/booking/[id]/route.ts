import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient().$extends(withAccelerate());

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
        ticket: true,
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

export async function POST(
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
    const body = await req.json();
    const { selectedSeats, passengerNames } = body;
    // Create tickets in the database
    const tickets = await prisma.ticket.createMany({
      data: passengerNames.map((fullname: string, index: number) => ({
        fullname,
        seatNumber: selectedSeats[index],
        schedId: params.id,
      })),
    });
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}

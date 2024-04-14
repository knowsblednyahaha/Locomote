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

interface BookingRequestData {
  selectedSeats: number[];
  passengerNames: string[];
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
  const bodyData = req.body as unknown as BookingRequestData;
  const { selectedSeats, passengerNames } = bodyData;
  try {
    const post = await prisma.ticket.createMany({
      data: [
        {
          seatNumber: selectedSeats[0],
          fullname: passengerNames[0],
          schedId: params.id,
        },
      ],
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}

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
    const seatNumber = searchParams ? searchParams.get("seatNumber") : null;
    const selectedSeats = seatNumber?.split(",").map((i) => Number(i));
    const data = params;
    const post = await prisma.schedule.findMany({
      where: {
        id: data.id,
        ticket: {
          some: {
            seatNumber: {
              in: selectedSeats,
            },
          },
        },
      },
      include: {
        route: true,
        bus: true,
        ticket: {
          where: {
            seatNumber: { in: selectedSeats },
          },
        },
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
export async function PATCH(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: any;
    };
  }
) {
  const body = await req.json();
  const { selectedSeats } = body;
  const seatNumber = selectedSeats?.split(",").map((i: any) => Number(i));
  try {
    const updatedTickets = await prisma.ticket.updateMany({
      where: {
        seatNumber: {
          in: seatNumber,
        },
        schedId: params.id, // Assuming you have params defined elsewhere
      },
      data: {
        isPaid: true,
      },
    });
    return NextResponse.json({ updatedTickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}

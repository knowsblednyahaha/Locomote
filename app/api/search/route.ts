import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
  try {
    const post = await prisma.schedule.findMany({
      //   where: {
      //     route: {
      //       some: {
      //         location: { contains: "", mode: "insensitive" },
      //       },
      //     },
      //   },
      include: {
        route: true,
        bus: true,
      },
    });
    const searchParams = req.nextUrl.searchParams;
    const location = searchParams ? searchParams.get("location") : null;
    const destination = searchParams ? searchParams.get("destination") : null;
    // if (location !== "string") {
    //   throw new Error("failed to request data");
    // }

    const filteredQuery =
      location && destination
        ? post.filter(
            (data) =>
              data.route[0].location.includes(location) &&
              data.route[0].destination.includes(destination)
          )
        : post;
    return NextResponse.json(filteredQuery, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }

  //   return NextResponse.json({ message: "hey" }, { status: 200 });
}

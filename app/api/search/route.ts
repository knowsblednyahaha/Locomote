import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const location = searchParams ? searchParams.get("location") : null;
  const destination = searchParams ? searchParams.get("destination") : null;

  const locationValue = location !== null ? location : "";
  const destinationValue = destination !== null ? destination : "";

  const busCompany = searchParams ? searchParams.get("busCompany") : null;

  const arrayValues: string | any[] = [busCompany];

  try {
    if (arrayValues.length === 1) {
      const post = await prisma.schedule.findMany({
        where: {
          route: {
            some: {
              location: { contains: `${locationValue}`, mode: "insensitive" },
              destination: {
                contains: `${destinationValue}`,
                mode: "insensitive",
              },
            },
          },
        },
        include: {
          route: true,
          bus: true,
        },
      });

      return NextResponse.json(post, { status: 200 });
    } else {
      const post = await prisma.schedule.findMany({
        where: {
          route: {
            some: {
              location: { contains: `${locationValue}`, mode: "insensitive" },
              destination: {
                contains: `${destinationValue}`,
                mode: "insensitive",
              },
            },
          },
          bus: {
            some: {
              busCompany: {
                in: arrayValues,
              },
            },
          },
        },
        include: {
          route: true,
          bus: true,
        },
      });

      return NextResponse.json(post, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 }
    );
  }
}

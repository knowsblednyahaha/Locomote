import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const location = searchParams ? searchParams.get("location") : null;
  const destination = searchParams ? searchParams.get("destination") : null;

  const locationValue = location !== null ? location : "";
  const destinationValue = destination !== null ? destination : "";

  const busCompany = searchParams ? searchParams.get("busCompany") : null;

  let busCompanies: string[] = [];

  if (busCompany) {
    // Split the comma-separated string into an array
    busCompanies = busCompany.split(",");
  } else {
    // If busCompanyParam is null or undefined, use default values
    busCompanies = [
      "JoyBus",
      "Partas",
      "Victory Liner",
      "Genesis",
      "Solid North",
    ];
  }

  const busType = searchParams ? searchParams.get("busType") : null;

  let busTypes: string[] = [];

  if (busType) {
    // Split the comma-separated string into an array
    busTypes = busType.split(",");
  } else {
    // If busCompanyParam is null or undefined, use default values
    busTypes = ["Deluxe", "Super Deluxe", "First Class Express", "Luxury Bus"];
  }

  try {
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
              in: busCompanies,
            },
            type: {
              in: busTypes,
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
  } catch (error) {
    return NextResponse.json(
      { message: "could not show post" },
      { status: 500 }
    );
  }
}

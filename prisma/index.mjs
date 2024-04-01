import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // await prisma.user.create({
  //   data: {
  //     username: "user1",
  //     email: "daniel@gmail.com",
  //     password: "poli980",
  //     name: "Daniel",
  //     Booking: {},
  //   },
  // });

  // await prisma.booking.create({
  //   data: {
  //     bookingDate: new Date("2024-01-04T00:00:00.000Z"),
  //     isPaid: false,
  //     seatNumber: [],
  //     passengerName: [],
  //     user: {
  //       connect: {
  //         id: "660ad13743655e597043c7fe",
  //       },
  //     },
  //     schedule: {},
  //   },
  // });

  // await prisma.schedule.create({
  //   data: {
  //     departureTime: new Date("2024-01-04T05:00:00.000Z"),
  //     arrivalTime: new Date("2024-01-04T10:00:00.000Z"),
  //     bus: {},
  //     route: {},
  //     booking: {
  //       connect: {
  //         id: "660ad20301d590103767ca13",
  //       },
  //     },
  //   },
  // });

  const allUsers = await prisma.booking.findMany({
    include: {
      schedule: true,
      user: true,
    },
  });
  console.log(allUsers);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

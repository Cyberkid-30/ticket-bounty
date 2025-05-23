import { hash } from "@node-rs/argon2";
import prisma from "../lib/client";

const users = [
  {
    username: "Breezy",
    email: "breezyAdams@gmail.com",
  },
  {
    username: "Jan",
    email: "janphandoh@gmail.com",
  },
];

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from the database",
    status: "DONE" as const,
    deadline: "2025-05-06",
    bounty: 150,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from the database",
    status: "OPEN" as const,
    deadline: "2025-05-06",
    bounty: 150,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from the database",
    status: "IN_PROGRESS" as const,
    deadline: "2025-05-06",
    bounty: 120,
  },
];

const seed = async () => {
  const t0 = performance.now();

  console.log("Seeding database...");

  await prisma.user.deleteMany();
  await prisma.ticket.deleteMany();

  const passwordhash = await hash("secretpassword");

  const dbUsers = await prisma.user.createManyAndReturn({
    data: users.map((user) => ({
      ...user,
      passwordhash,
    })),
  });

  await prisma.ticket.createMany({
    data: tickets.map((ticket) => ({
      ...ticket,
      userId: dbUsers[0].id,
    })),
  });

  const t1 = performance.now();
  console.log("Database seeded in " + (t1 - t0) + "ms");
};

seed();

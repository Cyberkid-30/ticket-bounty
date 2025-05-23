import prisma from "@/lib/client";

export const getTicket = async (ticketId: string) => {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
    include: {
      user: { select: { username: true } },
    },
  });

  return ticket;
};

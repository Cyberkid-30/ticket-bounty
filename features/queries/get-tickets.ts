import prisma from "@/lib/client";
import { ParsedSearchParams } from "@/utils/search-params";

const getTickets = async (
  searchParams: ParsedSearchParams,
  userId?: string
) => {
  const searchparams = await searchParams;
  const where = {
    userId,
    title: {
      contains: searchparams.search,
      mode: "insensitive" as const,
    },
  };
  const skip = searchparams.page * searchparams.size;
  const take = searchparams.size;

  const [tickets, count] = await prisma.$transaction([
    prisma.ticket.findMany({
      where,
      skip,
      take,
      orderBy: {
        [searchparams.sortKey]: searchparams.sortValue,
      },
      include: {
        user: { select: { username: true } },
      },
    }),
    prisma.ticket.count({ where }),
  ]);

  return {
    list: tickets,
    metadata: { count, hasNextPage: count > skip + take },
  };
};

export { getTickets };

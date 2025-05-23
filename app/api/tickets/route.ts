import { getTickets } from "@/features/queries/get-tickets";
import { NextRequest, NextResponse } from "next/server";

type SearchParams = Promise<{
  page: number;
  size: number;
  sortKey: string;
  sortValue: string;
  search: string;
}>;

const searchParams: SearchParams = new Promise((resolve) => {
  resolve({
    page: 0,
    size: 5,
    sortKey: "createdAt",
    sortValue: "asc",
    search: "",
  });
});

export async function GET(request: NextRequest) {
  const { list, metadata } = await getTickets(searchParams, undefined);

  return NextResponse.json({ list, metadata });
}

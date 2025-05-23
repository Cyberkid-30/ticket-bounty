import { getTicket } from "@/features/queries/get-ticket";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  const ticket = await getTicket((await params).ticketId);

  return NextResponse.json(ticket);
}

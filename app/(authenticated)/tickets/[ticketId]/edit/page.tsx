import { Breadcrumbs } from "@/components/breadcrumbs";
import { CardCompact } from "@/components/card-compact";
import { Separator } from "@/components/ui/separator";
import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import { getTicket } from "@/features/queries/get-ticket";
import TicketUpsertForm from "@/features/ticket/components/ticket-upsert-form";
import { homePath, ticketPath } from "@/paths";
import { notFound } from "next/navigation";

interface TicketEditProps {
  params: Promise<{ ticketId: string }>;
}

const TicketEditPage = async ({ params }: TicketEditProps) => {
  const { user } = await getAuth();
  const ticket = await getTicket((await params).ticketId);

  const isTicketFound = !!ticket;
  const isTicketOwner = isOwner(user, ticket);

  if (!isTicketFound || !isTicketOwner) notFound();

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Breadcrumbs
        breadcrumbs={[
          { title: "Tickets", href: homePath() },
          { title: ticket.title, href: ticketPath(ticket.id) },
          { title: "Edit" },
        ]}
      />

      <Separator />
      <div className="flex-1 flex flex-col items-center justify-center">
        <CardCompact
          title="Edit Ticket"
          description="Edit an existing ticket"
          className="w-full max-w-[420px] animate-fade-in-from-top"
          content={<TicketUpsertForm ticket={ticket} />}
        />
      </div>
    </div>
  );
};

export default TicketEditPage;

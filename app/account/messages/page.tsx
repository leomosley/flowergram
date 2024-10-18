import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { MessagesTable } from "@/components/account/messages/messages-table";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MessagesPage() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/");

  const messages = await prisma.message.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      updatedAt: "desc"
    }
  });

  return (
    <MessagesTable messages={messages} />
  );
}

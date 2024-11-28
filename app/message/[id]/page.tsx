import { Flowergram } from "@/components/message/flowergram";
import { MessageNotFound } from "@/components/message/message-not-found";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function MessagePage({ params }: { params: { id: string } }) {
  const message = await prisma.message.findFirst({
    where: {
      id: params.id
    }
  });

  return (
    <main className="flex min-h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
      <div className="text-balance -mt-24 text-center z-10">
        {message ? (
          <Flowergram message={message} />
        ) : (
          <MessageNotFound />
        )}
      </div>
    </main>
  );
}

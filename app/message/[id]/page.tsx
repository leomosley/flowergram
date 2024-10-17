import prisma from "@/lib/prisma";

export default async function MessagePage({ params }: { params: { id: string } }) {
  const message = await prisma.message.findFirst({
    where: {
      id: params.id
    }
  });


  return (
    <div>
      {JSON.stringify(message)}
    </div>
  );
}

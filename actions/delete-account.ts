import { getServerSession } from "next-auth";
import { navigate } from "./navigate";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma";

export async function deleteAccount() {
  "use server";
  const session = await getServerSession(authOptions);
  if (!session || !session.user) throw new Error("User session not found");

  const deleteResponse = await prisma.$transaction([
    prisma.message.deleteMany({
      where: {
        userId: session.user.id,
      },
    }),
    prisma.verificationToken.deleteMany({
      where: {
        userId: session.user.id,
      },
    }),
    prisma.session.deleteMany({
      where: {
        userId: session.user.id,
      },
    }),
    prisma.user.deleteMany({
      where: {
        id: session.user.id,
      },
    }),
    prisma.account.deleteMany({
      where: {
        userId: session.user.id,
      },
    }),
  ]);
  await navigate("/sign-out");
};
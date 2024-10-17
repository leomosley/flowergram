"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function createMessage(data: {
  recipient: string;
  sender: string;
  message: string;
  flower: number;
  colour: string;
}) {
  const session = await getServerSession(authOptions);

  if (!session) return { error: "unauth" };

  const createResponse = await prisma.message.create({
    data: {
      ...data,
      userId: session.user.id
    },
  });

  if (!createResponse) return { error: "database error" }
  return createResponse;
}
"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma";
import { Message } from "@prisma/client";
import { getServerSession } from "next-auth";

export async function updateMessage(data: Message) {
  const session = await getServerSession(authOptions);

  if (!session) return;

  if (session.user.id !== data.userId) return;

  const updateResponse = await prisma.message.update({
    data: {
      ...data,
    },
    where: {
      id: data.id
    }
  });

  if (!updateResponse) return;
  return updateResponse;
}
"use server";

import prisma from "@/lib/prisma";

export async function updateName(id: string, name: string) {
  try {
    if (!name) throw new Error("No name provided. Try again.");

    const updateResponse = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });

    if (!updateResponse) throw new Error("Couldn't update information. Try again.");
  } catch (error) {
    console.warn(String(error));
  }
};
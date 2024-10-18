import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { DeleteAccount } from "@/components/account/settings/delete-account";
import { EditName } from "@/components/account/settings/edit-name";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      id: session?.user.id,
    },
  });

  return (
    user && (
      <>
        <EditName user={user} />
        <DeleteAccount user={user} />
      </>
    )
  );
}

"use client";

import { updateName } from "@/actions/update-name";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export function EditName({ user }: { user: User }) {
  const [name, setName] = useState<string>(user.name);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const submit = async () => {
    setLoading(true);
    try {
      if (!name) throw new Error("Please provide a name.");

      const updateNamePromise = updateName(user.id, name);
      toast.promise(updateNamePromise, {
        loading: "Updating name...",
        success: "Name updated successfully!",
        error: "Couldn't update name.",
      })

      await updateNamePromise;

      router.refresh();

    } catch (error) {
      toast.warning(String(error))
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader className="flex relative w-full flex-col">
        <CardTitle>Name</CardTitle>
        <CardDescription>
          This is the name we&apos;ll refer to you as.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          className="lg:max-w-[60%]"
          type="text"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          disabled={!user.emailVerified || loading}
        />
      </CardContent>
      <CardFooter className="justify-between items-center border-t py-2 gap-2">
        <span className="text-xs lg:text-sm text-muted-foreground">
          Please use a maximum of 32 characters.
        </span>
        <Button
          onClick={submit}
          size="sm"
          disabled={!user.emailVerified || loading || name?.length < 3 || name?.length > 32 || user.name === name}
        >
          {loading ? <Spinner /> : "Save"}
        </Button>
      </CardFooter>
    </Card>
  );
}
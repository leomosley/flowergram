import { deleteAccount } from "@/actions/delete-account";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "@prisma/client";
import { TriangleAlert } from "lucide-react";
import React from "react";

export async function DeleteAccount({ user }: { user: User }) {
  return (
    <Card className="border-destructive/30 dark:border-destructive">
      <CardHeader className="flex relative w-full flex-col pb-2">
        <CardTitle>Delete account</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        Permanently remove your account from our platform. This will destroy all
        stored data that we have collected related to you.
      </CardContent>
      <CardFooter className="justify-between items-center gap-2 border-t border-t-destructive/30 dark:border-t-destructive py-2 bg-destructive/10 dark:bg-destructive/20 rounded-b-md">
        <span className="flex gap-1 items-center text-xs lg:text-sm text-destructive dark:text-primary/80">
          <TriangleAlert /> This action is irreversible!
        </span>
        <Dialog>
          <DialogTrigger asChild disabled={!user.emailVerified}>
            <Button
              variant="destructive"
              size="sm"
              disabled={!user.emailVerified}
            >
              Delete account
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="text-left">
              <DialogTitle>Are you sure?</DialogTitle>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              This action is irreversible. All your information will be
              destroyed and lost forever.
            </div>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <form action={deleteAccount}>
                <Button variant="destructive" type="submit">
                  Delete
                </Button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
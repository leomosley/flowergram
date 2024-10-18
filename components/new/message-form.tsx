"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ColorPicker } from "@/components/ui/color-picker";
import { FlowerPicker } from "@/components/new/flower-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { createMessage } from "@/actions/create-message";
import { messageFormSchema } from "@/lib/zod";
import { toast } from "sonner";
import { useState } from "react";
import { ExternalLink, Link } from "lucide-react";
import { ShareButton } from "@/components/shared/share-button";

export function MessageForm() {
  const [id, setId] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof messageFormSchema>>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      recipient: "",
      sender: "",
      message: "",
      flower: 0,
      colour: "#FFF"
    },
  });

  async function onSubmit(values: z.infer<typeof messageFormSchema>) {
    const parse = messageFormSchema.safeParse(values);

    if (!parse.success) {
      return toast.warning('Error with form input.');
    }

    const data = parse.data;
    const response = await createMessage(data);

    if (!response) return toast.warning('Error creating message.');

    setId(response.id);
    setOpen(true);

  }

  return (
    <>
      <Card className="w-full max-w-[425px]">
        <CardHeader>
          <CardTitle>New message</CardTitle>
          <CardDescription>Send a new message to someone.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex gap-4 justify-between">
                <FormField
                  control={form.control}
                  name="recipient"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="To" {...field} />
                      </FormControl>
                      <FormDescription>
                        Who is this message for?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sender"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="From" {...field} />
                      </FormControl>
                      <FormDescription>
                        Who is it from?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Message" {...field} />
                    </FormControl>
                    <FormDescription>
                      Add a message.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4 justify-between">
                <FormField
                  control={form.control}
                  name="flower"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FlowerPicker {...field} />
                      </FormControl>
                      <FormDescription>
                        Choose the flower.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="colour"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ColorPicker {...field} />
                      </FormControl>
                      <FormDescription>
                        Choose the flower colour.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit">Send</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share</DialogTitle>
            <DialogDescription>Share this link with the person this message is for {":)"}</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 border p-2 rounded-md">
            <code className="text-sm md:text-base">{`flowergram.vercel.app/message/${id}`}</code>
            <Button
              className="rounded-md bg-muted/50 ml-auto"
              onClick={() => {
                navigator.clipboard.writeText(`https://flowergram.vercel.app/message/${id}`);
                toast.success("Link coppied to clipboard!")
              }}
              size="icon"
              variant="outline"
            >
              <Link className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex justify-center gap-2">
            <ShareButton
              title="flowergam"
              text="open to see your message :)"
              url={`https://flowergram.vercel.app/message/${id}`}
            />
            <a
              href={`https://flowergram.vercel.app/message/${id}`}
              target="_blank"
            >
              <Button size="sm">
                open
                <ExternalLink className="ml-1 w-4 h-4" />
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

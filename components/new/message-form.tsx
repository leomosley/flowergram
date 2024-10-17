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
import { Textarea } from "../ui/textarea";
import { ColorPicker } from "../ui/color-picker";
import { FlowerPicker } from "./flower-picker";

const formSchema = z.object({
  recipient: z.string(),
  sender: z.string(),
  message: z.string(),
  flower: z.number().min(0).max(5),
  colour: z.string(),
});

export function MessageForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipient: "",
      sender: "",
      message: "",
      flower: 0,
      colour: "#FFF"
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card className="w-full max-w-[425px]">
      <CardHeader>
        <CardTitle>New message</CardTitle>
        <CardDescription>Send a new message to someone.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-6">
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
            <div className="flex justify-between">
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
                      Choose the folower colour.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

"use client";

import { updateMessage } from "@/actions/update-message";
import { flowers } from "@/components/flowers";
import { Button } from "@/components/ui/button";
import { ColorPicker } from "@/components/ui/color-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Message } from "@prisma/client";
import { Check, ExternalLink, Pencil, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

function MessageRow({
  message
}: {
  message: Message;
}) {
  const [recipientState, setRecipientState] = useState<string>(message.recipient);
  const [senderState, setSenderState] = useState<string>(message.sender);
  const [messageState, setMessageState] = useState<string>(message.message);
  const [flowerState, setFlowerState] = useState<number>(message.flower);
  const [colourState, setColourState] = useState<string>(message.colour)
  const [editing, setEditing] = useState<boolean>(false);

  const cancel = () => {
    setRecipientState(message.recipient);
    setSenderState(message.sender);
    setMessageState(message.message);
    setFlowerState(message.flower);
    setColourState(message.colour);
    setEditing(false);
  }

  const submit = async () => {
    if (editing) {
      const updatePromise = updateMessage({
        ...message,
        recipient: recipientState,
        sender: senderState,
        message: messageState,
        flower: flowerState,
        colour: colourState,
      });

      toast.promise(updatePromise, {
        loading: "Updating message...",
        error: "Error updating message.",
        success: "Message updated.",
      });

      await updatePromise;

      setEditing(false);
    } else {
      setEditing(true);
    }
  }

  return (
    <TableRow key={message.id}>
      <TableCell className="max-w-[20px]">
        <Link
          href={`/message/${message.id}`}
          className="flex items-center justify-center h-6 w-6 p-1 text-muted-foreground"
        >
          <ExternalLink className="w-full h-full" />
        </Link>
      </TableCell>
      <TableCell className="max-w-[100px]">
        <input
          className="max-w-[100px] text-ellipsis overflow-clip p-1 bg-transparent disabled:bg-transparent enabled:border enabled:rounded-sm"
          value={senderState}
          onChange={(e) => setSenderState(e.currentTarget.value)}
          disabled={!editing}
          autoFocus={editing}
        />
      </TableCell>
      <TableCell className="max-w-[100px]">
        <input
          className="max-w-[100px] text-ellipsis overflow-clip p-1 bg-transparent disabled:bg-transparent enabled:border enabled:rounded-sm"
          value={recipientState}
          onChange={(e) => setRecipientState(e.currentTarget.value)}
          disabled={!editing}
        />
      </TableCell>
      <TableCell className="max-w-[200px]">
        <input
          className="max-w-[200px] text-ellipsis overflow-clip p-1 bg-transparent disabled:bg-transparent enabled:border enabled:rounded-sm"
          value={messageState}
          onChange={(e) => setMessageState(e.currentTarget.value)}
          disabled={!editing}
        />
      </TableCell>
      <TableCell className="w-[50px]">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="text-xl"
              variant="ghost"
              size="icon"
              disabled={!editing}
            >
              {flowers[flowerState].icon}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-1 w-fit p-1">
            {flowers.map((flower) => (
              <Button
                key={flower.id}
                className={cn(
                  "justify-start",
                  flower.id === flowerState && "bg-muted"
                )}
                size="sm"
                variant="ghost"
                onClick={() => setFlowerState(flower.id)}
              >
                {flower.icon}
                <span className="ml-2">{flower.name}</span>
              </Button>
            ))}
          </PopoverContent>
        </Popover>
      </TableCell>
      <TableCell className="w-[50px]">
        <ColorPicker
          defaultValue={message.colour}
          value={colourState}
          onChange={(value) => setColourState(value)}
          disabled={!editing}
        />
      </TableCell>
      <TableCell className="w-5 justify-end">
        <div className="flex gap-1">
          <button
            className={cn(
              "p-2 cursor-pointer",
              !editing && "opacity-0 cursor-default"
            )}
            onClick={cancel}
            disabled={!editing}
          >
            <X className="w-4 h-4" />
          </button>
          <button
            className="p-2 cursor-pointer"
            onClick={submit}
          >
            {editing ? (
              <Check className="w-4 h-4" />
            ) : (
              <Pencil className="w-4 h-4" />
            )}
          </button>
        </div>
      </TableCell>
    </TableRow >
  );
}

export function MessagesTable({
  messages
}: {
  messages: Message[];
}) {
  return (
    <div className="rounded-md border shadow-sm">
      <Table className="p-4">
        <TableHeader>
          <TableRow>
            <TableHead>Open</TableHead>
            <TableHead>To</TableHead>
            <TableHead>From</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Flower</TableHead>
            <TableHead>Colour</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((item) => (
            <MessageRow key={item.id} message={item} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

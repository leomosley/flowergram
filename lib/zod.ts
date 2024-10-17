import { z } from "zod";

export const messageFormSchema = z.object({
  recipient: z.string(),
  sender: z.string(),
  message: z.string(),
  flower: z.number().min(0).max(5),
  colour: z.string(),
});
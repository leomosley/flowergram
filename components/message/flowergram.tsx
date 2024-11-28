import { Message } from "@prisma/client"
import { BlurFade } from "../ui/blur-fade";

export function Flowergram({
  message
}: {
  message: Message;
}) {
  return (
    <BlurFade>
      <p>test</p>
    </BlurFade>
  );
}

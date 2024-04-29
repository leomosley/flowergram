import { Flower } from '@/flowers';
import React from 'react';

export default function Message({
  recipient,
  sender,
  message,
  flower,
  colour,
  flowers
}: {
  recipient?: string | null;
  sender?: string | null;
  message?: string | null;
  flower?: Flower;
  colour?: string | null;
  flowers: Flower[];
}) {

  return (
    <div className="absolute mx-auto max-w-80 top-10">
      <div className="flex flex-col text-balance">
        {recipient && <span className="">To {recipient}</span>}
        {message && <span className="">{message}</span>}
        {sender && <span className="">From {sender}</span>}
        {flower && <span className=""> {flower.icon}</span>}
      </div>
    </div>
  );
}

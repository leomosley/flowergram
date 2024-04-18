'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

export default function FlowerGram() {
  const searchParams = useSearchParams();
  const message = searchParams.get('m');
  const flower = searchParams.get('f');
  const colour = searchParams.get('c');
  const sender = searchParams.get('s');
  const recipient = searchParams.get('r');

  return (
    <div 
      className={clsx(
        "flex flex-col mx-auto max-w-80 rounded-xl mt-80",
        "p-4 bg-neutral-900 border border-neutral-800",
        "text-balance"
      )}
    >
      {recipient && <span className="">To {recipient}</span>}
      {message && <span className="">{message}</span>}
      {sender && <span className="">From {sender}</span>}
    </div>
  );
}

'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { flowers } from '@/flowers';

export default function FlowerGram() {
  const searchParams = useSearchParams();
  const message = searchParams.get('m');
  const flower = searchParams.get('f');
  const colour = searchParams.get('c');
  const sender = searchParams.get('s');
  const recipient = searchParams.get('r');

  return (
    <div className="flex mx-auto max-w-80 rounded-xl mt-80">
      <div className="flex flex-col text-balance">
        {recipient && <span className="">To {recipient}</span>}
        {message && <span className="">{message}</span>}
        {sender && <span className="">From {sender}</span>}
        {flower && <span>{flowers[Number(flower)].icon}</span>}
      </div>
    </div>
  );
}

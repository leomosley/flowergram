'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { colours, Flower, flowers } from '@/flowers/index';
import clsx from 'clsx';

export default function MessagePage() {
  const searchParams = useSearchParams();
  const messageParam = searchParams.get('m');
  const flowerParam = searchParams.get('f');
  const colourParam = searchParams.get('c');
  const senderParam = searchParams.get('s');
  const recipientParam = searchParams.get('r');
  
  const [flower, setFlower] = useState<Flower | undefined>();
  const [colour, setColour] = useState<string>("");
    
  useEffect(() => {
    setFlower(flowers[Number(flowerParam)]);
    setColour(colours[Number(colourParam)]);
  }, [flowerParam, colourParam]);

  useLayoutEffect(() => {
    document.body.style.overflowY = 'hidden';
  }, [searchParams]);

  return (
    <section className="absolute inset-0 flex items-end justify-center min-h-dvh">
      {recipientParam && (
        <div 
          className={clsx(
            "absolute top-1/4 -mt-20 left-1/4 p-2 rounded-xl border",
            "backdrop-blur-xl glow -rotate-12"
          )}
        >
          To: {recipientParam}
        </div>
      )}
      {senderParam && (
        <div 
          className={clsx(
            "absolute top-1/4 -mt-20 right-1/4 p-2 rounded-xl border",
            "backdrop-blur-xl glow rotate-12"
          )}
        >
          From: {senderParam}
        </div>
      )}
      {messageParam && (
        <div 
          className={clsx(
            "absolute flex justify-center bottom-1/4 mx-auto p-2 rounded-xl border z-50",
            "backdrop-blur-xl glow"
          )}
        >
          {messageParam}
        </div>
      )}
      {flower && flower.component}
    </section>
  );
}

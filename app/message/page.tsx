'use client';
import React, { Suspense, useEffect, useState } from 'react';
import Message from '@/components/Message';
import { useSearchParams } from 'next/navigation';
import { colours, Flower, flowers } from '@/flowers/index';

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

  return (
    <Suspense>
      <section className="absolute inset-0 flex items-end justify-center min-h-screen">
        {/* <Message 
          message={messageParam}
          flower={flower}
          colour={colour}
          sender={senderParam}
          recipient={recipientParam}
          flowers={flowers}
        /> */}
        {flower && flower.component}
      </section>
    </Suspense>
  );
}

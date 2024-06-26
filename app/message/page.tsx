'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { colours, Flower, flowers } from '@/flowers/index';
import clsx from 'clsx';
import { TestModel} from '@/components/test-model';

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

  const Message = ({ message } : { message: string }) => {
    return (
      <div 
        className={clsx(
          "flex p-4 bg-neutral-950 glow max-w-60 md:max-w-80",
          "font-medium text-balance text-center border-4 border-gray-200"
        )}
      >
        <div className="absolute bg-gray-200 w-[4px] h-[4px] top-[4px] left-[4px]"></div>
        <div className="absolute bg-gray-200 w-[4px] h-[4px] bottom-[4px] left-[4px]"></div>
        <div className="absolute bg-gray-200 w-[4px] h-[4px] top-[4px] right-[4px]"></div>
        <div className="absolute bg-gray-200 w-[4px] h-[4px] bottom-[4px] right-[4px]"></div>
        <div className="absolute bg-neutral-950 w-[4px] h-[4px] top-0 left-0"></div>
        <div className="absolute bg-neutral-950 w-[4px] h-[4px] bottom-0 left-0"></div>
        <div className="absolute bg-neutral-950 w-[4px] h-[4px] top-0 right-0"></div>
        <div className="absolute bg-neutral-950 w-[4px] h-[4px] bottom-0 right-0"></div>
        {message}
      </div>
    );
  }

  return (
    <section className="flex justify-center">
      {recipientParam && (
        <div className="absolute top-1/4 -mt-12 left-10 md:left-1/4">
          <Message message={`To: ${recipientParam}`} />
        </div>
      )}
      {senderParam && (
        <div className="absolute top-1/4 -mt-12 right-10 md:right-1/4">
          <Message message={`From: ${senderParam}`} />
        </div>
      )}
      {messageParam && (
        <div className={"absolute bottom-1/4 mx-auto z-50"}>
          <Message message={messageParam} />
        </div>
      )}
      <div className="absolute bottom-10">
        <TestModel />
      </div>
    </section>
  );
}

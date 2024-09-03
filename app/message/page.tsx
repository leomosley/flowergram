'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { colors, Flower, flowers } from '@/components/flowers';
import { Model } from '@/components/flowers/model';
import { Canvas } from '@react-three/fiber';

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
    setColour(colors[Number(colourParam)]);
  }, [flowerParam, colourParam]);

  useLayoutEffect(() => {
    document.body.style.overflowY = 'hidden';
  }, [searchParams]);


  return (
    <section className="w-full h-screen">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model modelPath='trex' />
      </Canvas>
    </section>
  );
}

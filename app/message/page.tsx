import React, { Suspense } from 'react';
import FlowerGram from '@/components/FlowerGram';

export default function Message() {
  return (
    <section className="flex">
      <Suspense>
        <FlowerGram />
      </Suspense>
    </section>
  );
}

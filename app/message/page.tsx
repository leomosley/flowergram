import React, { Suspense } from 'react';
import Message from '@/components/Message';

export default function MessagePage() {
  return (
    <section className="flex">
      <Suspense>
        <Message />
      </Suspense>
    </section>
  );
}

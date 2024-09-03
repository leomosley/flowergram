import { MessageForm } from '@/components/new/message-form';
import { Suspense } from 'react';

export default function New() {
  return (
    <section className="flex h-full pb-12 justify-center">
      <Suspense fallback={<p>loading...</p>}>
        <MessageForm />
      </Suspense>
    </section>
  )
}

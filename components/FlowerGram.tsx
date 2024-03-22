'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function FlowerGram() {
  const searchParams = useSearchParams();
  const message = searchParams.get('m');
  const flower = searchParams.get('f');
  const colour = searchParams.get('c');
  const sender = searchParams.get('s');
  const recipient = searchParams.get('r');

  return (
    <div className="flex flex-col">
      {message}
      {flower}
      {colour}
      {sender}
      {recipient}
    </div>
  );
}

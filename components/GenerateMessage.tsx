'use client';
import React, { useEffect, useRef, useState } from 'react';
import { flowers, colours } from '@/flowers';

export default function GenerateMessage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [colour, setColour] = useState<number>(0);
  const [flower, setFlower] = useState<number>(0);
  const [recipient, setRecipient] = useState<string>("");
  const [sender, setSender] = useState<string>("");
  
  const recipientRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    recipientRef.current?.focus();
  }, []);

  const generate = () => {
    setLoading(true);
    console.log(message, colour, flower, recipient, sender);
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input 
              className="rounded-lg p-2 bg-neutral-800 border border-neutral-700"
              ref={recipientRef}
              value={recipient}
              onChange={(e) => setRecipient(e.currentTarget.value)}
              disabled={loading}
              placeholder="To"

            />
            <input 
              className="rounded-lg p-2 bg-neutral-800 border border-neutral-700"
              value={sender}
              onChange={(e) => setSender(e.currentTarget.value)}
              disabled={loading}
              placeholder="From"
            />
          </div>
          <textarea
            className="flex resize-none h-full overflow-y-auto gap-2 p-2 rounded-lg bg-neutral-800 border border-neutral-700"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            disabled={loading}
            placeholder="Message"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="gap-2 p-2 rounded-lg bg-neutral-800 border border-neutral-700">
            {/* MAKE DROPDOWN */}
            {flowers.map((flower) => (
              <button
                key={flower.id}
                className="flex-1 px-4 bg-neutral-600 rounded"
                onClick={() => setFlower(flower.id)}
                disabled={loading}
              >{flower.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-2 p-2 rounded-lg bg-neutral-800 border border-neutral-700">
            {colours.map((colour, index) => (
              <button
                key={index}
                className="w-10 h-10 rounded"
                style={{ background: colour }}
                onClick={() => setFlower(index)}
                disabled={loading}
              >
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          className="rounded-lg p-2 ml-auto bg-neutral-800 border border-neutral-700"
          onClick={generate}
          disabled={loading}
        >Generate
        </button>
      </div>
    </div>
  );
}

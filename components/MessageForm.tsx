'use client';
import React, { useState } from 'react';
import { flowers, colours } from '@/flowers';
import { useRouter } from 'next/navigation';

export default function MessageForm() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [colour, setColour] = useState<string>("0");
  const [flower, setFlower] = useState<string>("0");
  const [recipient, setRecipient] = useState<string>("");
  const [sender, setSender] = useState<string>("");
  const [generated, setGenerated] = useState<string>("");
  

  const generate = () => {
    setLoading(true);
    let url = `${
      process.env.VERCEL_URL 
      ? 'https://' + process.env.VERCEL_URL
      : 'http://localhost:3000'
    }/message?`;
    
    const query = {
      c: colour,
      f: flower,
      m: message,
      s: sender,
      r: recipient
    } as { [key: string]: string };
  
    Object.keys(query).forEach(key => {
      if (query[key]) {
        url += `&${key}=${encodeURI(query[key])}`;
      }
    });
    setGenerated(url);
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input 
          className="rounded-lg p-2 bg-neutral-800 border border-neutral-700"
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
        className="resize-none min-h-28  overflow-y-auto gap-2 p-2 rounded-lg bg-neutral-800 border border-neutral-700"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        disabled={loading}
        placeholder="Message"
      />
      <div className="flex gap-2">
        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 p-2 rounded-lg bg-neutral-800 border border-neutral-700">
          {flowers.map((flower) => (
            <button
              key={flower.id}
              className="flex-1 px-4 bg-neutral-600 rounded"
              onClick={() => setFlower(flower.id.toString())}
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
                onClick={() => setColour(index.toString())}
                disabled={loading}
              >
              </button>
            ))}
          </div>
      </div>
      <div className="flex">
        <button
          className="rounded-lg ml-auto p-2 bg-neutral-800 border border-neutral-700"
          onClick={generate}
          disabled={loading}
        >Generate
        </button>
      </div>
    </div>
  );
}

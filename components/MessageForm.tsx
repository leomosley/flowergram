'use client';
import React, { useState } from 'react';
import { flowers, colours } from '@/flowers';
import clsx from 'clsx';

export default function MessageForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [colour, setColour] = useState<number>(0);
  const [flower, setFlower] = useState<number>(0);
  const [recipient, setRecipient] = useState<string>("");
  const [sender, setSender] = useState<string>("");
  const [generated, setGenerated] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const generate = () => {
    setLoading(true);
    let url = `${
      process.env.NEXT_PUBLIC_VERCEL_URL
      ? 'https://flowergram.vercel.app' 
      : 'http://localhost:3000'
    }/message?`;
    
    const query = {
      c: colour,
      f: flower,
      m: message,
      s: sender,
      r: recipient
    } as { [key: string]: string | number };
  
    Object.keys(query).forEach(key => {
      let temp = query[key].toString();
      if (temp) {
        url += `&${key}=${encodeURI(temp)}`;
      }
    });
    setGenerated(url);
    setModalOpen(true);
    setLoading(false);
  }

  const Modal = () => {
    return modalOpen && (
      <div className="absolute mx-auto top-1/3 p-4 z-20 rounded-lg bg-neutral-900 border border-neutral-800">
        <h1 className="text-lg">Share</h1>
        <hr></hr>
        <div className="flex gap-2 mt-2">
          <p className="p-2 rounded w-56 text-nowrap overflow-hidden border border-neutral-800">{generated}</p>
          <button
            className="p-2 bg-neutral-700 rounded hover:bg-neutral-700/70"
            onClick={() => navigator.clipboard.writeText(generated)}
          >Copy
          </button>
          <button
            className="p-2 bg-neutral-700 rounded hover:bg-neutral-700/70"
            onClick={() => window.open(generated, "_blank")}
          >Open
          </button>
        </div>
      </div>
    );
  }

  const Backdrop = () => {
    return modalOpen && (
      <div 
        className="absolute top-0 left-0 w-screen h-screen backdrop-blur-sm z-10 transition cursor-pointer"
        onClick={() => setModalOpen(false)}
      >
      </div>
    );
  }

  return (
    <>
    <Backdrop />
    <Modal/>
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input 
          className="rounded-lg p-2 bg-neutral-900 border border-neutral-800"
          value={recipient}
          onChange={(e) => setRecipient(e.currentTarget.value)}
          disabled={loading}
          placeholder="To"
          
          />
        <input 
          className="rounded-lg p-2 bg-neutral-900 border border-neutral-800"
          value={sender}
          onChange={(e) => setSender(e.currentTarget.value)}
          disabled={loading}
          placeholder="From"
          />
      </div>
      <textarea
        className="resize-none min-h-28  overflow-y-auto gap-2 p-2 rounded-lg bg-neutral-900 border border-neutral-800"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        disabled={loading}
        placeholder="Message"
      />
      <div className="flex gap-2">
        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 p-2 rounded-lg bg-neutral-900 border border-neutral-800">
          {flowers.map((f) => (
            <button
            key={f.id}
              className={clsx(
                "flex-1 px-4 bg-neutral-700 rounded",
                flower === f.id && "bg-neutral-700/60"
              )}
              onClick={() => setFlower(f.id)}
              disabled={loading}
            >{f.name}
            </button>
          ))}
        </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-2 p-2 rounded-lg bg-neutral-900 border border-neutral-800">
            {colours.map((c, index) => (
              <button
                key={index}
                className={clsx(
                  "w-10 h-10 rounded",
                  colour === index && "border"
                  )}
                style={{ background: c }}
                onClick={() => setColour(index)}
                disabled={loading}
              >
              </button>
            ))}
          </div>
      </div>
      <div className="flex">
        <button
          className="rounded-lg ml-auto p-2 bg-neutral-900 border border-neutral-800"
          onClick={generate}
          disabled={loading}
          >Generate
        </button>
      </div>
    </div>
    </>
  );
}

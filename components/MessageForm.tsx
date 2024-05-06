'use client';
import React, { useState } from 'react';
import { flowers, colours } from '@/flowers';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import clsx from 'clsx';
import Modal from './Modal';

export default function MessageForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [colour, setColour] = useState<number>(0);
  const [flower, setFlower] = useState<number>(0);
  const [recipient, setRecipient] = useState<string>("");
  const [sender, setSender] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

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
    setUrl(url);
    setOpen(true);
    setLoading(false);
  }

  return (
    <>
    <Modal
      url={url}
      setUrl={setUrl}
      open={open}
      setOpen={setOpen}
      sender={sender}
      recipient={recipient}
    />
    <div className="flex flex-col gap-2 p-4 backdrop-blur-xl border border-neutral-800 rounded-xl">
      <div className="flex flex-col">
        <label className="font-bold glow">
          To
        </label>
        <input 
          className="rounded-lg p-2 border border-neutral-800 bg-transparent"
          value={recipient}
          onChange={(e) => setRecipient(e.currentTarget.value)}
          disabled={loading}
          autoFocus
        />
      </div>
      <div className="flex flex-col">
        <label className="font-bold glow">
          From
        </label>
        <input 
          className="rounded-lg p-2 border border-neutral-800 bg-transparent"
          value={sender}
          onChange={(e) => setSender(e.currentTarget.value)}
          disabled={loading}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-bold glow">
          Message
        </label>
        <textarea
          className="resize-none min-h-28 overflow-y-auto gap-2 p-2 rounded-lg border border-neutral-800 bg-transparent"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          disabled={loading}
        />
      </div>
      <div className="flex gap-2">
        <div className="flex-1 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 p-2 rounded-lg border border-neutral-800 bg-transparent">
          {flowers.map((f) => (
            <button
            key={f.id}
            className={clsx(
              "flex-1 px-2 md:px-4 rounded transition",
              flower === f.id ? "bg-neutral-700/75" : "bg-neutral-700/40",
              "text-xl md:text-2xl"
            )}
            onClick={() => setFlower(f.id)}
            disabled={loading}
            aria-label={f.name}
            >{f.icon}
            </button>
          ))}
        </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-2 p-2 rounded-lg border border-neutral-800 bg-transparent">
            {colours.map((c, index) => (
              <button
              key={index}
              className={clsx(
                "w-10 h-10 rounded box-border",
                colour === index && "border-2"
              )}
              style={{ background: c }}
              onClick={() => setColour(index)}
              disabled={loading}
              aria-label={c}
              >
              </button>
            ))}
          </div>
      </div>
      <div className="flex">
        <button
          className={clsx(
            "flex gap-2 items-center p-2 rounded-lg glow bg-neutral-950 border",
            "transition duration-300 hover:shadow-[0_0_2rem_-0.5rem_#fff8]"
          )}
          onClick={generate}
          disabled={loading}
          aria-label='share'
          >
            Send <HiOutlinePaperAirplane className="text-xl rotate-45 -mt-1 -mr-1"/>
        </button>
      </div>
    </div>
    </>
  );
}

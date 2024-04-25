'use client';
import React, { useState } from 'react';
import { useModalContext } from '.';
import clsx from 'clsx';

export default function Modal() {
  const { url, open, setOpen } = useModalContext();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const defaultUrl = `${
    process.env.NEXT_PUBLIC_VERCEL_URL
    ? 'https://flowergram.vercel.app' 
    : 'http://localhost:3000'
  }/404`;

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  }

  return open && (
    <div 
      className={clsx(
        "absolute flex justify-center top-0 left-0 w-screen h-screen z-10",
        "backdrop-blur-sm cursor-pointer"
      )}
      onClick={() => setOpen!(false)}
    >
      <div className={clsx(
        "absolute top-10 z-20 p-4 transition",
        "rounded-lg bg-neutral-900 border border-neutral-800",
        showPopup && "opacity-100", 
        !showPopup && "opacity-0"
      )}>
        Link coppied to clipboard 🌷
      </div>
      <div 
        className={clsx(
          "absolute top-1/3 p-4 z-20 cursor-default",
          "rounded-lg bg-neutral-900 border border-neutral-800"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-lg">Share</h1>
        <hr></hr>
        <div className="flex gap-2 mt-2">
          <p className="p-2 rounded w-56 text-nowrap overflow-hidden border border-neutral-800">{url ?? defaultUrl}</p>
          <button
            className="p-2 bg-neutral-700 rounded hover:bg-neutral-700/70"
            onClick={() => copy(url ?? defaultUrl)}
            >Copy
          </button>
          <button
            className="p-2 bg-neutral-700 rounded hover:bg-neutral-700/70"
            onClick={() => window.open(url ?? defaultUrl, "_blank")}
            >Open
          </button>
        </div>
      </div>
    </div>
  );
}


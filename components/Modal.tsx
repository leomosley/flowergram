'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import clsx from 'clsx';
import ShareButton from './ShareButton';
import { HiLink, HiOutlineExternalLink, HiPencil, HiX } from 'react-icons/hi';

export default function Modal({
  url,
  setUrl,
  open,
  setOpen,
  sender,
  recipient,
} : {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  sender?: string;
  recipient?: string;
  message?: string;
}) {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const defaultUrl = `${
    process.env.NEXT_PUBLIC_VERCEL_URL
    ? 'https://flowergram.vercel.app' 
    : 'http://localhost:3000'
  }`;

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  }

  return open && (
    <div 
      className={clsx(
        "fixed flex justify-center h-screen inset-0 z-50",
        "backdrop-blur-sm cursor-pointer"
      )}
      onClick={() => setOpen!(false)}
    >
      <div className={clsx(
        "absolute p-2 rounded top-5 mx-auto transition-opacity duration-300",
        "bg-neutral-950 border border-neutral-200",
        showPopup ? "opacity-100" : "opacity-0" 
      )}>
        <span className="glow">Copied to clipboard 💐</span>
      </div>
      <div 
        className={clsx(
          "absolute top-1/3 p-4 z-60 cursor-default space-y-4",
          "rounded-lg bg-neutral-950 border border-gray-200"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex">
          <h1 className="text-lg font-bold glow">Share your FlowerGram now</h1>
          <button
            className="ml-auto glow"
            onClick={() => setOpen(false)}
          >
            <HiX />
          </button>
        </div>
        <div className="flex items-center gap-2 p-2 rounded border">
          <span className="text-xl md:text-2xl">🌺</span>
          <span className="font-mono glow text-sm md:text-base">flowergram.vercel.app/message</span>
          <button
            className={clsx(
              "flex items-center p-1 rounded glow",
            )}
            onClick={() => copy(url ?? defaultUrl)}
          >
            <HiLink className="w-5 h-5" />
          </button>
        </div>
        <div className="flex">
          <button 
            className="flex gap-1 items-center p-1"
            onClick={() => setOpen(false)}
          >
            <span className="">Edit </span>
            <HiPencil className="w-4 h-4" />
          </button>
          <div className="flex ml-auto gap-2">
            <ShareButton 
              className="rounded border-gray-200"
              url={url}
            />
            <button
              className={clsx(
                "flex gap-1 items-center p-2 rounded glow bg-neutral-950 border border-gray-200",
                "transition duration-300 hover:shadow-[0_0_2rem_-0.5rem_#fff8]"
              )}
              onClick={() => window.open(url ?? defaultUrl, "_blank")}
            >
              <HiOutlineExternalLink className="w-5 h-5" />
              <span className="">Open</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


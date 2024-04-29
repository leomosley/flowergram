'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import clsx from 'clsx';
import ShareButton from './ShareButton';
import { HiLink, HiOutlineExternalLink, HiX } from 'react-icons/hi';

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
      <div 
        className={clsx(
          "absolute top-1/3 p-4 z-60 cursor-default",
          "rounded-lg bg-neutral-900 border border-neutral-800"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex">
          <h1 className="text-lg font-bold glow">Share Now</h1>
          <button
            className="ml-auto glow"
            onClick={() => setOpen(false)}
          >
            <HiX />
          </button>
        </div>
        <hr className="my-2 border-neutral-700"></hr>
        <div className="flex glow">
          {recipient && <span className="flex flex-1 p-2 mr-2 rounded border border-neutral-700">To: {recipient}</span>}
          {sender && <span className="flex flex-1 p-2 rounded border border-neutral-700">From: {sender}</span>}
        </div>
        {(sender || recipient) && <hr className="my-2 border-neutral-700"></hr>}
        <p className="p-2 rounded max-w-80 glow text-nowrap overflow-hidden border border-neutral-800">{(url ?? defaultUrl).split('//')[1]}</p>
        <hr className="my-2 border-neutral-700"></hr>
        <div className="flex justify-center gap-2 mt-2">
          <button
            className={clsx(
              "flex gap-1 items-center p-2 rounded-xl glow bg-neutral-950 border border-neutral-950",
              "transition duration-300 hover:shadow-[0_0_2rem_-0.5rem_#fff8]"
            )}
            onClick={() => copy(url ?? defaultUrl)}
          >
            <HiLink className="w-5 h-5" />
            <span className="">Copy Link</span>
          </button>
          <ShareButton 
            url={url}
          />
          <button
            className={clsx(
              "flex gap-1 items-center p-2 rounded-xl glow bg-neutral-950 border border-neutral-950",
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
  );
}


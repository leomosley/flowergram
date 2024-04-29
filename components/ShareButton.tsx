"use client";
import clsx from 'clsx';
import React from 'react'
import { HiShare } from 'react-icons/hi';

export default function ShareButton() {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Flowergram • Send digital flowers',
          text: 'Send personalised digital flowers and messages to anyone, anywhere, absolutely free.',
          url: 'https://flowergram.vercel.app',
        });
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <button
      id="share"
      className={clsx(
        "flex flex-1 gap-1 items-center p-2 rounded-xl glow border border-black hover:border-neutral-900",
        "transition duration-300 hover:shadow-[0_0_2rem_-0.5rem_#fff8]"
      )}
      aria-label="share"
      onClick={handleShare}
    >
      <HiShare />
      <span className="">Share</span>
    </button>
  );
};

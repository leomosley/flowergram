"use client";
import clsx from 'clsx';
import React from 'react'
import { HiShare } from 'react-icons/hi';

export function ShareButton({
  title,
  text,
  url,
  className
} : {
  title?: string;
  text?: string;
  url?: string;
  className?: string;
}) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title ?? "FlowerGram",
          text: text ?? "",
          url: url ?? "https://flowergram.vercel.app",
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
        "flex gap-1 items-center p-2 glow bg-neutral-950 border",
        "transition duration-300 hover:shadow-[0_0_2rem_-0.5rem_#fff8]",
        !className && "rounded-xl",
        !className && "border-neutral-950",
        className,
      )}
      aria-label="share"
      onClick={handleShare}
    >
      <HiShare />
      <span className="">Share</span>
    </button>
  );
};

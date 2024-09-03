"use client";

import { Button } from '../ui/button';
import { Share } from 'lucide-react';

export function ShareButton({
  title,
  text,
  url,
}: {
  title?: string;
  text?: string;
  url?: string;
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
    <Button
      id="share"
      className="w-fit"
      onClick={handleShare}
      size="sm"
    >
      share
      <Share className="ml-1 w-4 h-4" />
    </Button>
  );
};

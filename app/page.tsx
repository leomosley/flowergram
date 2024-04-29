import ShareButton from "@/components/ShareButton";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function Home() {
  return (
    <section className="flex flex-col justify-center mt-20">
      <div className="text-balance text-center mt-14 md:mt-28 space-y-1.5">
        <h1 className="text-5xl md:text-7xl font-extrabold glow">FlowerGram</h1>
        <span className="flex mx-auto text-base md:text-lg glow max-w-md text-balance">Send personalised digital flowers and messages to anyone, anywhere, absolutely free.</span>
      </div>
      <div className="flex mx-auto mt-10 gap-6">
        <Link
          id="create"
          className={clsx(
            "flex flex-1 gap-1 items-center p-2 rounded-xl glow bg-neutral-950 border",
            "transition duration-300 hover:shadow-[0_0_2rem_-0.5rem_#fff8]"
          )}
          href={'/new'}
          aria-label="create"
        >
          <HiOutlinePencilAlt className="w-5 h-5" />
          <span className="">Create</span>
        </Link>
        <a
          id="github"
          className={clsx(
            "flex flex-1 gap-1 items-center p-2 rounded-xl glow bg-neutral-950 border border-neutral-950",
            "transition duration-300 hover:shadow-[0_0_2rem_-0.5rem_#fff8]"
          )}
          href="https://github.com/leomosley/flowergram"
          target="_blank"
          aria-label="github"
        >
          <FaGithub />
          <span className="">GitHub</span>
        </a>
        <ShareButton 
          text='Send personalised digital flowers and messages to anyone, anywhere, absolutely free.'
        />
      </div>
    </section>
  );
}

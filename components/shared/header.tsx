"use client";
import React from 'react';
import Link from 'next/link';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { LuFlower } from 'react-icons/lu';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  return !pathname.startsWith('/message') && (
    <header className="fixed flex justify-center w-full p-2 z-20 backdrop-blur-xl border-b border-b-muted">
      <div className="flex w-full md:max-w-6xl justify-between">
        <Link
          className="w-9 h-9 md:h-10 md:w-10"
          href="/"
        ><LuFlower className="w-full h-full" />
        </Link>
        <Link
          className="w-9 h-9 md:h-10 md:w-10 ml-auto"
          href="/new"
        ><HiOutlinePencilAlt className="w-full h-full" />
        </Link>
      </div>
    </header>
  )
}

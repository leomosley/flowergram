"use client";
import React from 'react';
import Link from 'next/link';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { LuFlower2, LuFlower } from 'react-icons/lu';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  return !pathname.startsWith('/message') && (
    <header className="fixed flex items-center w-full p-2 z-20 backdrop-blur-sm border-b border-b-muted">
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
    </header>
  )
}

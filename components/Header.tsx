"use client";
import React from 'react';
import Link from 'next/link';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { LuFlower2, LuFlower } from 'react-icons/lu';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return !pathname.startsWith('/message') && (
    <div className="flex">
      <Link
        className="h-10 w-10"
        href="/"
      ><LuFlower className="w-full h-full" />
      </Link>
      <Link
        className="h-10 w-10 ml-auto"
        href="/new"
      ><HiOutlinePencilAlt className="w-full h-full" />
      </Link>
    </div>
  )
}

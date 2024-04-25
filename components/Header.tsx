import React from 'react';
import Link from 'next/link';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { LuFlower2, LuFlower } from 'react-icons/lu';

export default function Header() {
  return (
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

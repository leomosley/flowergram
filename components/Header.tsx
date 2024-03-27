import React from 'react';
import Link from 'next/link';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { LuFlower2, LuFlower } from 'react-icons/lu';

export default function Header() {
  return (
    <div className="flex">
      <Link
        className="h-7 w-7"
        href="/"
      ><LuFlower2 className="w-full h-full" />
      </Link>
      <Link
        className="h-7 w-7 ml-auto"
        href="/new"
      ><HiOutlinePencilAlt className="w-full h-full" />
      </Link>
    </div>
  )
}

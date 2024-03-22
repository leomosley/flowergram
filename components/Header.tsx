import React from 'react';
import Link from 'next/link';
import { PiFlowerBold, PiFlowerTulipBold } from 'react-icons/pi';
import { HiOutlinePencilAlt } from 'react-icons/hi';

export default function Header() {
  return (
    <div className="flex">
      <Link
        className="h-7 w-7"
        href="/"
      ><PiFlowerTulipBold className="w-full h-full" />
      </Link>
      <Link
        className="h-7 w-7 ml-auto"
        href="/new"
      ><HiOutlinePencilAlt className="w-full h-full" />
      </Link>
    </div>
  )
}

"use client";

import { Session } from 'next-auth';
import Link from 'next/link';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { LuFlower } from 'react-icons/lu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { LogOut, Mail, Settings, User } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export function Header({
  session,
}: {
  session: Session | null;
}) {
  const nav = [
    { icon: <Mail className="mr-2 h-4 w-4" />, label: "My Messages", href: "/messages" },
    { icon: <HiOutlinePencilAlt className="mr-2 h-4 w-4" />, label: "New Message", href: "/new" },
    { icon: <Settings className="mr-2 h-4 w-4" />, label: "Settings", href: "/settings" },
  ];

  return (
    <header className="fixed flex justify-center w-full p-2 z-20 backdrop-blur-xl border-b border-b-muted">
      <div className="flex gap-2 w-full md:max-w-6xl justify-between">
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
        {session && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={session.user.image} alt="avatar" />
                <AvatarFallback>
                  {session.user.name
                    .split(" ")
                    .reduce((word) => word[0].toUpperCase())
                  }
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                {nav.map((item) => (
                  <DropdownMenuItem key={item.label}>
                    <Link
                      className="flex items-center gap-1 w-40"
                      href={item.href}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <a
                    className="flex items-center gap-1 w-40"
                    href="https://github.com/leomosley/flowergram"
                    target="_blank"
                  >
                    <FaGithub className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    className="flex items-center gap-1 w-40"
                    href="/sign-out"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}

import React from 'react';
import Link from 'next/link';

export default function PageNotFound() {
  const navigation = [
    { label: "Home", href: '/' },
    { label: "New Message", href: '/new' },
  ];
  
  return (
    <section className="flex flex-col mx-auto md:max-w-2xl p-4 mt-56 gap-2">
      <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
        <h1 className="text-3xl font-extrabold">OOPS! PAGE NOT FOUND.</h1>
        <span className="">
          Double check the link to make sure you copied it correctly if your trying to view a message.
        </span>
      </div>
      <div className="flex gap-2">
        {navigation.map((item) => (
          <Link 
            className="flex-1 bg-neutral-900 p-4 rounded-lg border border-neutral-800"
            key={item.href}
            href={item.href}
          >
            <span className="">
              {item.label} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

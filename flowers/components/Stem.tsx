import clsx from 'clsx';
import React from 'react';
import SmallLeaf from './SmallLeaf';

export default function Stem({
  className,
} : {
  className?: string;
}) {
  
  return (
    <div className={clsx(
      "stem",
      className
    )}>
      <SmallLeaf className="" />
      <SmallLeaf className="--1" />
      <SmallLeaf className="--2" />
      <SmallLeaf className="--3" />
      <SmallLeaf className="--4" />
      <SmallLeaf className="--5" />
    </div>
  );
}

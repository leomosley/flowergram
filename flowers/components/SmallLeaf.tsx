import clsx from 'clsx';
import React from 'react'

export default function SmallLeaf({
  className,
} : {
  className?: string;
}) {
  return (
    <div className={clsx(
      "small-leaf",
      className
    )}>
    </div>
  );
}

import React from 'react';
import clsx from 'clsx';

export default function Petals({
  className,
} : {
  className?: string;
}) {
  return (
    <div className={clsx(
      "flower__leafs flower__leafs--1",
      className
    )}>
      <div className="flower__leaf flower__leaf--1"></div>
      <div className="flower__leaf flower__leaf--2"></div>
      <div className="flower__leaf flower__leaf--3"></div>
      <div className="flower__leaf flower__leaf--4"></div>
      <div className="flower__white-circle"></div>

      <div className="flower__light flower__light--1"></div>
      <div className="flower__light flower__light--2"></div>
      <div className="flower__light flower__light--3"></div>
      <div className="flower__light flower__light--4"></div>
      <div className="flower__light flower__light--5"></div>
      <div className="flower__light flower__light--6"></div>
      <div className="flower__light flower__light--7"></div>
      <div className="flower__light flower__light--8"></div>
    </div>
  );
}

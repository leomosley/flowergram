import React from 'react';
import Stem from './Stem';

export default function Base({
  className,
} : {
  className?: string;
}) {
  return (
    <div className="sway">
      <Stem />
      <Stem className='right'/>
      <Stem className='left'/>
    </div>
  );
}

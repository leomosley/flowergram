import React from 'react';
import Stem from './Stem';

export default function Base({
  className,
} : {
  className?: string;
}) {
  return (
    <div>
      <Stem />
      <Stem className='right'/>
      <Stem className='left'/>
    </div>
  );
}

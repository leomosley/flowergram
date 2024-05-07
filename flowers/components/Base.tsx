import React from 'react';
import Stem from './Stem';
import Petals from './Petals';

export default function Base({
  className,
} : {
  className?: string;
}) {
  return (
    <div className="sway">
      <div>
        <Petals />
        <Stem />
      </div>      
      <div>
        <Petals className='petals-right' />
        <Stem className='right-stem'/>
      </div>      
      <div>
        <Petals className='petals-left'/>
        <Stem className='left-stem'/>
      </div>      
    </div>
  );
}

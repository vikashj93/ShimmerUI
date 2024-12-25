import React from 'react';
import '../index.css';

const ShimmerUI = () => {
  return Array(10)
    .fill(0)
    .map((n,i) => (
    <div key={i} className='p-5 m-5 border border-black skeleton'>
        <div className="h-52 w-52 bg-gray-300"></div>
    </div>
  ));
};

export default ShimmerUI
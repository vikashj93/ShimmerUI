import React from 'react';

const MemeCard = ({data}) => {
    const{author, url} = data;
    
  return (
    <div className='p-5 m-5 border border-black'>
        <img className="h-52 w-52" alt="meme" src={url} />
        <p className="h-15 w-24">Author: {author}</p>
    </div>
  )
}

export default MemeCard
import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import ShimmerUI from './ShimmerUI';

const Body = () => {

    const [memes, setMemes] = useState(null);
    useEffect(() => {
        fetchMemes();
    },[])
    const fetchMemes = async() =>{
        const data = await fetch("https://meme-api.com/gimme/20");
        const parsedData = await data.json();
        setMemes(parsedData.memes)
    }
  return (
    <div className='flex flex-wrap'>
        {!memes ? (
            <ShimmerUI/>
        ) : (
            memes.map((meme,i) => <MemeCard key={i} data={meme}/>)
        )}
    </div>
  )
}

export default Body
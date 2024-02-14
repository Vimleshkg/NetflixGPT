import React from 'react'
import { useSelector } from 'react-redux'
import { movieImage } from './Constant';
import VideoList from './VideoList';

const SecondaryVideoContainer = () => {
  const nowPlay = useSelector((store)=>store?.video?.videoList?.nowPlaying)
  if(!nowPlay) return;

  return (
    <div className='  md:mt-0 bg-black'>

<div className='relative bottom-40 md:bottom-72 z-10'>
  <h1 className='pt-6 ml-3 md:ml-7 md:text-xl md:pt-4 md:-mb-4 text-white font-medium '>Now Playing</h1>
   <VideoList List={nowPlay} checkComp="secondaryVideo"/>
   <h1 className=' ml-3 md:ml-7 md:text-xl  md:-mb-4 text-white font-medium  '>Popular</h1>
   <VideoList List={nowPlay.slice(8, nowPlay.length-1)} checkComp="secondaryVideo"/>
   <h1 className='ml-3 md:ml-7 md:text-xl  md:-mb-4 text-white font-medium '>Trending</h1>
   <VideoList List={nowPlay.slice(4, nowPlay.length-1)} checkComp="secondaryVideo"/>
   <h1 className='ml-3 md:ml-7 md:text-xl  md:-mb-4 text-white font-medium '>Most Watched</h1>
   <VideoList List={nowPlay.slice(9, nowPlay.length-1)} checkComp="secondaryVideo"/>
   <h1 className='ml-3 md:ml-7 md:text-xl  md:-mb-4 text-white font-medium '>Action Movie</h1>
   <VideoList List={nowPlay}/>
   
   </div>
    </div>
  )
}

export default SecondaryVideoContainer
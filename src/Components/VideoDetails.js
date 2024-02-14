import React, { useEffect, useState } from 'react'
import useCastDetails from './useCastDetails'
import { useSelector } from 'react-redux';
import VideoCard from './VideoCard';
import VideoList from './VideoList';


const VideoDetails = ({videoId}) => {
  useCastDetails(videoId);

  const castSelector = useSelector((store)=>store?.VideoDetails?.cast);
 console.log(castSelector)


  
  return (
    <div className=''>
<div>
<h1 className='pt-6 ml-3 md:ml-7  md:text-3xl pb-[1%] md:pt-8 md:-mb-4 text-[#ffdd95] font-medium '>Cast</h1>
<VideoList List={castSelector} checkComp="VideoDetails"/>
</div>
      
    
    </div>
  )
}

export default VideoDetails
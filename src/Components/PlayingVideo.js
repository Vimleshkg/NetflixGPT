import React, { useEffect } from 'react'
import { options } from './Constant'
import { useSelector } from 'react-redux';
import usePlayingVideo from './usePlayingVideo';

const PlayingVideo = ({videoId,height}) => {

 usePlayingVideo(videoId);
 
   const playVideo = useSelector((store)=>store.video.playingVideo)
   if(!playVideo) return;

   const filteredVideo =playVideo.filter((video)=>{
    return video.type=="Trailer"
    
   })

  playVideo && console.log(playVideo)
  return (
    <div className='w-full'>
       
        <iframe  style={{ height:height}} className=' aspect-square w-full md:aspect-video'
         src={"https://www.youtube.com/embed/"+filteredVideo[0]?.key+"?autoplay=1&mute=1"}
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowfullscreen>

        </iframe>

    </div>
  )
}

export default PlayingVideo
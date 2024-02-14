import React, { useEffect, useState } from 'react'
import { options } from './Constant'
import useGetNowVideo from './useGetNowVideo'
import PlayingVideo from './PlayingVideo';
import { useDispatch, useSelector } from 'react-redux';
import TitleVideo from './TitleVideo';
import { addPlayingVideoId, addRandomVideoId } from '../Utils/VideoSlice';
import SearchMovie from './SearchedMovie';

const MainVideoContainer = () => {
  
  const isUser = useSelector((store)=>store.user);
  const selectNowPlaying = useSelector((store)=>store?.video?.videoList?.nowPlaying);
  const randomVideoId = useSelector((store)=>store.video.randomVideoId)


  if( !selectNowPlaying ) return;

  //const random= Math.floor((Math.random() * selectNowPlaying.length) + 1);
   

  
    
  return (
  
    <div className='relative '>
     
     <TitleVideo videoTitle={selectNowPlaying[randomVideoId]?.original_title} description={selectNowPlaying[randomVideoId]?.overview } videoId={selectNowPlaying[randomVideoId]?.id}/>
    < PlayingVideo videoId={selectNowPlaying[randomVideoId]?.id }/>
      
    </div>
  
 )
}

export default MainVideoContainer
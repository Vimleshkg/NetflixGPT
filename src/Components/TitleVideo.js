import React from 'react'
import { Link } from 'react-router-dom'
import { addPlayingVideoId } from '../Utils/VideoSlice'
import { useDispatch } from 'react-redux'

const TitleVideo = ({videoTitle, description, videoId}) => {

  const dispatch= useDispatch();

  return (
    <div className='absolute z-10 h-[14%] left-[10%] top-[30%]  md:top-[22%]  '>

     <h1 className='font-bold overflow-x-hidden no-scrollbar md:text-4xl mb-1  text-white md:mb-4'>{videoTitle}</h1> 
     
     <div className='  h-[60%] md:h-[80%] no-scrollbar overflow-y-scroll'>
      <h1 className=' text-white text-xs md:text-md  w-2/4 md:w-1/4'>{description}</h1>
     </div>
     
     <div className='mt-[6px] md:mt-3'>
      
        <Link onClick={()=>{ dispatch( addPlayingVideoId(videoId)) }} to={'/videoPlay/'+videoId} >  <button  className='bg-white rounded-md  text-md p-[3px] text-sm md:text-lg md:p-2 px-5 md:px-10'>Play</button> </Link>
        <button className='bg-white rounded-md text-md p-[2px] text-sm md:text-lg md:p-2 px-4 md:px-8 ml-2' >More info</button>
     </div>

    </div>
  )
}

export default TitleVideo
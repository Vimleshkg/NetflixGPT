import React from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addPlayingVideoId } from '../Utils/VideoSlice'


const VideoList = ({List, checkComp}) => {

  const dispatch = useDispatch();

  return (
    <div className=' px-2  md:p-6'>
    <div className='flex overflow-x-scroll no-scrollbar  '>  
    <div className='flex '>
      
    { checkComp == "VideoDetails"? List && List.map((videoPoster)=>{
            return <div className='p-1  hover:translate-y-4 duration-75 mr-2 flex flex-col items-center shadow-lg border border-1 rounded-md bg-gray-600'>
             <VideoCard poster={videoPoster.profile_path}/>
               <h4>{videoPoster.name}</h4>
              </div> 
    })
     : 
    List.map((videoPoster)=>{
        
        return <Link key={videoPoster?.id} to={'/videoPlay/'+videoPoster?.id} onClick={()=>{ dispatch( addPlayingVideoId(videoPoster.id) ) }}> <VideoCard poster={videoPoster.poster_path}/> </Link>
    })
  
      }

    </div>
    </div>
    </div>
  )
}

export default VideoList
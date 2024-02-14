import React from 'react'
import PlayingVideo from './PlayingVideo'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './Header'
import VideoHeader from './VideoHeader'
import VideoDetails from './VideoDetails'


const VideoPlay = () => {
const videoId = useSelector((store)=> store.video.playingVideoID)

  return (
    <div className='text-black w-screen h-screen aspect-video'>
     <VideoHeader/>

      <div className='h-screen'>
      <PlayingVideo height={'100vh'} videoId={videoId}/>
      {
    
      console.log(videoId)
      
      }
      </div>
        <div className='bg-gradient-to-b relative from-black pt-5 to-gray-500' >
        <VideoDetails videoId={videoId}/>

        </div>
        

    </div>
  )
}

export default VideoPlay
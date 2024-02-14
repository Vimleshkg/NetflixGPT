import React from 'react'
import { movieImage } from './Constant'

const VideoCard = ({poster}) => {
if(!poster) return;

  return (
    <div className=' w-24 md:w-40 p-1 md:p-2'>
        <img alt="video" src={movieImage + poster}/>
    </div>
  )
}

export default VideoCard
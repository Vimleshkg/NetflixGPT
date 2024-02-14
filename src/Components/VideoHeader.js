import React from 'react'
import { Link } from 'react-router-dom'

const VideoHeader = () => {
  return (
    <div>
         <div className='absolute  bg-gradient-to-b from-black h-[30%] w-full z-50 '>
       <Link to="/"> <img className='h-16 md:h-24 md:ml-6  md:-mt-1'  src=" https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" /> </Link> 
       </div>
    </div>
  )
}

export default VideoHeader
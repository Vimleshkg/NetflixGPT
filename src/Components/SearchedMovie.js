import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Shimmer from './Shimmer';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { addPlayingVideoId } from '../Utils/VideoSlice';


const SearchedMovie = () => {

  const selectSearchedMovie = useSelector((store)=>store.video.searchVideoList);
  const dispatch= useDispatch();

  return !selectSearchedMovie ? <Shimmer/> :(

    <div className=' absolute top-[18%] z-10 mx-[10%]  text-white bg-slate-200 '>

      <div className=' flex mt-4 flex-wrap justify-center '>
   
    {
      selectSearchedMovie.map((videoPoster)=>{
        return <Link to={"/VideoPlay/"+ videoPoster.id} onClick={()=> dispatch(addPlayingVideoId(videoPoster.id))}> <VideoCard poster={videoPoster.poster_path}/> </Link>
      })
    }

    </div>

    </div>
  )
}

export default SearchedMovie
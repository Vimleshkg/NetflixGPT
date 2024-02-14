import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from './Constant';
import { CastUpdate,  } from '../Utils/VideoDetailsSlice';

  const useCastDetails = (videoId) => {
 
    const dispatch= useDispatch();
      
       async function getData(){
         const data= await fetch("https://api.themoviedb.org/3/movie/"+videoId+"/credits?language=en-US", options)
          const jsonData= await data.json();
      
         jsonData &&  dispatch(CastUpdate(jsonData?.cast));
       }
       useEffect(()=>{
        getData()
      },[]);
      
    }
   

export default useCastDetails
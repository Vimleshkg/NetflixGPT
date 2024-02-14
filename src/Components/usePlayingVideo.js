import { useEffect } from "react";
import { options } from "./Constant";
import { useDispatch } from "react-redux";
import { addPlayingVideo } from "../Utils/VideoSlice";

const usePlayingVideo = (videoId) => {
    const dispatch= useDispatch();

    async function getData(){
        const data = await fetch('https://api.themoviedb.org/3/movie/'+videoId+'/videos?language=en-US', options);
        const jsonData = await data.json();
       
         dispatch(addPlayingVideo(jsonData?.results))
      }

   useEffect(()=>{
     getData();
   },[])
}

export default usePlayingVideo
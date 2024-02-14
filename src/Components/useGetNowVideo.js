import { useDispatch } from "react-redux";
import { addnowPlaying } from "../Utils/VideoSlice";
import { useEffect } from "react";
import { options } from "./Constant";

const useGetNowVideo = () => {
 
    const dispatch = useDispatch();
   
     async function getData(){
     const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
     const json = await data.json();
     console.log(json?.results);
     dispatch(addnowPlaying(json.results));

     }
     useEffect(()=>{
        getData();
     },[]);
 
  
}

export default useGetNowVideo
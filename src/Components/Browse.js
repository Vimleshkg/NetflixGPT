import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header';
import MainVideoContainer from './MainVideoContainer';
import SecondaryVideoContainer from './SecondaryVideoContainer';
import useGetNowVideo from './useGetNowVideo';
import GptPage from './GptPage';
import SearchedMovie from './SearchedMovie';
import Footer from './Footer';

const Browse = () => {

  const GptToggler= useSelector((store)=> store.config.isGptToggle);
  const isSearchToggler= useSelector((store)=> store.config.SearchMovieToggle);
  const isVideoList= useSelector((store)=>store?.video?.videoList?.nowPlaying)
  
  useGetNowVideo(); 

  return (
    <>
    { 
      GptToggler && <div className='absolute h-10 w-full h-full z-20'> <GptPage/> </div>
    }
    <div>
   
      <Header checkComp='browse'/>
     {
      isSearchToggler ? <SearchedMovie/> 
      :
      <>
     <MainVideoContainer/>
     <SecondaryVideoContainer/>
     { 
     isVideoList ? <Footer/> : ""
     }
     </>

     }
    </div>
    </>
  )
}

export default Browse
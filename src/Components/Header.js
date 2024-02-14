import React, { useEffect, useRef, useState } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserData, removeUserData } from '../Utils/UserSlice';
import {  signOut } from "firebase/auth";
import { GptToggler, SearchMovieToggler } from '../Utils/ConfigSlice';
import { options } from './Constant';
import { AddSearchedVideo } from '../Utils/VideoSlice';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({checkComp}) => {


const Navigate =useNavigate();
const dispatch = useDispatch();

const [isClick, setIsClick] = useState(false);



 useEffect(()=>{
   
  // onAuthStateChange execute whenever any action(siginUp/signIn/signOut ) performed on firebase 
  const unSubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      //SignIn or signUp
      const {uid,email,displayName} = user;
      dispatch(addUserData({uid:uid, email:email, displayName:displayName}))
     
      Navigate("/browse");

    } else {
      dispatch(removeUserData());
      Navigate("/")
    }
  });

  return ()=>unSubscribe();

 },[])



 function handleClick(){

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
    }

    //for Search Movies
    
    const searchRef = useRef(null);

    async function handleSearchClick(){
     
      if(searchRef.current.value)
       { 
        const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+searchRef.current.value+'&include_adult=false&language=en-US&page=1', options);
        const jsonData = await data.json();
       
      dispatch(AddSearchedVideo(jsonData?.results));

       jsonData?.results && dispatch(SearchMovieToggler(true));

      }
     else return;

     }
    
  return (
    <div className='relative z-10'>
        {
        checkComp=='login' ?
         <div className='absolute  bg-gradient-to-b w-full z-50 from-black'>
        <img className='h-16 md:h-24 md:ml-6  md:-mt-1'  src=" https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
       </div>

       :

     <div className=' absolute bg-gradient-to-b w-full aspect-video z-10  grid grid-flow-col  mt-0 md:-mt-2 from-black'>

       <img  onClick={()=>dispatch(SearchMovieToggler(false)) } className='h-12 md:-mt-1 md:h-20 ml-2 md:ml-6  '  src=" https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" /> 

        <div className='mt-2 md:mt-5 mx-4 flex justify-center h-10 '>
          <input ref={searchRef}  className='bg-white border-2 border-red-600 shadow-lg rounded-md text-xs md:text-lg py-0 md:py-1  px-4 w-[70%] md:w-full my-1  ' type="text"  placeholder='Search Movies'/>
          <button  onClick={handleSearchClick} className='w-7 md:w-10 text-white shadow-lg text-sm ml-1 my-1 py-0 px-1  md:p-1 md:px-2 bg-purple-600 rounded-md  '> 
          <SearchIcon/>
            </button>
        </div>


      <div className='flex justify-end -mt-2 md:mt-0'>
        <div  className='mt-5 md:mr-0 rounded-md   w-20  text-center  flex justify-center h-8' >
          <button onClick={()=>{ dispatch(GptToggler()) }} className=' text-white text-sm md:ml-2 p-1 px-3 rounded-md  bg-purple-600 '>GPT</button>
        </div >
             
          <div className=' mt-5 md:mt-4 ml-0   md:ml-4  md:m-4 mr-3 md:mr-8' >
            <img className=' w-7 h-7 rounded-sm  md:w-9  md:h-9' onClick={()=> setIsClick((prev)=>!prev)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEWqAAH9+/v///+mAACkAACsAAD9+Pjy3d357u779PT46+vEZGTpyMj78fHHa2vBXV27SUnow8PkvLzu09PJd3faoKC9T0/Mf3/jtrbRjIy2PDyvCgv14+Px1tbbqKiuEhO2MDHSkZKzKCm5OTrTj4+wHyC5Q0PMenrBYGHWmZmwGxvit7fZoqKuERG+U1Njkco2AAAD20lEQVR4nO3ba3eaTBSGYZjhqCIqiCdi1SQ2Jnnz/3/ei5qD4iQtcSu0va8P7VpZ7V7PZmA4ZMayAAAAAAAAAAAAAAAAAAAAAAAAAACNpl81I4V4DG3F45tQqSiZ92rsUf9I+76nVJDMM0s0h05zpZRdKP7q1NajngT7GMWfyu8KxnD7+/b2lD1y5GpXcRxDDcQKz/yDwrvikzpGUffLMRKpykmpclE7FqpdJcbkNMZA5Ejr0UllW/kSlatxA0OOtkhpQ2VbSV7mv0Wnphi+wIxgrGyrztU7LF+F+xwLgcpPpsp2dH7lapzQFEMtBY50eSJ9Lb06v3IlrjnG+PwO3dxcuieQuoqFOUb/ch2+CKSuYm2OITEfNGQMs4udpYb7/a70ta/DW3OMjUCHS+Ms3RIIXY25w7VA5Z6xQ5nnpQoc07mkAol3AONpevWJxrJiU4w7kQNtmMWu/0hjfgEIXJnSm3JpFd6LVK5mEZ7kaAsdaD04Lq28aS3vh7FXyiFzju4MD16ulfJv6/mMoXuHrzlK9D1cZ756E03k6lY29N5zJGvZ46yzod9qtfx5V/YbV9UY7miQb3MML/A5TDuWa9X9uXT3wdS1GpADAAAAAAAAAAAAQKM0YPvHJWmr+5zkSVp/i5dJoH/Mw/2v82vZNnAoS3vyTerp+HWDi62iR+nqlZLslnDkE1eyR617hztL6tgY8WFl77fwBHdi46h1NzncOWOrn3Xuwxqrt8U93lBkHPXjsqVKC6O6AnW/yzlYwqS8+blLxfSs3Vel/orr8NpLeY8iHS21U3an/f3bl7YexuXh2x24h1oXMJXWSyrVer53qifSjm6Pg5Ph2y2xW9V6s9Ddk+WSRabNtMqKJq3d6aSjDO1tz9C6tgm+czam4678p/R3uiweyR7jSSc3dlfUCWVmr/Po9GTV675JL+8vuyvLMT1Zbn/m6FV7Ms4D8+BtS0Sb+/r7s7ZPV0+fRdz+PB/Mh2m2mr1vYHZniyzdzAf+278wKp4iRrUukTzirDufJrXfF4sqLwqi8GPx6Kf/Y3dz7cTfmK8uSGcD76vIlRTDt1zUPb+c0otNINFjMbs8Ce9SF6N1u3/eQG7P5H67oe3tObNREn55hX3ZXmuQNuDm8Atar7p907PJL9u7mcfNb29P61nv+ebryfK4ORUORotGn5yntGPFmyTyPrsrfNxBQn8+Kh5k/6z2XhVdTtNNx29FqsSLWrnvd+Z36cOt9Yd2966I/99inb3E7e7WQ/ySZevb1aP7t38nBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Nf9D3KSJy2nKoSaAAAAAElFTkSuQmCC"/>
            { isClick ? <h1 onClick={()=>handleClick()} className=' z-50 mt-1 w-14  px-1 md:w-auto right-0  cursor-pointer text-xs  md:text-sm font-medium   md:mr-0 text-white md:px-3 md:pb-1  md:right-2 rounded-md bg-red-800 md:my-2 md:top-12 absolute ' >Sign Out</h1> : ""}
          </div>  
       </div>
       </div>
      }
    </div>
  )
}

export default Header
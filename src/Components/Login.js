import React, { useState, useRef, useEffect } from 'react'
import { formValidation } from './formValidtion';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserData } from '../Utils/UserSlice';
import Header from './Header';


const Login = () => {

    const [checkValid, setCheckValid] = useState(null);
    const [isLogin, setIsLogin] = useState(true);
    
    const name =useRef(null);
    const email =useRef(null);
    const password =useRef(null);


    const dispatch =useDispatch();
    const Navigate =useNavigate();

   const validateData=()=>{
   
      const validMessage= formValidation( email.current.value, password.current.value);
       setCheckValid(validMessage);

       if(validMessage) return;

     // Signed up 
  if(!isLogin){
      createUserWithEmailAndPassword(auth,  email.current.value,  password.current.value)
     .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName:name.current.value,
    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setCheckValid(errorCode+" - "+ errorMessage);
    // ..
  });

    }
    
    // Signed in 
   else{
   signInWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
    
     const user = userCredential.user;

    // ...
    })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setCheckValid(errorCode+" - "+ errorMessage)
  });

    }
   }

     

  return (
    <div className=''>
      <Header checkComp='login'/>

    <img className=' w-12/12 \ w-screen h-screen object-cover   absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>

       <form onSubmit={(e)=> e.preventDefault() } className=' w-[80%] sm:w-[60%]  mt-24 md:mt-20  mx-auto left-0 right-0 p-6 pb-10 md:pb-6  md:h-5/6  md:w-[30%] md:px-16 bg-black bg-opacity-80  text-white absolute'>

       <h1 className=' text-2xl font-medium mt-4 mb-5'>{ !isLogin ? "Sign Up" : "Sign In" }</h1>
       { !isLogin ? <input ref={name}  className=" p-3 mt-4 md:mt-0 rounded-md bg-stone-700  text-sm w-full" type="text" placeholder='Enter Name'/> 
       : "" }
       <input ref={email} className=" p-3 mt-4  rounded-md bg-stone-700  text-sm shadow-lg  w-full" type="text" placeholder='Enter the Email '/>
       <input ref={password}  className=" p-3 my-4 text-sm rounded-md bg-stone-700 shadow-lg w-full" type="password" placeholder='Password'/>

       <span>{checkValid}</span>

       <button onClick={validateData} className=' mt-5  p-3 shadow-lg rounded-md w-full bg-red-600'> {!isLogin ? "Sign Up" : "Sign In" } </button>

       <p className='mt-10 mb-6 md:mt-8 text-md'> {!isLogin ? "Already registerd? " : "New to Netflix? " }<span  className='font-medium cursor-pointer' onClick={()=>setIsLogin((prev)=>!prev)} >{!isLogin ? "Sign In Now" : "Sign Up Now" }</span></p>

       </form>

    </div> 

   
  )
}

export default Login
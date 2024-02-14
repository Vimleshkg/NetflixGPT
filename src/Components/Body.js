import React, { useEffect } from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'

import { useDispatch, useSelector } from 'react-redux'
import VideoPlay from './VideoPlay'



const myRouter = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element:<Browse/>
    },
    {
      path:'/videoPlay/:id',
      element:<VideoPlay/>,
     
    },

])


const Body = () => {
  const selectUser =useSelector((store)=>store.user);

  return (
    <>
   
   </>
  )
}

export default Body
export {myRouter};
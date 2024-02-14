import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
       { Array(20).fill("").map((e)=>{
            return <div className='h-[10%] w-[8%] bg-slate-200'></div>
        })
    }
    </div>
  )
}

export default Shimmer
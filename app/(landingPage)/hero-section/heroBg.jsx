import React from 'react'

const heroBg = () => {
  return (
    <div className='absolute top-20 left-0 w-full h-full' >
      <div className=" heroCircleCon c1 absolute bottom-[50%] md:bottom-[30%] lg:bottom-2 left-1/2 -translate-x-1/2 w-[55%] aspect-square rounded-full  blur-xs opacity-60 ring-1 ring-[#f2c204] flex justify-center items-center  ">
      <div className="c2 w-[67%] aspect-square rounded-full  ring-2 ring-[#f2c204] opacity-100! flex justify-center items-center  ">
      <div className="c3 w-[67%] aspect-square rounded-full  ring-2 ring-[#f2c204] opacity-100! flex justify-center items-center  "></div>

      </div>
      </div>
      <>
      <div className="absolute w-[15%] aspect-square  bg-[var(--hero-pink)] rounded-full blur-[5rem] bottom-0  -translate-x-1/2 left-10  z-1 opacity-60 "></div>

      {/* <div className="absolute w-[15%] aspect-square  bg-[var(--hero-pink)] rounded-full blur-[5rem] bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-1  opacity-60 "></div> */}

      <div className="absolute w-[15%] aspect-square  bg-[var(--hero-pink)] rounded-full blur-[5rem] top-0 right-0 translate-x-1/2   z-1  opacity-60 "></div>
    
      <div className="absolute bottom-0 w-full h-[10%] bg-linear-to-b from-transparent to-white  "></div>
      </>
    </div>
  )
}

export default heroBg
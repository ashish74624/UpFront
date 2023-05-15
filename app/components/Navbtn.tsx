import React from 'react'

export default function Navbtn({msg}:any) {
  return (
    <>
     <button className='md:bg-black md:w-max md:h-max w-0 h-0 px-4 py-2 lg:px-4 lg:py-2 hover:bg-white md:text-white bg-transparent text-transparent hover:text-black transition duration-300 ease-in rounded-full '>{msg}</button> 
    </>
  )
}

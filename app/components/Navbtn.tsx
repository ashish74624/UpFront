import React from 'react'

export default function Navbtn({msg}:any) {
  return (
    <>
     <button className='animate-slideIn bg-black w-max h-max  px-4 py-2 hover:bg-white text-white  hover:text-black transition duration-300 ease-in rounded-full '>{msg}</button> 
    </>
  )
}

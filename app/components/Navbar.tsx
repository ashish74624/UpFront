import React from 'react'

export default function Navbar() {
  return (
    <div className=' bg-slate-700 shadow-sm w-full  z-30 flex justify-center fixed bg-opacity-30 bg-clip-padding blur-background-filter'>
        <nav className=' bg-transparent  z-20 text-black flex items-center lg:h-[10vh] max-w-screen-xl justify-between w-full '>
        <p className='lg:text-2xl  flex flex-row text-black font-bold'>
            <img className='h-10 w-10' src="/Upfront-logo.png" alt="" />
            UpFront
            </p>
        <button className='bg-black w-max h-max lg:px-4 lg:py-2 hover:bg-white text-white hover:text-black transition duration-300 ease-in rounded-full'>Get Started</button>
        </nav>
    </div>
  )
}

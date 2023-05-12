import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-yellow-600 flex items-center lg:h-[8vh] w-screen justify-between lg:py-[4vw]'>
      <p className='lg:text-lg'>UpFront</p>
      <button className='bg-black w-max h-max lg:px-4 lg:py-2 hover:bg-white lg:text-white transition duration-300 ease-in'>Get Started</button>
    </nav>
  )
}

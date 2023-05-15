import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Navbtn from './Navbtn'

const playfair = Playfair_Display({
  subsets:["vietnamese"],
  weight:'400'
})


export default function Navbar({btnmsg}:any) {
  return (
    // className=' bg-slate-700 shadow-sm w-full  z-30 flex justify-center fixed bg-opacity-30 bg-clip-padding blur-background-filter'
    <div className=' bg-[#F5C347] shadow-sm w-full  z-50 flex justify-center fixed border-b-2 border-black'>
        <nav className=' bg-transparent  z-20 text-black flex items-center h-[6vh] md:h-[8vh] lg:h-[10vh] max-w-screen-xl md:justify-between w-full justify-center lg:px-6 md:px-3 px-0'>
        <p className={`${playfair.className} text-2xl  flex flex-row text-black font-bold `}>
            <Image className='h-10 w-10' src="/Upfront-logo.png" alt="LOGO" width={100} height={100}/>
            UpFront
            </p>

          <Link href={'/Categories'}>
            <Navbtn msg = {btnmsg}/>
          </Link>
        </nav>
    </div>
  )
}

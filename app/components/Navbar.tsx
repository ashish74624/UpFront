import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Navbtn from './Navbtn'
import Back from './Back'

const playfair = Playfair_Display({
  subsets:["vietnamese"],
  weight:'400'
})


export default function Navbar({btnmsg,back}:any) {
  if(back===undefined){
    back = false;
  }
  return (
    <div className=' bg-[#F5C347] dark:bg-yellow-600 shadow-sm w-full  z-50 flex justify-center fixed border-b-2 border-black'>
        <nav className=' bg-transparent  z-20 text-black flex items-center min-h-[55px] h-[7vh] md:h-[8vh] lg:h-[10vh] max-w-screen-xl justify-between w-full  lg:px-6 md:px-3 px-6'>
          <Link href={'/'}>
        <p className={`${playfair.className} animate-slideIn text-2xl  flex flex-row text-black font-bold `}>
            <Image className='h-10 w-10' src="/UpFront-logo.png" alt="LOGO" width={100} height={100}/>
            UpFront
            </p>
            </Link>
            {
              back?(
            <Link href={`/Categories`}>
            <Navbtn msg = {btnmsg} />
            </Link>):
            (
              <Back/>
            )
}
        </nav>
    </div>
  )
}

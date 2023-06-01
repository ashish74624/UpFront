import React from 'react'
import { Merriweather } from 'next/font/google'
import Newspaper from './Newspaper'
import Link from 'next/link'


const merriweather = Merriweather({
  subsets : ["latin-ext"],
  weight:'300'
})


export default function Poster() {
  return (
    <>
      <section
        className={` animate-fadeIn relative bg-transparent md:bg-[#F5C347] md:dark:bg-yellow-600  h-max  md:h-[45vh] lg:h-[56vh] w-screen flex flex-col md:flex-row items-center md:justify-between md:pl-14 md:mt-[5vh] mt-[6vh] lg:mt-[4vh] lg:pl-32 ${merriweather.className} overfolw-clip z-0 `}>
        <div className='pt-4 md:pb-0 pb-7 md:pt-0 space-y-8 md:space-y-10 md:px-0 px-4 md:bg-transparent md:w-max w-screen  bg-[#F5C347] dark:bg-yellow-600'>
            <p className='text-black text-7xl lg:text-[80px] md:text-6xl '>Stay curious</p>
            <div>
            <p className='text-black text-3xl md:text-xl '>Discover stories, thinking and expertise</p>
            <p className='text-black text-3xl md:text-xl '>from writers on any topic</p>
            </div>
            
            
            <button className='bg-black  w-max lg:w-48 h-max px-4 py-2 hover:bg-white text-white hover:text-black transition duration-300 ease-in rounded-full'>
            <Link href={`/Trending`}>Start Reading</Link>
            </button>
        </div>
        <div className='relative top-4 h-0 md:h-min bg-transparent'>
        <Newspaper/>
        </div>
      </section>
    </>
  )
}

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
        className={`relative bg-[#F5C347] lg:h-[62vh] w-screen flex items-center justify-between lg:pl-32 ${merriweather.className} overfolw-clip z-0 `}>
        <div className=' space-y-10'>
            <p className='text-black text-8xl'>Stay curious</p>
            <div>
            <p className='text-black text-xl'>Discover stories, thinking and expertise</p>
            <p className='text-black text-xl'>from writers on any topic</p>
            </div>
            
            <button className='bg-black lg:w-48 h-max lg:px-4 lg:py-2 hover:bg-white text-white hover:text-black transition duration-300 ease-in rounded-full'>
            <Link href={`/Categories`}>Start Reading</Link></button>
        </div>
        <div className='relative top-4'>
        <Newspaper/>
        </div>
      </section>
    </>
  )
}

import React from 'react'
import { Oswald} from 'next/font/google'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { Metadata } from 'next'
import { PT_Serif } from "next/font/google";

const serif = PT_Serif({
  subsets : ['cyrillic'],
  weight : '400'
})

const polt = Oswald({
  subsets:['vietnamese'],
  weight:'400'
})

export const metadata: Metadata={
  title:'UpFront | Categories',
  description:'Choose the categories ypu would like to see',
}


export default function Categories() {
  return (
    <main className='h-screen dark:bg-[#1e1e1e]'>
      <Navbar btnmsg="Categories" back ={true} />
      <p className={`${serif.className} dark:text-white text-xl pb-4 flex w-screen justify-center pt-[8vh] md:pt-[10vh] lg:pt-[12vh] lg:text-2xl`}>Choose the Categories you would like to see</p>
    <section className={`${polt.className}  w-screen  flex justify-center `} id="categories">  
      <div className='grid grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-3 gap-x-2 md:gap-x-2 gap-y-2'>
      <Link href={'/Categories/Buisness'}><div className='btn'>
          Buisness
        </div></Link>
        <div className='btn'>
          <Link href={'/Categories/Finance'}>Finance</Link>
        </div>
        <div className='btn'>
          <Link href={'/Categories/Science'}>Science</Link>
        </div>
        <div className='btn'>
          <Link href={'/Categories/Health'}>Health</Link>
        </div>
        <div className='btn'>
          <Link href={'/Categories/Enviroment'}>Enviroment</Link>
        </div>
        <div className='btn'>
          <Link href={'/Categories/Sports'}>Sports</Link>
        </div>
        <div className='btn'>
          <Link href={'/Categories/Education'}>Education</Link>
        </div>
        <div className='btn'>
          <Link href={'/Categories/Politics'}>Politics</Link>
        </div>
      </div>
    </section>
    </main>
  )
}

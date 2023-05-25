import React from 'react'
import { Oswald} from 'next/font/google'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { Metadata } from 'next'

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
      <Navbar btnmsg="Choose the Categories you would like to see" />
    <section className={`${polt.className} pt-[8vh] md:pt-[10vh] lg:pt-[12vh] flex justify-center `} id="categories">
      <div className='grid grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-3 gap-x-10 md:gap-x-4 gap-y-1'>
      <Link href={'/Categories/Buisness'}><div className='text-xl lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max  py-2 px-4 md:px-5 rounded-full'>
          Buisness
        </div></Link>
        <div className='text-xl lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max  py-2 px-5 rounded-full'>
          <Link href={'/Categories/Finance'}>Finance</Link>
        </div>
        <div className='text-xl lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max  py-2 px-5 rounded-full'>
          <Link href={'/Categories/Science'}>Science</Link>
        </div>
        <div className='text-xl lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max  py-2 px-5 rounded-full'>
          <Link href={'/Categories/Health'}>Health</Link>
        </div>
        <div className='text-xl lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max  py-2 px-5 rounded-full'>
          <Link href={'/Categories/Enviroment'}>Enviroment</Link>
        </div>
        <div className='text-xl lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max  py-2 px-5 rounded-full'>
          <Link href={'/Categories/Sports'}>Sports</Link>
        </div>
        <div className='text-xl lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max  py-2 px-5 rounded-full'>
          <Link href={'/Categories/Education'}>Education</Link>
        </div>
        <div className='text-xl lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max  py-2 px-5 rounded-full'>
          <Link href={'/Categories/Politics'}>Politics</Link>
        </div>
      </div>
    </section>
    </main>
  )
}

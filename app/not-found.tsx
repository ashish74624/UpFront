import React from 'react'
import Navbar from './components/Navbar'

export default function notfound() {
  return (
    <>
     <Navbar btnmsg="Dynamic Page"/>
    <section className='md:mt-[5vh] mt-[6vh] lg:mt-[4vh]  dark:bg-[#1e1e1e] h-screen w-screen justify-center flex items-center text-2xl dark:text-white'>
        This Page was Created using Next js Dynamic routes , which are currently not supported on GitHub Pages/ Vercel.
        <br/>
        We will get it working shortly.
    </section> 
    </>
  )
}

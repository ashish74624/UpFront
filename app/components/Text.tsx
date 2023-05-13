import React from 'react'

export default function Text() {
  return (
    <>
      <section className="absolute bg-[#F5C347] lg:h-[62vh] w-screen flex flex-col justify-center lg:pl-32">
        <div className=' space-y-10'>
            <p className='text-black text-8xl'>Stay curious</p>
            <div>
            <p className='text-black'>Discover stories, thinking and expertise</p>
            <p className='text-black'>from writers on any topic</p>
            </div>
            <button className='bg-black w-max h-max lg:px-4 lg:py-2 hover:bg-white text-white hover:text-black transition duration-300 ease-in rounded-full'>Start Reading</button>
        </div>
      </section>
    </>
  )
}

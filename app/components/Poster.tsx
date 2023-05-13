import React from 'react'
import Image from 'next/image'

export default function Poster() {
  return (
    <main className='realtive'>
    <div className='lg:h-[62vh] w-screen z-0 relative'>
      <Image src='/upfront.png'
      alt='Poster'
      fill={true}
      loading='lazy'
      />
    </div>
    
    </main>
  )
}

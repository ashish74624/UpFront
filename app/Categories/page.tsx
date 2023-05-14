import React from 'react'
import { Lora, Playfair_Display,Poltawski_Nowy} from 'next/font/google'
import Image from 'next/image'

const lora = Lora({
  subsets:['latin-ext'],
  weight:'400'
})

const playfair = Playfair_Display({
  subsets:["vietnamese"],
  weight:'400'
})

const polt = Poltawski_Nowy({
  subsets:['vietnamese'],
  weight:'400'
})

export default function Categories() {
  return (
    <>
      <div className=' bg-[#F5C347] shadow-sm w-full  flex justify-center fixed border-b-2 border-black'>
        <nav className=' bg-transparent text-black flex items-center lg:h-[10vh] max-w-screen-xl justify-between w-full '>
        <p className={`${playfair.className} lg:text-2xl  flex flex-row text-black font-bold`}>
            <Image className='h-10 w-10' src="/Upfront-logo.png" alt="LOGO" width={100} height={100}/>
            UpFront
            </p>
        <p className={`${lora.className} bg-black w-max h-max lg:px-5 lg:py-3  text-white rounded-full`}>
          Choose the categories you would like to see
        </p>
        </nav>
    </div>
    <section className={`${polt.className} lg:pt-[12vh] flex justify-center`} id="categories">
      <div className='grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-1'>
        <div className='lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max lg:py-2 lg:px-5 rounded-full'>Buisness</div>
        <div className='lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max lg:py-2 lg:px-5 rounded-full'>Finance</div>
        <div className='lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max lg:py-2 lg:px-5 rounded-full'>Science</div>
        <div className='lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max lg:py-2 lg:px-5 rounded-full'>Health</div>
        <div className='lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max lg:py-2 lg:px-5 rounded-full'>Enviroment</div>
        <div className='lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max lg:py-2 lg:px-5 rounded-full'>Sports</div>
        <div className='lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max lg:py-2 lg:px-5 rounded-full'>Education</div>
        <div className='lg:text-2xl w-max bg-gray-300 hover:bg-gray-400  h-max lg:py-2 lg:px-5 rounded-full'>Politics</div>
      </div>
    </section>
    </>
  )
}

"use client"

import Image from "next/image"

export default function Newspaper() {
  return (
    <div className="lg:pr-32 w-0 md:h-min h-min md:w-[40vw] lg:w-[35vw] shadow-lg rounded-l-full pl-20 shadow-yellow-600 dark:shadow-yellow-400">
      <Image src={'/newsppr.png'} alt='Newspaper' width={400} height={100} loading="lazy" onLoad={()=>{console.log("Image")}} />
    </div>
  )
}

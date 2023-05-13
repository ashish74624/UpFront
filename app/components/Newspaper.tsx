"use client"

import Image from "next/image"

export default function Newspaper() {
  return (
    <div className="lg:pr-32 w-[35vw] shadow-lg rounded-l-full pl-20 overflow-clip shadow-yellow-600 ">
      <Image src={'/newsppr.png'} alt='Newspaper' width={400} height={64} loading="lazy" onLoad={()=>{console.log("Image")}} />
    </div>
  )
}

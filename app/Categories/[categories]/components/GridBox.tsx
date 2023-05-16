"use client"

import Link from "next/link";

export default function GridBox({url,image,title}:any) {
  return (
    <>
    <Link href={`/article/${title}`}>
      <div key={url}
        className=" w-[70vw] h-[30vh] md:w-64 md:h-44 lg:w-72 relative lg:h-56 flex rounded-2xl overflow-hidden md:mb-0 mb-3">
            <div className="absolute">
            <img className="w-[70vw] h-[30vh] md:h-60 md:w-80" src={image ? image : '/UpFront-placeholder2.png'} alt="Image"  onError={(e:any) => {
            const target = e.target as HTMLImageElement;
            target.src = '/UpFront-placeholder2.png'
      }} />
            </div>
            <p className="relative  z-10 self-end pb-1 pl-1 w-full h-max pt-2 text-white bg-gradient-to-t from-black via-gray-800/80  to-transparent">
                {title}
            </p>
        </div> 
    </Link>
    </>
  )
}

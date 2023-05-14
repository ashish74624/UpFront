"use client"

// import Image from "next/image"


export default function Img({url }:any ) {
  return (
    <>
      <div className="">
        <img className=" h-60 w-80" src={url ? url : '/UpFront-placeholder2.png'} alt="Image"  onError={(e:any) => {
            const target = e.target as HTMLImageElement;
            target.src = '/UpFront-placeholder2.png'
        // e.target.src = {'/UpFront-placeholder.png'};
      }} />
    </div>
    </>
  )
}

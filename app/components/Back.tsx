"use client"
import React from 'react'
import { useCtg } from "@/app/Context/CtgContext";
import Link from 'next/link';
import Svg from './Svg';


export default function Back() {
  const { ctg,setCtg }:any = useCtg();
  if(ctg===undefined){
    setCtg(" ")
  }
   
  return (
    <Link href={`/Categories/${ctg}`}>
    <button className='bg-black h-max w-max rounded-full animate-slideIn px-4 py-2 lg:pl-4 lg:pr-[22px] lg:pb-2 lg:pt-[6.5px] text-white  transition duration-300 ease-in hover:bg-gray-900 text-lg flex items-center'>
      <Svg/> <p className='pl-2 hidden md:block'>Categories</p>
    </button></Link>
  )
}

import getNews from '@/lib/getNews'
import React from 'react'
import Navbar from '../components/Navbar'
import Lorem from '../components/Lorem'
import { Metadata } from 'next'

type Params={
    params:{
        title:string
    }
}

export const metadata: Metadata={
  title:'UpFront | Article'
}

export default async function Article({params:{title}}:Params) {
    const res: Promise<News> = getNews(title)
    const news = await res;
    if(news.totalResults===0){
      return (
        <>
          <Navbar btnmsg="Article"/>
          <div className="w-screen h-screen flex justify-center pt-[12vh] text-4xl text-gray-700">Post Not available</div>
        </>
      )
    }
    const art = news.articles
    
    const Post = art[0]
  return (
    
    <>
    <Navbar btnmsg="Article"/>
    <section className='lg:w-screen lg:pt-[10vh] items-center  flex flex-col pb-10'>
      {
        <main className='pt-2'>
        <div className='relative flex'>
        <h1 className='lg:px-2 rounded-b-xl absolute self-end w-full lg:text-4xl font-bold h-max lg:pb-5 bg-gradient-to-t from-slate-600/80 via-slate-400/70 to-transparent text-gray-800  lg:pt-8' >
          {Post.title || "The Title of this post was Not available"}
        </h1>
        <p className=''><img className=' rounded-xl lg:w-[60vw] lg:h-[65vh]' src={Post.urlToImage ? Post.urlToImage: "/UpFront-placeholder2.png"} alt='Image'/></p>
        </div>
        <p className='lg:w-[60vw] text-base text-gray-500'>{Post.description}</p>
        <p className='lg:w-[60vw] text-xl text-black pt-7'>{Post.content} <Lorem/> </p>
        </main>
      }
      </section>
    </>
  )
}

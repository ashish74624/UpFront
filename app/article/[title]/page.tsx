import React from 'react'
import Navbar from '../../components/Navbar'
import Lorem from '../../components/Lorem'
import { Metadata } from 'next'
import getNews from '@/lib/getNews'

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
    if(news.status==='error'){
      return (
        <>
          <Navbar btnmsg="We will be back in a Moment"/>
          <div className="w-screen h-screen flex justify-center pt-[12vh] text-4xl text-gray-700 dark:bg-[#1e1e1e] dark:text-white">Post Not available</div>
        </>
      )
    }
    if(news.totalResults===0){
      return (
        <>
          <Navbar btnmsg="We will be back in a Moment"/>
          <div className="w-screen h-screen flex justify-center pt-[12vh] text-4xl text-gray-700 dark:text-white dark:bg-[#1e1e1e]">Post Not available</div>
        </>
      )
    }
    const Post = news.articles[0]
    
    // const Post = art[0]
  return (
    
    <>
    <Navbar btnmsg="Back To Categories"/>
    <section className='w-screen min-pt-[65px] pt-[8vh] md:pt-[10vh] lg:pt-[10vh] items-center  flex flex-col pb-10 dark:bg-[#1e1e1e]'>
      {

        Post ?(
        <main className='pt-2'>
        <div className='relative flex shadow-lg '>
        <h1 className='lg:px-2 rounded-b-xl absolute self-end w-[85vw] md:w-[70vw]  lg:w-full text-xl md:text-4xl font-bold h-max lg:pb-5 pb-4 pt-2  bg-gradient-to-t from-slate-600/80 via-slate-400/70 to-transparent text-gray-800  lg:pt-8' >
          {Post.title || "The Title of this post was Not available"}
        </h1>
        <p className=''><img className='shadow-xl rounded-xl h-[40vh] md:w-[70vw] w-[85vw] md:h-[42vh] lg:w-[60vw] lg:h-[65vh]' src={Post.urlToImage ? Post.urlToImage: "/UpFront-placeholder2.png"} alt='Image'/></p>
        </div>
        <p className='w-[85vw] md:w-[70vw] lg:w-[60vw] text-base dark:text-gray-400 text-gray-500'>{Post.description}</p>
        <p className='w-[85vw] md:w-[70vw] lg:w-[60vw] text-xl text-black pt-7 dark:text-white'>{Post.content} <Lorem/> </p>
        </main>
        ):
        (<>
          <div className='flex w-screen h-screen justify-center items-center dark:bg-[#1e1e1e]'>
            Sorry, Post Not Available at the Moment
          </div>
        </>)
      }
      </section>
    </>
  )
}

import React from 'react'
import { PT_Serif } from "next/font/google";
import Navbar from '../components/Navbar';
import getHeadlines from '@/lib/getHeadlines';
import Link from 'next/link';
import { Metadata } from 'next';

const serif = PT_Serif({
    subsets : ['cyrillic'],
    weight : '400'
  })

  export const metadata: Metadata={
    title:'UpFront | Trending',
    description:'See the latest News in India',
  }

export default async function Trending() {
  const postsData : Promise<News> =  getHeadlines();
  const post = await postsData
  if(post.status==='error'){
    return (
      <>
      <Navbar btnmsg="We will be Right back"/>
      <main className="pt-[10vh] relative z-30 bg-white w-screen h-screen flex justify-center items-center  dark:bg-[#1e1e1e] dark:text-white">
        <div className="h-[30vh] md:h-[12vh] lg:h-[14vh] dark:bg-[#1e1e1e] dark:text-white">Data Not Available At the Moment</div>
      </main></>
    )
  }
  const articles = post?.articles;

  return (
    <>
      <Navbar btnmsg="Trending"/>
      <section className="pt-[7vh] md:pt-[9vh] lg:pt-[11vh] relative z-30 bg-white dark:bg-[#1e1e1e] w-screen pb-12 flex justify-center">
      <div>
      <h3 className={`${serif.className} dark:text-white text-2xl lg:pl-32 pt-4`} >Trending on UpFront</h3>
      <div className='grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 w-screen md:w-[83vw] h-max pt-4 gap-y-2 lg:ml-32 gap-x-4'>
          {
            articles ? (
            articles.map((articles)=>{
              return <>
              <Link key={articles.title} href={`/article/${articles.title}`} className="flex bg-white dark:bg-[#3c3c3c] border border-gray-200 dark:border-black rounded-lg shadow h-[20vh] w-[70vw] md:h-36 md:w-[37vw] lg:h-[25vh] lg:w-[25vw] hover:bg-gray-100 hover:dark:bg-[#313030] overflow-hidden ">
                  <img className="object-cover self-center h-[20vh] w-[20vh] md:w-32 lg:w-[11vw] lg:h-[25vh] rounded-t-lg md:h-36" src={articles.urlToImage ? articles.urlToImage : '/UpFront-placeholder.png'} alt="UpFront" width='20' height='30' />
                  <h5 className="pl-2 mb-2 text-base lg:text-xl font-semibold tracking-tight text-gray-900 leading-normal dark:text-gray-300 pt-1"> {articles.title}
                  </h5>
              </Link>
              </>
            })):
            (<>
              <div className="h-screen dark:bg-[#1e1e1e] dark:text-white">
                Data Not Available At the Moment
              </div>
            </>)
          }
        
      </div>
      </div>
    </section>
      
    </>
  )
}

"use client"

// import type { Metadata } from "next"
import getNews from "@/lib/getNews"
import Image from "next/image";

type Params ={
    params:{
        categories:string
    }
}

export default async function newsPage({params:{categories}}:Params) {
    const res : Promise<News> = getNews(categories)
    const news = await res;
    const articles = news.articles;
  return (
    <>
        <section className="lg:grid lg:grid-rows-4 lg:gap-x-2 lg:w-[80vw]">
            {
                articles.map((articles)=>{
                    return(
                        <>
                            
<div key={articles.title} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <Image className="rounded-t-lg" src={articles.urlToImage ? articles.urlToImage : '/UpFront-placeholder.png'} alt="Image" width={100} height={100} onError={(e:any) => {
            const target = e.target as HTMLImageElement;
            target.src = '/UpFront-placeholder.png'
        // e.target.src = {'/UpFront-placeholder.png'};
      }} />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{articles.title}</h5>
        </a>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F5C347] rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

                        </>
                    )
                })
            }
        </section> 
    </>
  )
}

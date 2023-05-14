import type { Metadata } from "next"
import getNews from "@/lib/getNews"
import Img from "./components/Img"
import Navbar from "@/app/components/Navbar"
import Link from "next/link"

type Params ={
    params:{
        categories:string
    }
}

export async function  generateMetadata({params:{categories}}:Params):Promise<Metadata>{
    const res : Promise<News> = getNews(categories)
    const news = await res;
    return {
        title:`UpFront | ${news.totalResults} Results`,
        description : `Here are the latest news from ${categories} category`
}
}


export default async function newsPage({params:{categories}}:Params) {
    const res : Promise<News> = getNews(categories)
    const news = await res;
    const articles = news.articles;
  return (
    <>
    <Navbar btnmsg={categories} />
    <div className="flex justify-center items-center h-max w-screen ">
        <section className="lg:grid lg:grid-rows-4 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-2 lg:w-max h-max pt-[12vh]">
            {
                articles.map((articles)=>{
                    return(
                        <Link href={`/${categories}/${articles.title}`}>
                           <div className="relative lg:h-60 w-80 flex rounded-2xl overflow-hidden">
                            <div className="absolute">
                            <Img url={articles.urlToImage} />
                            </div>
                            <p className="relative  z-10 self-end pb-1 pl-1 w-full h-max pt-2 text-white bg-gradient-to-t from-black via-gray-800/80  to-transparent">{articles.title}</p>
                        </div> 
                        </Link>
                    )
                })
            }
        </section> 
    </div>
    </>
  )
}

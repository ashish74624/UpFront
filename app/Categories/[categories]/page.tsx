import type { Metadata } from "next"
import getNews from "@/lib/getNews"
import Navbar from "@/app/components/Navbar"
import GridBox from "./components/GridBox"

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
    let i=0
  return (
    <>
    <Navbar btnmsg={categories} />
    <div className="flex justify-center items-center h-max w-screen pb-16">
        <section className="flex flex-col md:grid  md:grid-rows-4 md:grid-cols-2 lg:grid-cols-3 md:gap-y-4 md:gap-x-4 lg:gap-y-2 lg:w-max h-max pt-[12vh]">
            {
                articles ?(
                articles.map((articles)=>{
                    
                    return(
                        <GridBox
                            // id={i++}
                            url={articles.url}
                            image={articles.urlToImage}
                            title={articles.title}
                            categories={categories}
                        />

                        )
                    }
                    
                    )
                ):
                (<div className="pt-[12vh] mb-[55vh] md:mb-[30vh] lg:mb-0 h-[40vh] md:h-[45vh] lg:h-[30vh] w-screen justify-center items-center flex text-4xl">
                    <h1>No Results Found at the Moment</h1>
                </div>)
            }    
        </section> 
    </div>
    </>
  )
}

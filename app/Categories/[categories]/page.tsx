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
        <section className="lg:grid lg:grid-rows-4 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-2 lg:w-max h-max pt-[12vh]">
            {
                
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
                }    
        </section> 
    </div>
    </>
  )
}

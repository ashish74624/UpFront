import getHeadlines from "@/lib/getHeadlines";
import { PT_Serif } from "next/font/google";
import Link from "next/link";

const serif = PT_Serif({
  subsets : ['cyrillic'],
  weight : '400'
})

export default async function FrontPage() {
  const postsData : Promise<News> =  getHeadlines();
  const post = await postsData
  const articles = post.articles
  const sub = articles?.slice(1,7)
  return (
    <section className="relative z-30 bg-white w-screen mb-12 flex justify-center">
      <div>
      <h3 className={`${serif.className} text-2xl lg:pl-32 pt-4`} >Trending on UpFront</h3>
      <div className='grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 w-[83vw] h-max pt-4 gap-y-2 lg:ml-32'>
          {
            sub ? (
            sub.map((articles)=>{
              return <>
              <Link key={articles.title} href={`/${articles.title}`} className="flex bg-white border border-gray-200 rounded-lg shadow h-20 w-[80vw] md:h-32 md:w-[35vw] lg:h-20 lg:w-[22vw] hover:bg-gray-100 overflow-hidden">
                  <img className="object-cover self-center h-20 w-20 md:w-32 lg:w-20 lg:h-20 rounded-t-lg md:h-36" src={articles.urlToImage ? articles.urlToImage : '/UpFront-placeholder.png'} alt="UpFront" width='20' height='30' />
                  <h5 className="pl-2 mb-2 text-base font-semibold tracking-tight text-gray-900 leading-normal"> {articles.title}
                  </h5>
              </Link>
              </>
            })):
            (<>
              <div className="h-[30vh] md:h-[12vh] lg:h-[14vh]">
                Data Not Available At the Moment
              </div>
            </>)
          }
        
      </div>
      </div>
    </section>
  )
}

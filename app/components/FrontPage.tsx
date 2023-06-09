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
  if(post.status==='error'){
    return (
      <main className="relative z-30 bg-white w-screen h-[40vh] flex justify-center items-center  dark:bg-[#1e1e1e] dark:text-white">
        <div className="h-[30vh] md:h-[12vh] lg:h-[14vh] dark:bg-[#1e1e1e] dark:text-white">Data Not Available At the Moment</div>
      </main>
    )
  }
  const sub = post?.articles.slice(1,7)
  return (
    <section className="relative z-30 bg-white dark:bg-[#1e1e1e] w-screen pb-12 flex justify-center">
      <div>
      <h3 className={`${serif.className} text-transparent md:text-black md:dark:text-white text-2xl lg:pl-32 md:pt-4 pt-0 h-0 w-0 md:h-max md:w-max`} >Trending on UpFront</h3>
      <div className='grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 w-[83vw] h-max pt-4 gap-y-2 lg:ml-32'>
          {
            sub ? (
            sub.map((articles)=>{
              return <>
              <Link key={articles.title} href={`/article/${articles.title}`} className="flex bg-white dark:bg-[#3c3c3c] border border-gray-200 dark:border-black rounded-lg shadow h-20 w-[80vw] md:h-32 md:w-[35vw] lg:h-20 lg:w-[22vw] hover:bg-gray-100 hover:dark:bg-[#313030] overflow-hidden ">
                  <img className="object-cover self-center h-20 w-20 md:w-32 lg:w-20 lg:h-20 rounded-t-lg md:h-36" src={articles.urlToImage ? articles.urlToImage : '/UpFront-placeholder.png'} alt="UpFront" width='20' height='30' />
                  <h5 className="pl-2 mb-2 text-base font-semibold tracking-tight text-gray-900 leading-normal dark:text-gray-300"> {articles.title}
                  </h5>
              </Link>
              </>
            })):
            (<>
              <div className="h-[30vh] md:h-[12vh] lg:h-[14vh] dark:bg-[#1e1e1e] dark:text-white">
                Data Not Available At the Moment
              </div>
            </>)
          }
        
      </div>
      </div>
    </section>
  )
}

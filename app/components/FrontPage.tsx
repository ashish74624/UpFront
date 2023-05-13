import getHeadlines from "@/lib/getHeadlines";
import { PT_Serif } from "next/font/google";

const serif = PT_Serif({
  subsets : ['cyrillic'],
  weight : '400'
})

export default async function FrontPage() {
  const postsData : Promise<Headlines> = await getHeadlines();
  const post = await postsData
  const articles = post.articles
  const sub = articles.slice(0,6)
  return (
    <section className="relative z-30 bg-white w-screen mb-12">
      <h3 className={`${serif.className} text-2xl lg:pl-32 pt-4`} >Trending on UpFront</h3>
      <div className='grid grid-cols-3 grid-rows-2 w-[83vw] h-max pt-4 gap-y-2 lg:ml-32'>
          {
            sub.map((articles)=>{
              return <>
              <a href="#" className="flex bg-white border border-gray-200 rounded-lg shadow h-20 w-[22vw] hover:bg-gray-100 overflow-hidden">
                  <img className="object-cover self-center lg:w-20 rounded-t-lg lg:h-20" src={articles.urlToImage ? articles.urlToImage : '/UpFront-placeholder.png'} alt="Image" width='20' height='30' />
                  <h5 className="pl-2 mb-2 text-base font-semibold tracking-tight text-gray-900 leading-normal"> {articles.title}
                  </h5>
              </a>
              </>
            })
          }
        
      </div>
    </section>
  )
}

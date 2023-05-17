export default async function getNews(category:string){
    const key = process.env.API_KEY
    const req = await fetch(`http://newsapi.org/v2/everything?q=${category}&apiKey=`+key,{
        next:{
            revalidate:4
        }
    })
    const res = await req.json()
    return res;
}
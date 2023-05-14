export default async function getNews(category:string){
    const key = process.env.API_KEY
    const req = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=${key}`)
    const res = await req.json()
    return res;
}
export default async function getNews(category:string){
    const key = 'd6a68884b41240c58f60615e8dab0012';
    const req = await fetch(`http://newsapi.org/v2/everything?q=${category}&apiKey=`+key,{
        next:{
            revalidate:4
        }
    })
    const res = await req.json()
    return res;
}
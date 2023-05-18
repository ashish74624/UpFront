export default async function getNews(category:string){
    const key = 'bc87faed5165437e98a35cf5993205eb';
    const req = await fetch(`http://newsapi.org/v2/everything?q=${category}&apiKey=`+key,{
        next:{
            revalidate:4
        }
    })
    const res = await req.json()
    return res;
}
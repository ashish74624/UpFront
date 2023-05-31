export default async function getNews(category:string){
    const key = 'd7f6e15f6f3d49a498bc306c3999a81a';
    const req = await fetch(`http://newsapi.org/v2/everything?q=${category}&apiKey=`+key,{
        next:{
            revalidate:4
        }
    })
    const res = await req.json()
    return res;
}
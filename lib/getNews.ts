export default async function getNews(category:string){
    const key = 'bc87faed5165437e98a35cf5993205eb';
    let category2 = category.replace(/\.txt$/, "");
    const req = await fetch(`http://newsapi.org/v2/everything?q=${category2}&apiKey=`+key,{
        next:{
            revalidate:4
        }
    })
    const res = await req.json()
    return res;
}
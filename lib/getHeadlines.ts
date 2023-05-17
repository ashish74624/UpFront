export default async function getHeadlines(){
    const apikey = 'bc87faed5165437e98a35cf5993205eb';
    const res = await fetch(`http://newsapi.org/v2/everything?q=India&apiKey=${apikey}`,{
        next:{
            revalidate:4
        }
    });
    const json = await res.json();
    return json  
}
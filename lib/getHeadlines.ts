export default async function getHeadlines(){
    const apikey = process.env.API_KEY;
    const res = await fetch(`https://newsapi.org/v2/everything?q=India&apiKey=${apikey}`,{
        next:{
            revalidate:4
        }
    });
    const json = await res.json();
    return json  
}
export default async function getHeadlines(){
    const apikey = 'd7f6e15f6f3d49a498bc306c3999a81a';
    const res = await fetch(`http://newsapi.org/v2/everything?q=India&apiKey=${apikey}`,{
        next:{
            revalidate:4
        }
    });
    const json = await res.json();
    return json  
}
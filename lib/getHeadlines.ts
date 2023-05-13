export default async function getHeadlines(){
    const apiKey = process.env.API_KEY;
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + apiKey;
    const res = await fetch(apiUrl);
    const json = await res.json();
    return json  
}
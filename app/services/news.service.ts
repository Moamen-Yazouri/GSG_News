const fetchNews = async (category: string, country: string) => {
    // if(!category) return
    const res = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_703950700639eec12e7bff9628002924463bd&category=${category}&country=${country}`);
    const data = (await res.json()) as News.IResponse;
    const news = data.results.map(item => ({
        id: item.article_id,
        title: item.title,
        img: item.image_url,
        content: item.description
    }));
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(news);
        }, 5000)
    } );
}
export default fetchNews;
import Fetching from '@/components/Fetching/NewsList';
interface IProps {
    params: Promise<{category: string, country: string}>
}
const NewsList = async (props: IProps) => {
    const params = await props.params;
    const category = params.category;
    const country = params.country;
    let loading = true;
    const getNews = async () => {
        const res = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_703950700639eec12e7bff9628002924463bd&category=${category}&country=${country}`);
        const data: News.IResponse = await res.json();
        loading = false;
        return data.results.map(item => ({
            id: item.article_id,
            title: item.title,
            img: item.image_url,
            content: item.description
        })) as News.Item[];
    }
    const news = await getNews();
    if(loading) return <div>Loading....</div>;
    return (
        <Fetching news={news} country={country} category={category}/>
    )
}

export default NewsList;
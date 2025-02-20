import Fetching from '@/components/Fetching/NewsList';
interface IProps {
    params: Promise<{category: string}>
}
const NewsList = async (props: IProps) => {
    const category = (await props.params).category;
    const getNews = async () => {
        const res = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_703950700639eec12e7bff9628002924463bd&category=${category}&country=us`);
        const data: News.IResponse = await res.json();
        return data.results.map(item => ({
            id: item.article_id,
            title: item.title,
            img: item.image_url,
            content: item.description
        })) as News.Item[];
    }
    const news = await getNews();
    if(!category) return <div>Loading....</div>;
    return (
        <Fetching news={news}/>
    )
}

export default NewsList;
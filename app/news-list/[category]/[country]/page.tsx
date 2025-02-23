import fetchNews from '@/app/services/news.service';
import Fetching from '@/components/Fetching/NewsList';
interface IProps {
    params: Promise<{category: string, country: string}>
}
const NewsList = async (props: IProps) => {
    const {category, country} = await props.params;
    const latestNews = await fetchNews(category, country) as News.Item[];

    return (
        <Fetching news={latestNews} country={country} category={category}/>
    )
}

export default NewsList;
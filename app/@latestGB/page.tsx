import React from 'react'
import { fetchNews } from '../services/news.services'
import LatestNews from '@/components/latest-news/latest-news/LatestNews';

const page = async () => {
    const latestNews: News.Item[] = await fetchNews('politics', 'gb');
    const data = latestNews.slice(0,3);
    if(latestNews.length === 0 || !latestNews) return(null);
    return (
        <div>
            <LatestNews data={data}/>
        </div>
    )
}

export default page;
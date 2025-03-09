import {fetchNews, getNews} from '@/app/services/news.services';
import React from 'react';
import Cat from '@/public/cat1.png';
import Image from 'next/image';
import NewsListItems from '@/components/news-list/news-list-items/NewsListItems';
interface IProps {
    params: Promise<{slug: string[]}>
}
const NewsList = async (props: IProps) => {
    const {slug} = await props.params;
    if(!slug?.length) {
        return (
            <div>
                <h3>You reached this page without selecting a country or category!</h3>
            </div>
        );
    }
    const [category] = slug;
    const newsList = getNews(category);
    return (
        <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {`${category.toUpperCase()} News`}
        </h1>
        <NewsListItems newsList={newsList}/>
        </div>
)
}

export default NewsList;
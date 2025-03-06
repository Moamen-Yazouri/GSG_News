import {fetchNews, getNews} from '@/app/services/news.services';
import React from 'react';
import Cat from '@/public/cat1.png';
import Image from 'next/image';
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
    const latestNews = getNews(category);
    return (
        <div className="px-10 py-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {`${category.toUpperCase()} News`}
        </h1>
        {latestNews.map((news) => (
            <React.Fragment key={news.id}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 p-5 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900">{news.title}</h3>
                <Image className="w-full h-56 object-cover rounded-md mt-4" src={Cat} alt='news-image'/>
                <p className="text-gray-700 text-base mt-4">{news.content}</p>
                </div>
            </React.Fragment>
        ))}
        </div>
)
}

export default NewsList;
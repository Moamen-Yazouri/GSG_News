import {fetchNews} from '@/app/services/news.services';
import React from 'react';

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
    const [category, country] = slug;
    const latestNews = await fetchNews(category, country) as News.Item[];
    return (
        <div className='px-[60px]'>
        <h1>{`${country.toUpperCase()} ${category.toUpperCase()} News`}</h1>
        {
            latestNews.map(news => (
                <React.Fragment key={news.id}>
                    <div>
                        <h3>{news.title}</h3>
                        {news.img && <img src={news.img} alt='news-image' width={550} height={80} />}
                        <p>{news.content}</p>
                    </div>
                    <hr />
                </React.Fragment>
            ))
        }
    </div>
)
}

export default NewsList;
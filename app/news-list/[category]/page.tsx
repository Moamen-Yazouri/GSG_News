'use client';
import React, { useEffect, useState } from 'react'
import Image from "next/image"
interface IProps {
    params: Promise<{category: string}>
}
const NewsList =  (props: IProps) => {
    const [category, setCategory] = useState<string | null>(null)
    const [news, setNews] = useState<News.Item[]>([]);
    const getNews = async () => {
        const cat = (await props.params).category;
        setCategory(cat)
        if(!category) return
        const res = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_703950700639eec12e7bff9628002924463bd&category=${category}&country=us`);
        const data: News.IResponse = await res.json();
        const newsItems: News.Item[] =  data.results.map(item => (
                {
                    id: item.article_id,
                    title: item.title,
                    img: item.image_url,
                    content: item.description
                }
            ))
        setNews(newsItems);
    }
    useEffect(() => {
        getNews();
    }, [category]);

    if(!category) return <div>Loading....</div>;
    return (
        <div className='px-[60px]'>
            {
                news.map(news => (
                    <React.Fragment key={news.id}>
                        <div>
                            <h3>{news.title}</h3>
                            {news.img && <Image src={news.img} alt='news-image' width={550} height={80} />}
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
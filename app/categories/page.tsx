'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
const page = () => {
    const[news, setNews] = useState<News.Item[]>([]);
    const getNews = () => {
        fetch("https://newsdata.io/api/1/latest?apikey=pub_703950700639eec12e7bff9628002924463bd&category=politics&country=us")
        .then(res => res.json() as Promise<News.IResponse>)
        .then(res => {
            const newsItems: News.Item[] = res.results.map(item => (
                {
                    id: item.article_id,
                    title: item.title,
                    img: item.image_url,
                    content: item.description
                }
            ));
            setNews(newsItems);
        })
    }
    useEffect(() => {
        getNews();
    }, [])
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

export default page;
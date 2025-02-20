import React from 'react'
import Image from "next/image";
interface IProps {
    news: News.Item [];
    category: string;
    country: string;
}
const Fetching = (props: IProps) => {
    return (
        <div className='px-[60px]'>
            <h1>{`${props.country.toUpperCase()} ${props.category.toUpperCase()} News`}</h1>
            {
                props.news.map(news => (
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

export default Fetching
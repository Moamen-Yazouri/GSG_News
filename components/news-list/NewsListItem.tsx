import React from 'react';
import Image from 'next/image';
import Cat from '@/public/cat1.png';
import Link from 'next/link';

interface IProps {
    data: News.Item_;
}

const NewsListItem = (props: IProps) => {
    const news = props.data;
    
    return (
        <Link key={news.id} href={`/news/${props.data.slug}`}>
            <div className="flex flex-col gap-[10px] bg-white shadow-md rounded-lg overflow-hidden mb-4 p-3 border border-[#71b2ab] w-[250px] h-[300px] hover:shadow-lg transition-shadow duration-200">
                {/* News Title */}
                <h3 className="text-lg font-semibold text-[#71b2ab] leading-tight">
                    {news.title}
                </h3>

                {/* Image */}
                <div className='w-full h-[150px] relative'>
                    <Image
                        fill
                        className="rounded-md"
                        src={Cat} 
                        alt='news-image'
                    />
                </div>

                <p className="text-gray-400 text-[12px] mb-[10px] h-[45px]  overflow-hidden line-clamp-3 leading-[15px]">
                    {news.content}
                </p>
            </div>
        </Link>
    );
}

export default NewsListItem;

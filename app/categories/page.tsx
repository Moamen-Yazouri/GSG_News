import React from 'react';
import Link from 'next/link';
import Categories from '@/components/Categories/Categories';
const page = async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return (
        <div className='px-[60px]'>
            <Categories/>
            <ul>
                <li><Link className='underline' href={"/news-list/politics/us"}>US Politics</Link></li>
                <li><Link className='underline' href={"/news-list/sports/us"}>US sports</Link></li>
                <li><Link className='underline' href={"/news-list/politics/gb"}>GB Sports</Link></li>
                <li><Link className='underline' href={"/news-list/health/gb"}>GB Health</Link></li>
            </ul>
        </div>
    )
}

export default page;
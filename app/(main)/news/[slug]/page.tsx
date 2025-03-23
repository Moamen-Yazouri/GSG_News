import { getNewsBySlug } from '@/app/services/news.services';
import React from 'react';
import Image from 'next/image';
import Cat from '@/public/cat1.png'
interface IProps {
    params: Promise<{ slug: string }>;
}

const NewsArticle = async (props: IProps) => {
    const slug = (await props.params).slug;
    const article = getNewsBySlug(slug);

    return (
        <article className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-[60px] relative overflow-hidden">

        <div className="absolute top-0 left-0 h-full w-2 bg-[#71b2ab]"></div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 pl-3">
            {article.title}
        </h1>

        <address className="flex items-center text-sm text-gray-600 mb-4">
            <div className="bg-gray-100 px-3 py-1 rounded-full shadow-sm border border-[#71b2ab]">
            <b>Author:</b> <cite className="italic text-[#71b2ab]">{article.author}</cite>
            </div>
            <span className="ml-3 text-gray-500">| {new Date(article.date).toLocaleDateString()}</span>
        </address>

        <Image
            className="w-full h-60 object-cover rounded-lg shadow-md"
            src={Cat}
            alt="article image"
            width={500}
            height={150}
        />

        <main className="mt-6 text-gray-800 leading-relaxed text-lg tracking-wide">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-[#71b2ab] first-letter:mr-2">
            {article.content}
            </p>
        </main>
        </article>

    );
};

export default NewsArticle;
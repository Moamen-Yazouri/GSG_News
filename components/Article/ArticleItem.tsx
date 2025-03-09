import React from 'react'
import Image from 'next/image';
import Cat from '@/public/cat2.png'
interface IProps {
    article: News.Item_;
}
const ArticleItem = (props: IProps) => {
    const article = props.article
    return (
        <article className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-[60px] relative overflow-hidden">
            
            <div className="absolute top-0 left-0 h-full w-2 bg-[#71b2ab] shadow-lg shadow-[#71b2ab]/50"></div>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-l-4 border-[#71b2ab] pl-3">
                {article.title}
            </h1>

            <address className="flex items-center text-sm text-gray-600 mb-4">
                <div className="bg-gray-100 px-3 py-1 rounded-full shadow-sm border border-[#71b2ab]">
                <b>Author:</b> <cite className="italic text-[#71b2ab]">{article.author}</cite>
                </div>
                <span className="ml-3 text-gray-500">| {new Date(article.date).toLocaleDateString()}</span>
            </address>

            <Image
                className="w-full h-60 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                src={Cat}
                alt="article image"
                width={500}
                height={150}
            />

            <main className="mt-6 text-gray-800 leading-relaxed text-lg tracking-wide">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#71b2ab] first-letter:mr-1">
                {article.content}
                </p>
            </main>
        </article>

)
}

export default ArticleItem
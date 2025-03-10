'use client';
import React, { startTransition, useActionState, useEffect, useState } from 'react'
import { addArticle } from '@/app/controllers/news-actions';
import SubmitArticle from './SubmitArticle';
import { validation } from '@/app/utils/validation';

const AddArticleForm = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [state, formAction, pending] = useActionState(addArticle, {errors: []});

    useEffect(() => {
        console.log(pending)
    }, [pending])

    useEffect(() => {
        const {errors: serverErrors} = state
        setErrors(serverErrors);
    }, [state]);

    const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const item: News.Item_ = {
            title: formData.get("title") as string,
            slug: "slug",
            image: formData.get("image") as string,
            content: formData.get("content") as string,
            author: formData.get("author") as string,
            author_email: formData.get("author_email") as string,
            date: new Date(formData.get("date") as string).getTime(), 
            summary: formData.get("summary") as string,
            category: formData.get("category") as string,
        };
        const fieldsErrors = validation(item);
        setErrors(fieldsErrors)
        if(fieldsErrors.length == 0) {
            startTransition(() => {
                formAction(formData);
            })
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-[#71b2ab] mb-6 text-center mt-[20px]">
                Add News Page
            </h1>
            
            <form className="max-w-2xl mx-auto p-3 bg-white shadow-md rounded-lg" action={formAction} onSubmit={validateForm}>
                {
                    errors.length > 0 && (
                            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow">
                                <h3 className="font-bold text-lg">🛑 Please fix the following errors:</h3>
                                <ul className="list-disc list-inside mt-2">
                                    {errors.map((error, index) => (
                                        <li key={index} className="text-sm">
                                            {error}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                    )
                }
                <div className="mb-3">
                    <label htmlFor="a-title" className="block text-[#71b2ab] font-medium mb-2">
                        News Title
                    </label>
                    <input
                        required
                        id="a-title"
                        type="text"
                        maxLength={300}
                        name="title"
                        className="w-full p-3 border border-[#71b2ab] rounded-md focus:outline-none focus:ring-2 focus:ring-[#71b2ab] text-gray-700"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="a-image" className="block text-[#71b2ab] font-medium mb-2">
                        News Image URL
                    </label>
                    <input
                        id="a-image"
                        type="text"
                        name="image"
                        className="w-full p-3 border border-[#71b2ab] rounded-md focus:outline-none focus:ring-2 focus:ring-[#71b2ab] text-gray-700"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="a-summary" className="block text-[#71b2ab] font-medium mb-2">
                        News Summary
                    </label>
                    <input
                        required
                        id="a-summary"
                        type="text"
                        name="summary"
                        className="w-full p-3 border border-[#71b2ab] rounded-md focus:outline-none focus:ring-2 focus:ring-[#71b2ab] text-gray-700"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="a-content" className="block text-[#71b2ab] font-medium mb-2">
                        News Content
                    </label>
                    <textarea
                        required
                        id="a-content"
                        rows={4}
                        name="content"
                        className="w-full p-3 border border-[#71b2ab] rounded-md focus:outline-none focus:ring-2 focus:ring-[#71b2ab] text-gray-700 resize-y"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="a-date" className="block text-[#71b2ab] font-medium mb-2">
                        News Date
                    </label>
                    <input
                        required
                        id="a-date"
                        type="date"
                        name="date"
                        className="w-full p-3 border border-[#71b2ab] rounded-md focus:outline-none focus:ring-2 focus:ring-[#71b2ab] text-gray-700"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="a-category" className="block text-[#71b2ab] font-medium mb-2">
                        News Category
                    </label>
                    <select
                        required
                        name="category"
                        defaultValue="global"
                        className="w-full p-3 border border-[#71b2ab] rounded-md focus:outline-none focus:ring-2 focus:ring-[#71b2ab] text-gray-700 bg-white"
                    >
                        <option value="global">Global</option>
                        <option value="palestine">Palestine</option>
                        <option value="gaza">Gaza</option>
                        <option value="finance">Finance</option>
                        <option value="westbank">Westbank</option>
                        <option value="weather">Weather</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>

                <div className="hidden">
                    <input type="hidden" name="author" value="Sarah Miller" />
                    <input type="hidden" name="author_email" value="sarahmiller@example.com" />
                </div>

                <div className="mb-2">
                    <SubmitArticle />
                </div>
            </form>
        </div>
    );
}

export default AddArticleForm;

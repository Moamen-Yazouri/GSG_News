'use server';
import slug from 'slugify';
import sql from 'better-sqlite3';
import xss from 'xss';
import { redirect } from 'next/navigation';
import { validation } from '../utils/validation';
const addArticle = async (prevState: {errors: string[]}, formData: FormData) => {

    const title = xss(formData.get('title')?.toString() || "");
    const newsArticle: News.Item_ = {
        title,
        author: formData.get('author')?.toString() || "" ,
        author_email: formData.get('author_email')?.toString() || "",                   
        category: formData.get('category')?.toString() || "",
        content: xss(formData.get("content")?.toString() || ""),
        date: new Date(formData.get("date")?.toString() || "").getTime(),
        image: formData.get("image")?.toString() || "",
        summary: xss(formData.get("summary")?.toString() || ""),
        slug: slug(title),
    }
    const errors = validation(newsArticle);
    if(errors.length > 0) {
        return {
            errors
        };
    }

        const db = sql('news.db');
        const insertCommand = db.prepare(`
            INSERT INTO articles (slug, title, image, summary, content, author, author_email, date, category)
            VALUES (@slug, @title, @image, @summary, @content, @author, @author_email, @date, @category)
        `).run(newsArticle);
        redirect(`/news/${newsArticle.slug}`);
}
export {
    addArticle,
}
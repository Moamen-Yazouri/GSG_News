'use server';
import slug from 'slugify';
import sql from 'better-sqlite3';
import xss from 'xss';
import { redirect } from 'next/navigation';
import { articleValidation, userValidation } from '../utils/validation';
import { hashPassword } from '../utils/auth';
export const addArticle = async (prevState: {errors: string[]}, formData: FormData) => {
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
    const errors = articleValidation(newsArticle);
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
export const signUp = async (prevState: { errors: string[] }, formData: FormData) => {
    const password = hashPassword(formData.get('password')?.toString() || "");

    const user: News.IUser = {
        email: xss(formData.get('email')?.toString() || ""),
        password,
        displayName: xss( formData.get('displayName')?.toString() || ""),
        role: formData.get("role")?.toString() || ""
    };

    const errors = userValidation(user);

    if (errors.length > 0) {
        console.log("Errors:", errors);
        return {
            errors
        };
    }

    const db = sql("news.db");
    try {

        const existingUser = db.prepare("SELECT id FROM users WHERE email = ?").get(user.email);
        if (existingUser) {
            return {
                errors: ["A user with this email already exists"]
            };
        }

        // Prepare and execute the SQL query
        const insertCommand = db.prepare(`
            INSERT INTO users (email, displayName, password, role)
            VALUES (
                @email,
                @displayName,
                @password,
                @role
            )
        `).run(user);
    } catch (error) {
        console.error("Error inserting user:", error);
        throw new Error("Failed to create user");
    }
    redirect("/user/login"); // Ensure this is the correct redirect path
};
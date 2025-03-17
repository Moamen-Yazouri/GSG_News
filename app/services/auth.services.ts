import sql from "better-sqlite3"
const db = sql("news.db");
const findUserByEmail = (email: string) => {
    const user = db.prepare("SELECT * FROM users WHERE email= ?").get(email);
    return user as News.IUser;
}
export {
    findUserByEmail,
}
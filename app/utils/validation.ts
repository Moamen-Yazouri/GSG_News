import { ALLOWED_CATEGORIES, ALLOWED_ROLES } from "../constants/data";

const articleValidation = (article: News.Item_): string[] => {
    const errors = [];
    if(Object.values(article).some(value => value === "" )) {
        errors.push("Please Fill all fields..!")
    }
    if(article.author.length < 4) {
        errors.push("Author name is shorter than expected..!");
    }
    if(!ALLOWED_CATEGORIES.includes(article.category)) {
        errors.push("Invalid category..!");
    }
    if(article.date > Date.now()) {
        errors.push("You provided invalid date, [Future date]...!");
    }
    if(article.summary.length > 100) {
        errors.push("The summary should be shorter...!")
    }
    if(article.content.length > 300) {
        errors.push("the content is very long..!");
    }
    if(article.title.length > 150) {
        errors.push("The title is too long...!")
    }
    return errors
}

const userValidation = (user: News.IUser): string[] => {
    const errors = [];
    const emailExp = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/;
    if(Object.values(user).some(value => value === "")) {
        errors.push("Please Fill all fields!");
    }
    if(!emailExp.test(user.email)) {
        errors.push("the email should be like: user@example.com");
    }
    if(user.displayName.length < 4) {
        errors.push("The Displayname should be longer than 3 chars!")
    }
    if(!ALLOWED_ROLES.includes(user.role)) {
        errors.push("Please Select a Valid Role!");
    }
    if(user.password && user.password.length < 4 ) {
        errors.push("The Password Have to be longer than 3 chars!")
    }
    return errors;
}
export {
    articleValidation,
    userValidation,
}
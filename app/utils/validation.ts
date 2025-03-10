import { ALLOWEDCATEGORIES } from "../constants/data";

const validation = (article: News.Item_): string[] => {
    const errors = [];
    if(Object.values(article).some(value => value === "")) {
        errors.push("Please Fill all fields..!")
    }
    if(article.author.length < 4) {
        errors.push("Author name is shorter than expected..!");
    }
    if(!ALLOWEDCATEGORIES.includes(article.category)) {
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
export {
    validation
}
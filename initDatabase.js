// import sql from 'better-sqlite3';
const sql = require('better-sqlite3')
const db = sql('news.db');

const dummyArticles = [
  {
    "title": "Understanding JavaScript Closures",
    "slug": "understanding-javascript-closures",
    "image": "https://example.com/images/js-closures.jpg",
    "content": "Closures are a fundamental concept in JavaScript that allow functions to retain access to variables from their parent scope, even after the parent function has finished execution...",
    "summary": "A deep dive into JavaScript closures and their practical applications.",
    "author": "John Doe",
    "author_email": "johndoe@example.com",
    "date": 1709856000,
    "category": "global"
  },
  {
    "title": "Laravel vs Node.js: Which One to Choose?",
    "slug": "laravel-vs-nodejs",
    "image": "https://example.com/images/laravel-vs-node.jpg",
    "content": "When building web applications, one of the major choices developers face is whether to use Laravel (a PHP framework) or Node.js (JavaScript runtime)...",
    "summary": "A comparison between Laravel and Node.js to help developers choose the best framework.",
    "author": "Jane Smith",
    "author_email": "janesmith@example.com",
    "date": 1709942400,
    "category": "finance"
  },
  {
    "title": "React.js Performance Optimization Techniques",
    "slug": "reactjs-performance-optimization",
    "image": "https://example.com/images/react-performance.jpg",
    "content": "Optimizing performance in React.js applications involves techniques like memoization, lazy loading, and avoiding unnecessary re-renders...",
    "summary": "Best practices for optimizing performance in React applications.",
    "author": "Alice Brown",
    "author_email": "alicebrown@example.com",
    "date": 1710028800,
    "category": "global"
  },
  {
    "title": "Mastering Git: Essential Commands for Developers",
    "slug": "mastering-git-essential-commands",
    "image": null,
    "content": "Git is an essential tool for modern developers. Understanding commands like git clone, git commit, git push, and git merge can greatly enhance your workflow...",
    "summary": "Essential Git commands every developer should know.",
    "author": "Robert Wilson",
    "author_email": "robertwilson@example.com",
    "date": 1710115200,
    "category": "technology"
  },
  {
    "title": "CSS Grid vs Flexbox: When to Use Which?",
    "slug": "css-grid-vs-flexbox",
    "image": "https://example.com/images/css-grid-vs-flexbox.jpg",
    "content": "CSS Grid and Flexbox are both powerful layout tools, but they serve different purposes. Understanding their strengths and use cases can improve your design workflow...",
    "summary": "A comparison of CSS Grid and Flexbox for responsive web design.",
    "author": "Emily Johnson",
    "author_email": "emilyjohnson@example.com",
    "date": 1710201600,
    "category": "design"
  },
  {
    "title": "Building a REST API with Laravel",
    "slug": "building-rest-api-laravel",
    "image": "https://example.com/images/laravel-rest-api.jpg",
    "content": "Laravel makes it easy to build robust REST APIs with built-in features like routing, middleware, and authentication...",
    "summary": "Step-by-step guide to building a REST API using Laravel.",
    "author": "Michael Scott",
    "author_email": "michaelscott@example.com",
    "date": 1710288000,
    "category": "technology"
  },
  {
    "title": "TypeScript vs JavaScript: Which One Should You Use?",
    "slug": "typescript-vs-javascript",
    "image": "https://example.com/images/typescript-vs-js.jpg",
    "content": "TypeScript offers static typing and better tooling, while JavaScript is more flexible and widely used. Understanding their differences can help you choose the right tool for your project...",
    "summary": "An in-depth comparison of TypeScript and JavaScript for developers.",
    "author": "Sophia Martinez",
    "author_email": "sophiamartinez@example.com",
    "date": 1710374400,
    "category": "technology"
  }
]


db.prepare(`
    CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        image TEXT,
        summary TEXT NOT NULL,
        content TEXT NOT NULL,
        author TEXT NOT NULL,
        author_email TEXT NOT NULL,
        date INTEGER NOT NULL,
        category TEXT NOT NULL
    )
`).run();

const insertData = () => {
  const insertCommand = db.prepare(`
    INSERT INTO articles (slug, title, image, summary, content, author, author_email, date, category)
    VALUES (@slug, @title, @image, @summary, @content, @author, @author_email, @date, @category)
`);

    for (const article of dummyArticles) {
        insertCommand.run(article);
    }
}
insertData();

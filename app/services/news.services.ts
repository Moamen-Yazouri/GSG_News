import sql from 'better-sqlite3';

const getNews = (category: string): News.Item_[] => {
  const db = sql('news.db');
  return db.prepare('SELECT * FROM articles WHERE category = ?').all(category) as News.Item_[];
};

/**
 * @deprecated we will use our DB to fetch news.
 */
const fetchNews = async (category: string, country: string) => {
  const api_key = 'pub_726688ae6341fd20c1360e91fba5c1d822b7f';
  const res = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${api_key}&category=${category}&country=${country}`,
    { method: 'GET', cache: 'no-store' }
  );

  const newsRes = (await res.json()) as News.IResponse;
  let latestNews: News.Item[] = [];
  if (newsRes.status === 'success') {
    latestNews = newsRes.results.map(item => (
      {
        id: item.article_id,
        title: item.title,
        img: item.image_url,
        content: item.description
      }
    ));
  } else {
    // triggering notFound manually
    // notFound();
  }

  return latestNews as News.Item[]
}

export {
  fetchNews,
  getNews
}
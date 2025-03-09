declare namespace News {
    interface IResponseNewsItem {
        article_id: string;
        description: string;
        title: string;
        image_url: string;
    }
    interface IResponse {
        status: string;
        totalResults: string;
        results: IResponseNewsItem[];
    }
    
    export interface Item {
        id: string;
        title: string;
        img: string | null;
        content: string;
    }
    export interface ICategory {
        imgUrl: string,
        title: string,
        description: string,
    }
    export interface  Item_ {
        id?: string,
        title: string,
        slug: string,
        image: string | null,
        content: string,
        author: string,
        author_email: string,
        date: number
        summary: string,
        category: string
    }
}
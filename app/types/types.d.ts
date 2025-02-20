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
}
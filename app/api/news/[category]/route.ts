import { ALLOWEDCATEGORIES } from "@/app/constants/data";
import { getNews } from "@/app/services/news.services";
import { NextRequest, NextResponse } from "next/server"
interface IProps {
    params: Promise<{category:string}>;
}
export const GET = async (request: NextRequest, props: IProps) => {
    const category = (await props.params).category
    if(!ALLOWEDCATEGORIES.includes(category)) {
        return NextResponse.json(null, {status:400, statusText: "Invalid Category"})
    }
    const news = getNews(category);
    return NextResponse.json(news, {status: 200});

}
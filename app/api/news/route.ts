import { ALLOWEDCATEGORIES } from "@/app/constants/data";
import { getNews } from "@/app/services/news.services";
import { NextRequest, NextResponse } from "next/server"
export const GET = async (request: NextRequest) => {
    const params = request.nextUrl.searchParams;
    const category = params.get("category") || "global";
    if(!ALLOWEDCATEGORIES.includes(category)) {
        return NextResponse.json(null, {status:400, statusText: "Invalid Category"})
    }
    const news = getNews(category);
    return NextResponse.json(news, {status: 200, headers: {}});
    

}
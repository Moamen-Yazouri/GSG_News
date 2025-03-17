import { getNewsBySlug } from "@/app/services/news.services";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest, {params}: {params: Promise<{slug: string}>}) => {
    const slug = (await params).slug;
    const newsItem = getNewsBySlug(slug);
    return NextResponse.json(newsItem, {status: 200});
}
export {
    GET,
}
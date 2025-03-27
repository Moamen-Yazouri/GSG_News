import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/utils/auth";

export const middleware = async (request: NextRequest) => {
    const token: string | undefined = request.cookies.get('auth-token')?.value;

    switch(request.nextUrl.pathname) {
        case '/admin': {
            if(!token) {
                const response: NextResponse = NextResponse.redirect(new URL('/user/login', request.url));
                response.cookies.set("error-message", "There is an error in your login..!")
            }
            const user: News.IUser | null = await verifyToken(token || '');
            if(!user) {
                const response: NextResponse = NextResponse.redirect(new URL('/user/login', request.url));
                response.cookies.set('error-message', "There is an error in your login..!");
                return response;
            }
            if(user.role !== "admin") {
                const response: NextResponse = NextResponse.redirect(new URL('/', request.url));
                response.cookies.set('error-message', "You do not have the permissions to access this page..!");
                return response;
            }
            break;
        }
        default:
    }
    return NextResponse.next();
} 
export const config = {
    matcher: "/admin/:path*"
}
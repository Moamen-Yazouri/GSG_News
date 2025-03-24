import {findUserByEmail } from "@/app/services/auth.services";
import { comparePassword, generateToken } from "@/app/utils/auth";
import { cookies } from "next/dist/server/request/cookies";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
    const {email, password} = await req.json() as {email: string, password: string};
    if(!email || !password) {
        return new NextResponse("Email & Password are required", {status: 400});
    }
    const user = findUserByEmail(email);
    if(!user) {
        return new NextResponse("Invalid Credintials!", {status: 401})
    }
    const isValidPassword = comparePassword(password, user.password || '');
    if(!isValidPassword) {
        return new NextResponse("Invalid credintials", {status: 401});
    }
    const token = generateToken(user);
    (await cookies()).set('auth-token', token, {
        maxAge: 10000 
    })
    return new NextResponse(token, {status: 200});
}
export {
    POST
}
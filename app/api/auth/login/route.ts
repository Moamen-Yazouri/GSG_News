import {findUserByEmail } from "@/app/services/auth.services";
import { comparePssword } from "@/app/utils/auth";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
    const {email, password} = await req.json() as {email: string, password: string};
    const user = findUserByEmail(email);
    if(!email || !password) {
        return new NextResponse("Email & Password are required");
    }
    if(!user) {
        return new NextResponse("Invalid Credintials!", {status: 401})
    }
    if(!comparePssword(password, user.password!)) {
        return new NextResponse("Invalid credintials", {status: 401});
    }
    const userToSent = {
        email: user.email,
        role: user.role,
        displayName: user.displayName
    } 
    return NextResponse.json(userToSent, {status: 200});
}
export {
    POST,
}
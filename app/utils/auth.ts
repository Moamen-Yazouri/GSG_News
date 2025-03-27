'use server';
import {compareSync, hashSync} from "bcryptjs";
import {jwtVerify, SignJWT} from "jose";

const JWT_SECRET: string = process.env.JWT_SECRET || '';
const secretKey = new TextEncoder().encode(JWT_SECRET);
const comparePassword: (password: string, hashedPassword: string) => boolean = (password: string, hashedPassword: string): boolean => {
    return compareSync(password, hashedPassword);
}

const hashPassword = (password: string): string => {
    return hashSync(password);
}

const generateToken: (user: News.IUser) => Promise<string> = async (user: News.IUser): Promise<string> => {
    return await new SignJWT({email: user.email, displayName: user.displayName, role: user.role})
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('1w')
        .sign(secretKey);
}

const verifyToken: (token: string) => Promise<News.IUser | null> = async (token: string): Promise<News.IUser | null> => {
    try {
        const {payload} =  await jwtVerify(token, secretKey);
        const {email, displayName, role}= payload;
        return {
            email: email as string,
            displayName: displayName as string,
            role: role as string
        } as News.IUser;
    } catch {
        return null;
    }
}

export {
    comparePassword,
    hashPassword,
    generateToken,
    verifyToken
}
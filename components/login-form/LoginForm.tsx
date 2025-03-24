"use client"
import { useState } from "react";
import Link from "next/link";
import { User } from "@phosphor-icons/react/dist/ssr/User";
import { Lock } from "@phosphor-icons/react/dist/ssr/Lock";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { verifyToken } from "@/app/utils/auth";


const LoginForm = () => {
    const [isLogging, setIsLoging] = useState(false);
    const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = e.currentTarget["email"].value;
        const password = e.currentTarget["password"].value;
        setIsLoging(true);
        const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {'content-tupe': 'application/json'}
        });
        if(res.ok) {
            const token = await res.text();
            const user = await verifyToken(token);
            // localStorage.setItem("auth-user", token);
            // localStorage.setItem("auth-obj", JSON.stringify(user));
            toast.done("You are logged, you will be redirected..!")
            redirect("/");
        }
        else {
            console.log(res)
            toast.error("Invalid Username or password", {position: "bottom-center"});
        }
        setIsLoging(false);
    }
    return (
        <form className="space-y-6 max-w-md min-w-[400px] mx-auto p-6 bg-white rounded-lg shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
                </label>
                <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User className="absolute left-[12px] text-[#71b2ab]" size={18} />
                </div>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#71b2ab] focus:border-[#71b2ab] sm:text-sm"
                    required
                />
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <a href="#" className="text-sm font-medium text-[#71b2ab] hover:text-[#5a8f89] transition-colors">
                    Forgot Password?
                </a>
                </div>
                <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="absolute left-[12px] text-[#71b2ab]" size={18} />
                </div>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#71b2ab] focus:border-[#71b2ab] sm:text-sm"
                    required
                />
                </div>
            </div>

            <div className="flex items-center">
                <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-[#71b2ab] border-gray-300 rounded focus:ring-[#71b2ab]"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                Remember me
                </label>
            </div>

            <div>
                <button
                disabled={isLogging}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#71b2ab] hover:bg-[#5a8f89] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#71b2ab] transition-colors"
                >
                    {isLogging ? (
                        <>
                        <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        Processing...
                        </>
                    ) : (
                        "Login"
                    )}
                </button>
            </div>

            <div className="text-center text-sm text-gray-500">
                <span>Don&apos;t have an account?</span>
                <Link href="/user/signup" className="font-medium text-[#71b2ab] hover:text-[#5a8f89] transition-colors ml-1">
                Sign up
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;
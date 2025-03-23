'use client'
import React, { startTransition, useActionState, useEffect, useState } from 'react'
import Link from "next/link"
import { EnvelopeSimple, User, Lock, UserCircle } from "@phosphor-icons/react"
import { userValidation } from '@/app/utils/validation'
import { signUp } from '@/app/controllers/news-actions'
const SignUp = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [state, formAction, pending] = useActionState(signUp, {errors: []});
    useEffect (() => {
        setErrors(state.errors);
    }, [state])
    const validateUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors([]);
        const formData = new FormData(e.currentTarget);
        const user: News.IUser = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
            displayName: formData.get("displayName") as string,
            role: formData.get("role") as string
        }
        const userErrors = userValidation(user);
        if(userErrors.length > 0) {
            setErrors(userErrors);
        }
        else {
            startTransition(()=> {
                formAction(formData);
            })
        }
    }
    return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <div className="text-center">
                <UserCircle className="mx-auto h-16 w-16 text-[#71b2ab]" weight="duotone" />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
                <p className="mt-2 text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-[#71b2ab] hover:text-[#5a8f8a]">
                    Sign in
                </Link>
                </p>
            </div>
            <form className="mt-8 space-y-6" action={formAction} onSubmit={validateUser}>
                {
                        errors.length > 0 && (
                                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow">
                                    <h3 className="font-bold text-lg">🛑 Please fix the following errors:</h3>
                                    <ul className="list-disc list-inside mt-2">
                                        {errors.map((error, index) => (
                                            <li key={index} className="text-sm">
                                                {error}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                        )
                    }
                <div className="rounded-md shadow-sm space-y-4">
                <div className="relative">
                    <label htmlFor="displayName" className="sr-only">
                    Display Name
                    </label>
                    <User className="absolute left-[12px] text-[#71b2ab]" size={18} />
                    <input
                    id="displayName"
                    name="displayName"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#71b2ab] focus:border-[#71b2ab] focus:z-10 sm:text-sm"
                    placeholder="Display Name"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="email" className="sr-only">
                    Email address
                    </label>
                    <EnvelopeSimple className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#71b2ab] focus:border-[#71b2ab] focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="password" className="sr-only">
                    Password
                    </label>
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-md relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#71b2ab] focus:border-[#71b2ab] focus:z-10 sm:text-sm"
                    placeholder="Password"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="role" className="sr-only">
                    Role
                    </label>
                    <div className="flex items-center">
                    <select
                        required
                        id="role"
                        defaultValue={"user"}
                        name="role"
                        className="rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#71b2ab] focus:border-[#71b2ab] focus:z-10 sm:text-sm"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                    </select>
                    </div>
                </div>
                </div>

            <div>
                <button
                    disabled={pending}
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#71b2ab] hover:bg-[#5a8f8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#71b2ab] transition-colors duration-200"
                >
                    {
                        pending ?  "Creating..." : "Create Account"
                    }
                </button>
            </div>
        </form>
            <div className="mt-6">
                <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    Google
                </button>
                <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    GitHub
                </button>
                </div>
            </div>

            <p className="mt-2 text-xs text-center text-gray-500">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="font-medium text-[#71b2ab] hover:text-[#5a8f8a]">
                Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-medium text-[#71b2ab] hover:text-[#5a8f8a]">
                Privacy Policy
                </Link>
            </p>
            </div>
        </div>
    )
}

export default SignUp
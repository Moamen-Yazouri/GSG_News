'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
const SubmitArticle = () => {
    const {pending} = useFormStatus();
    return (
        <button
        type="submit"
        className="w-full p-3 bg-[#71b2ab] text-white font-semibold rounded-md hover:bg-[#4d8a84] transition-colors disabled:bg-[#b5c0bf] disabled:cursor-default"
        >
            {
                pending ? 'Submitting...': 'Submit News'
            }
        </button>
    )
}

export default SubmitArticle
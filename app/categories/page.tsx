'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
const page = () => {
    return (
    <div className='px-[60px]'>
        <ul>
            <li><Link className='underline' href={"/news-list/politics/us"}>US Politics</Link></li>
            <li><Link className='underline' href={"/news-list/sports/us"}>US sports</Link></li>
            <li><Link className='underline' href={"/news-list/politics/gb"}>GB Sports</Link></li>
            <li><Link className='underline' href={"/news-list/health/gb"}>GB Health</Link></li>
        </ul>
    </div>
    )
}

export default page;
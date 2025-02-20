'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
const page = () => {
    return (
    <div className='px-[60px]'>
        <ul>
            <li><Link href={"/news-list/politics"}>Politics</Link></li>
            <li><Link href={"/news-list/sports"}>Sports</Link></li>
            <li><Link href={"/news-list/health"}>Health</Link></li>
        </ul>
    </div>
    )
}

export default page;
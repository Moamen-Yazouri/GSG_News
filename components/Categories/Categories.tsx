import { CATEGORIES } from '@/app/constants/data'
import React from 'react'
import Category from '../Category/Category'

const Categories = () => {
    return (
        <div className="flex items-center justify-between flex-wrap">
            {
                CATEGORIES.map((cat, index) => 
                    <Category key={index} imgUrl={cat.imgUrl} description={cat.description} title={cat.title} />
                )
            }
        </div>
    )
}

export default Categories
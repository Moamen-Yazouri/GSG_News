import React from 'react';
import Link from 'next/link';
import Categories from '@/components/Categories/Categories';
const CategoriesPage = async () => {
    return (
        <div className='px-[60px]'>
            <Categories/>
        </div>
    )
}

export default CategoriesPage;
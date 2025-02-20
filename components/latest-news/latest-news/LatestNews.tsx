'use client'
import React, { useEffect, useState } from 'react'
import Item from '../items/Item';
import Styles from './Styles';
const LatestNews = () => {
    const [highlighted, sethighlighted] = useState(0);
    useEffect(() => {
        const highlight = setInterval(() => {
            sethighlighted(old => (old + 1) % 3);
        }, 3000)
        return () => clearInterval(highlight);
    }, [])
    return (
        <div className={Styles.wrapperDiv}>
            <h2 className= {Styles.h2}>Latest News Articles</h2>
            <div className={Styles.itemsDiv}>
                {[0, 1, 2].map((item) => <Item key={item} isHighlighted={item == highlighted}/>)};
            </div>
        </div>
    )
}

export default LatestNews;
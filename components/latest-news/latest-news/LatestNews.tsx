'use client'
import React, { useEffect, useState } from 'react'
import Item from '../items/Item';
import Styles from './Styles';
interface IProps {
    data: News.Item[]
}
const LatestNews = (props: IProps) => {
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
                {
                props.data.map((item, index) => (
                <Item
                key={item.id} 
                id={item.id}
                content= {item.content}
                title= {item.title}
                img={item.img}
                isHighlighted={index == highlighted}
                />))
                };
            </div>
        </div>
    )
}

export default LatestNews;
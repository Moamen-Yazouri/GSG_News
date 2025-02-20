import React from 'react'
import news from "@/public/n1.jpg"
import Styles from './Styles';
import { Roboto, Oi, Barriecito } from 'next/font/google';
interface IProps {
    isHighlighted: boolean;
}

const Item = (props: IProps) => {
    const style = Styles(props.isHighlighted);
    return (
        <div className= {`${style.wrapperDiv}`}>
            <div className= {style.infoDiv.wrapper}>
                <h3 className={style.infoDiv.h3}>Urban Planning</h3>
                <p className={style.infoDiv.p}>
                    Explore the recent developments in urban planning as cities expand and adapt to modern challenges.
                </p>
                <button className= {style.infoDiv.button}>Read more</button>
            </div>
            <img className= {style.img} src={news.src} alt="News" />
        </div>
    )
}

export default Item

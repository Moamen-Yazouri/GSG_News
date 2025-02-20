import React from 'react';
import Styles from './styles';
const Hero = () => {
    return (
    <div className={Styles.wrapperDiv}>
        <h2 className={Styles.h2}>Stay Informed, Stay Ahead</h2>
        <span className= {Styles.span}>Your go-to platform for the latest and most relevant news articles.</span>
        <div className={Styles.buttonsDiv}>
            <button>Post a News</button>
            <button className='outline'>Read News</button>
        </div>
    </div>
    )
}

export default Hero
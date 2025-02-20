import React from 'react'
import logo from "@/public/logo.png";
import NavLink from '../NavLink/NavLink';
import Styles from './Styles'; 
const Header = () => {
    return (
        <div className={Styles.wrapperDiv}>
            <div className={Styles.logoDiv.logo}>
                <img className={Styles.logoDiv.img} src={logo.src} alt='logo'/>
                <h1 className={Styles.logoDiv.h1}>GSG News</h1>
            </div>
            <div className={Styles.navLinkDiv}>
                <NavLink pathName='/'>Home</NavLink>
                <NavLink pathName='/add-news'>Add News</NavLink>
                <NavLink pathName='/categories'>Categories</NavLink>
                <NavLink pathName='/admin'>Admin</NavLink>
            </div>
        </div>
    )
}

export default Header
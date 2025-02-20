'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import Styles from './Styles';
interface IProps {
    children: React.ReactNode;
    pathName: string;
}
const NavLink = (props: IProps) => {
    const path = usePathname();
    const style = Styles(props.pathName, path);
    return (
        <Link href={props.pathName} className={style.link}>
            {props.children}
        </Link>
    )
}

export default NavLink;
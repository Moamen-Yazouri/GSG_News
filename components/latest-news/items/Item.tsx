import React from 'react'
import news from "@/public/n1.jpg"
import Styles from './Styles';
import Image from 'next/image'
import AltImage from '@/public/cat1.png'

interface IProps extends News.Item{
    isHighlighted: boolean;
}

const Item = (props: IProps) => {
    const style = Styles(props.isHighlighted);
    return (
        <div className= {`${style.wrapperDiv}`}>
            <div className='relative w-[330px] m-[5px] bg-white rounded-[2px] shadow-[0_0_5px_0px_#171a1f7d] flex flex-col gap-[10px] pb-[10px]'>
            <div className='w-[100%] h-[250px]   relative'>
                <Image className={'object-cover'} src={props.img || AltImage} alt='category-image' fill/>
            </div>
            <h2 className='text-[18px] font-bold text-[#9095A0FF] m-0 py-[0] px-[10]'>{props.title}</h2>
            <p className='text-[16px] font-normal text-[#9095A0FF] m-0 py-[0] px-[10] overflow-ellipsis'>{props.content}</p>
            </div>
        </div>
    )
}

export default Item

import React from 'react'
import Image from 'next/image'
interface IProps extends News.ICategory {}
const Category = (props: IProps) => {
  return (
    <div className='mt-[70px] relative w-[330px] m-[5px] bg-white rounded-[2px] shadow-[0_0_5px_0px_#171a1f7d] flex flex-col gap-[10px] pb-[10px]'>
      <div className='w-[100%] h-[150px] relative'>
        <Image className={'object-cover'} src={props.imgUrl} alt='category-image' fill/>
      </div>
      <h2 className='text-[18px] font-bold text-[#9095A0FF] m-0 py-[0] px-[10]'>{props.title}</h2>
      <p className='text-[16px] font-normal text-[#9095A0FF] m-0 py-[0] px-[10]'>{props.description}</p>
    </div>
  )
}

export default Category
import React from 'react'
import Image from 'next/image'
interface IProps extends News.Item{}
const News = (props: IProps) => {
  return (
    <div>
        <h2>{props.title}</h2>
        {
          props.img &&
          <div className='w-[300px]'>
            <Image src={props.img} alt='image-News' fill/>
          </div>
        }
        <p className='max-w-full overflow-ellipsis px-[5px]'>
          {props.content}
        </p>
    </div>
  )
}

export default News
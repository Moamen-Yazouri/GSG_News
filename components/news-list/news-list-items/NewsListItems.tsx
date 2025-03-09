import React from 'react'
import NewsListItem from '../NewsListItem'
interface IProps {
    newsList: News.Item_[]
}
const NewsListItems = (props: IProps) => {
    return (
        <div className='flex justify-start gap-[20px] ml-[20px] flex-wrap'>
            {props.newsList.map((newsItem) => <NewsListItem key={newsItem.id} data={newsItem} />)}
        </div>
    )
}

export default NewsListItems
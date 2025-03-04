'use client'
import React from 'react'
interface IProps {
    error: Error,
    reset: () => void
}
const Error = (props: IProps) => {
    return (
        <div>
            <h1>Oops..!</h1>
            <h3>Data Fetching does'not happend correctly</h3>
            <p>
                <small>{props.error.message}</small>
            </p>
        </div>
    )
}

export default Error
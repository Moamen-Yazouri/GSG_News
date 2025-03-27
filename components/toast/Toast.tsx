"use client"
import {toast} from "react-toastify";
import {useEffect} from "react";

interface IProps {
    message?: string;
}
const ToastMessage = (props: IProps) => {
    useEffect(() => {
        if(props.message)
        toast.error(props.message);
    }, [props.message]);
    return null;
}
export default ToastMessage;
import React, {useEffect, useState} from "react";

type PropsType = {}

const get2DigetsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return <div>
        <span>{get2DigetsString(date.getFullYear())}</span>
        :
        <span>{get2DigetsString(date.getMonth())}</span>
        :
        <span>{get2DigetsString(date.getDay())}</span>
        :
        <span>{get2DigetsString(date.getHours())}</span>
        :
        <span>{get2DigetsString(date.getMinutes())}</span>
        :
        <span>{get2DigetsString(date.getSeconds()}</span>
    </div>
}
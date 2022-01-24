import React, {useEffect, useState} from "react";

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        })
    }, [])

    return <div>
        <span>{date.getFullYear()}</span>
        :
        <span>{date.getMonth()}</span>
        :
        <span>{date.getDay()}</span>
        :
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </div>
}
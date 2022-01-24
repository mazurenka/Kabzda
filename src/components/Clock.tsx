import React, {useEffect, useState} from "react";

type PropsType = {
    mode?: "digital" | "analog"
}

const get2DigetsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000);

        return () => {

            clearInterval(setIntervalId)
        }

    }, [])

    let view

    switch (props.mode) {
        case 'analog' :
            view = <AnalogClockView date={date} />
            break;
        case 'digital' :
        default:
            view = <DigitalClockView date={date} />
    }

    return <div>
        {view}
    </div>
}

type ClockViewPropsType = {
    date: Date
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
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
        <span>{get2DigetsString(date.getSeconds())}</span>
    </>
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <span>ANALOG</span>
}













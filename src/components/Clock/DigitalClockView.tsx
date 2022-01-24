import React from "react";
import {ClockViewPropsType, get2DigetsString} from "./Clock";

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
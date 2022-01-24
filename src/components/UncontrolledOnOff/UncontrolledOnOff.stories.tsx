import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Rating, RatingValueType} from "../Rating/Rating";
import {OnOff, PropsType} from "../OnOff/onOff";
import {UncontrolledOnOff} from "./UncontrolledonOff";


export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}

const callback = action('on of off clicked');

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const DefInputValue = () => <input defaultValue={'yo'} />


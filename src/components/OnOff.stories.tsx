import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Rating, RatingValueType} from "./Rating";
import {OnOff, PropsType} from "./onOff";


export default {
    title: 'OnOff stories',
    component: OnOff,
}

const callback = action('on of off clicked');

export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue}/>
}


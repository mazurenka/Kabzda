import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Rating, RatingValueType} from "./Rating";
import {OnOff, PropsType} from "./onOff";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('on of off clicked');

export const CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>
export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Menu"} collapsed={value} onChange={() => setValue(!value)}/>
}


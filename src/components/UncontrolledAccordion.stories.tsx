import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
}

const callback = action('on of off clicked');

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={"Menu"} />
}


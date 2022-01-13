import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === "TOGGLE-COLLAPSED") {
        return !state;
    }

    return state;
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)

    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }}/>
       */}
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: "TOGGLE-COLLAPSED"})
        }}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (

        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


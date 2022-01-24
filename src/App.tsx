import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/onOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledonOff";

function App()  {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>( true)
    let [switchOn, setSwitchOn] = useState<boolean>( true)

    return (
        <div className={"App"}>

            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <UncontrolledOnOff onChange={setSwitchOn}/>

{/*
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating value={0}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}


export default App;

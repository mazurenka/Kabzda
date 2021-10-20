import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/onOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {Accordion} from "./components/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledonOff";

function App()  {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>( true)
    let [switchOn, setSwitchOn] = useState<boolean>( true)

    return (
        <div className={"App"}>

            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <UncontrolledOnOff onChange={setSwitchOn}/>

            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating value={0}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}


export default App;

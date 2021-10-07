import React, {useState} from 'react';

export default {
    title: 'input'
    //component: input
}

export const UncontrolledInput = () => <input/>
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')

    return <><input onChange={(e) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    }/></>

}

export const ControlledInput = () => <input value={'IT'}/>

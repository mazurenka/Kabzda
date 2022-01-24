import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log("UseEffect every render")
        document.title = counter.toString();
    },)

    useEffect(() => {
        console.log("UseEffect only first render(ComponentDidMount")
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("UseEffect first render and every change counter")
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter} {fake}

        <button onClick={() => setFake(fake + 1)}>+ fake</button>

        <button onClick={() => setCounter(counter + 1)}>+ count</button>
    </>
}

export const SetTimeOutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeOutExample')

    useEffect(() => {

        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1)

    }, [])




    return <>
        Hello, counter: {counter} - fake: {fake}

        {/*<button onClick={() => setFake(fake + 1)}>+ fake</button>*/}

        {/*<button onClick={() => setCounter(counter + 1)}>+ count</button>*/}
    </>
}


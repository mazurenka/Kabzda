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

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeOutExample')

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])


    return <>
        Hello, counter: {counter} - fake: {fake}

        {/*<button onClick={() => setFake(fake + 1)}>+ fake</button>*/}

        {/*<button onClick={() => setCounter(counter + 1)}>+ count</button>*/}
    </>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred  ' + counter)

        return () => {
            console.log('Reset Effect')
        }

    }, [counter])

    const increase = () => setCounter(counter + 1)

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered ' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered ' + text)

    useEffect(() => {

        setTimeout(() => {
            setText("3 sec passed")
        }, 3000)
        return () => {

        }
    }, [text])

    return <>
        text: {text}
    </>
}

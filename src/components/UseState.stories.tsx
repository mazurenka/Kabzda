import React, {useState} from "react";

export default {
    title: "useState demo",
}

function generateData() {
    console.log("generateData")
    return 33437358359532
}

export const Example1 = () => {
    console.log('Examples')
    const [counter, setCounter] = useState(generateData) //[0, function(newValue){}]

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}


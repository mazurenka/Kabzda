import React, {useState} from "react";

export default {
    title: "useMemo",
}

export const Example = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let ResultA = 1
    let ResultB = 1

    for ( let i = 1; i <= a; i++) {
        let fake = 0;
        while (fake < 100000000) {
            fake++;
            const fakeValue = Math.random()
        }
        ResultA = ResultA * i;
    }
    for ( let i = 1; i <= b; i++) {
        ResultB = ResultB * i;
    }



    return <>
        <input value={a} onChange={(e) => {
            setA(Number(e.currentTarget.value))
        }}/>
        <input value={b} onChange={(e) => {
            setB(Number(e.currentTarget.value))
        }
        }/>
        <hr/>
        <div>
            Result for a: {ResultA}
        </div>
        <div>
            Result for b: {ResultB}
        </div>
    </>
}





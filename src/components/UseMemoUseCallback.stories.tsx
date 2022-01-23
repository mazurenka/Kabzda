import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "useMemo",
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let ResultA = 1
    let ResultB = 1

    ResultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
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

const UsersSecret = (props: { users: Array<string> }) => {
    debugger
    console.log('USERS')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', "Valera", "Artem"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', "JS", "CSS"])

    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Redux ' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newBooks = [...books, 'Redux ' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {
    addBook: () => void
}

const BookSecret = (props: BookSecretPropsType) => {
    console.log('BookSecret')

    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BookSecret)




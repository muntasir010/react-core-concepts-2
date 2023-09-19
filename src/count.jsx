import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    const handleADD = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter:</h3>
            <button onClick={handleADD}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
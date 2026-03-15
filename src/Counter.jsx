import { useState } from "react";

export default function Counter() {
    // useState stores and updates component state.
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        // alert("btn clicked");

        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle = {
        border: '2px solid blue',
    }
    
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
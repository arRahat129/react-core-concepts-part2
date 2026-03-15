import { useState } from "react";

export default function ToggleText(){

    const [showText, setShowText] = useState(false);

    const handleToggle = () =>{
        setShowText(!showText);
    }

    return(
        <div className="card">
            <h3>Show / Hide Text</h3>

            <button onClick={handleToggle}>
                {showText ? "Hide" : "Show"} Text
            </button>

            {
                showText && <p>Hello, React Learner!</p>
            }
        </div>
    )
}
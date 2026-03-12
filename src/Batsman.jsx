import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updateeRuns = runs + 1;
        setRuns(updateeRuns);
    }

    const handleDouble = () => {
        const updateeRuns = runs + 2;
        setRuns(updateeRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updateSixes = sixes + 1;
        setRuns(updatedRuns);
        setSixes(updateSixes);
    }

    return (
        <div>
            <h3>Player: Bangla Tigers</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs > 50 && <p>You Score: 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleDouble}>Doubles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}
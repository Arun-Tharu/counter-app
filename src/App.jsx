import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="counter-container">
            <div className="counter-card">
                <h1>Counter App</h1>
                <h2>{count}</h2>
                <div>
                    <button
                        className="inc"
                        onClick={() => setCount(count + 1)}>
                        Increment
                        +
                    </button>

                    <button
                    className="dec"
                    onClick={() => setCount(count - 1)}>
                        Decrement
                        -
                    </button>
                </div>

                <button
                    className="reset-button"
                    onClick={() => setCount(0)}>
                    Reset
                </button>

            </div>

        </div>
    )
}

export default App;
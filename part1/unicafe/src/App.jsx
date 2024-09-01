import { useState } from "react";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const total = good + neutral + bad;

    return (
        <main>
            <h2>give feedback</h2>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <h2>statistics</h2>
            good {good}
            <br />
            neutral {neutral}
            <br />
            bad {bad}
            <br />
            all {total}
            <br />
            average {(good - bad) / total}
            <br />
            positive {(good / total) * 100} %
        </main>
    );
};

export default App;

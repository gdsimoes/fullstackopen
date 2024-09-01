import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;

    if (total === 0)
        return (
            <>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </>
        );

    return (
        <>
            <h2>statistics</h2>
            <p>
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
            </p>
        </>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <main>
            <h2>give feedback</h2>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </main>
    );
};

export default App;

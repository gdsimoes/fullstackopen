import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ name, stats }) => {
    return (
        <p>
            {name} {stats}
        </p>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    // I'm not a fan of switch. Maybe I'll change this later.
    const eventHandler = (type) => {
        switch (type) {
            case "good":
                return () => setGood(good + 1);
            case "neutral":
                return () => setNeutral(neutral + 1);
            case "bad":
                return () => setBad(bad + 1);

            // I should probably better handle the error
            default:
                return;
        }
    };

    const typeVar = (type) => {
        if (type === "good") {
            return good;
        } else if (type === "neutral") {
            return neutral;
        } else {
            return bad;
        }
    };

    // some stats constants
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = `${(good / (good + neutral + bad)) * 100} %`;

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={eventHandler("good")} text="good" />
            <Button handleClick={eventHandler("neutral")} text="neutral" />
            <Button handleClick={eventHandler("bad")} text="bad" />

            <h1>statistics</h1>
            <Display name="good" stats={typeVar("good")} />
            <Display name="neutral" stats={typeVar("neutral")} />
            <Display name="bad" stats={typeVar("bad")} />
            <Display name="all" stats={all} />
            <Display name="average" stats={average} />
            <Display name="positive" stats={positive} />
        </div>
    );
};

export default App;

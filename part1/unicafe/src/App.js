import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ name, stats }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{stats}</td>
        </tr>
    );
};

const Statistics = ({ good, neutral, bad }) => {
    // some stats constants
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = `${(good / (good + neutral + bad)) * 100} %`;

    const typeVar = (type) => {
        if (type === "good") {
            return good;
        } else if (type === "neutral") {
            return neutral;
        } else {
            return bad;
        }
    };

    // Show no statistics before feedback is given.
    if (all === 0) {
        return (
            <>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </>
        );
    }
    return (
        <>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic name="good" stats={typeVar("good")} />
                    <Statistic name="neutral" stats={typeVar("neutral")} />
                    <Statistic name="bad" stats={typeVar("bad")} />
                    <Statistic name="all" stats={all} />
                    <Statistic name="average" stats={average} />
                    <Statistic name="positive" stats={positive} />
                </tbody>
            </table>
        </>
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

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={eventHandler("good")} text="good" />
            <Button handleClick={eventHandler("neutral")} text="neutral" />
            <Button handleClick={eventHandler("bad")} text="bad" />

            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;

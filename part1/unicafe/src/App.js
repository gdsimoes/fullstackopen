import { useState } from "react";

const Button = ({ text, handleClick }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>
            {value} {text === "positive" ? "%" : ""}
        </td>
    </tr>
);

const Statistics = ({ good, neutral, bad }) => {
    const all = good + bad + neutral;
    const average = (good - bad) / all;
    const positive = (good / all) * 100;

    if (all === 0) {
        return (
            <>
                <h2>statistics</h2>

                <div>No feedback given</div>
            </>
        );
    } else {
        return (
            <>
                <h2>statistics</h2>

                <table>
                    <tbody>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={all} />
                        <StatisticLine text="average" value={average} />
                        <StatisticLine text="positive" value={positive} />
                    </tbody>
                </table>
            </>
        );
    }
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <>
            <h2>give feedback</h2>

            <Button text="good" handleClick={() => setGood(good + 1)} />
            <Button
                text="neutral"
                handleClick={() => setNeutral(neutral + 1)}
            />
            <Button text="bad" handleClick={() => setBad(bad + 1)} />

            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    );
};

export default App;

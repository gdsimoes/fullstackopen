import { useState } from "react";

const Button = ({ setter, text }) => <button onClick={() => setter((value) => value + 1)}>{text}</button>;

const StatisticsLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
);

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
            <table>
                <tbody>
                    <StatisticsLine text="good" value={good} />
                    <StatisticsLine text="neutral" value={neutral} />
                    <StatisticsLine text="bad" value={bad} />
                    <StatisticsLine text="all" value={total} />
                    <StatisticsLine text="average" value={(good - bad) / total} />
                    <StatisticsLine text="positive" value={(good / total) * 100 + " %"} />
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

    return (
        <main>
            <h2>give feedback</h2>
            <Button setter={setGood} text="good" />
            <Button setter={setNeutral} text="neutral" />
            <Button setter={setBad} text="bad" />

            <Statistics good={good} neutral={neutral} bad={bad} />
        </main>
    );
};

export default App;

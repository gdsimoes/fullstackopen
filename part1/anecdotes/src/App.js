import { useState } from "react";

// Returns random integer between min (inclusive) and max (exclusive)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Since the anecdotes will never change it's best to define it as a global variable
const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
];

const DisplayAnecdote = ({ index, votes }) => (
    <>
        <div>{anecdotes[index]}</div>
        <div>
            has {votes[index]} {votes[index] === 1 ? "vote" : "votes"}
        </div>
    </>
);

const DisplayDaily = ({ votes, setVotes }) => {
    const [selected, setSelected] = useState(0);

    const voteClick = () => {
        const copyVotes = [...votes];
        copyVotes[selected]++;
        setVotes(copyVotes);
    };

    return (
        <>
            <h2>Anecdote of the day</h2>
            <DisplayAnecdote index={selected} votes={votes} />
            <button onClick={voteClick}>vote</button>
            <button onClick={() => setSelected(randomInt(0, anecdotes.length))}>
                next anecdote
            </button>
        </>
    );
};

const DisplayMostVoted = ({ votes }) => {
    // Find the index of the most voted anecdote
    const index = votes.reduce(
        (maxIndex, value, index) =>
            value > votes[maxIndex] ? index : maxIndex,
        0
    );

    return (
        <>
            <h2>Anecdote with most votes</h2>
            <DisplayAnecdote index={index} votes={votes} />
        </>
    );
};

const App = () => {
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

    return (
        <>
            <DisplayDaily votes={votes} setVotes={setVotes} />
            <DisplayMostVoted votes={votes} />
        </>
    );
};

export default App;

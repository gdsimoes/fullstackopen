import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    ];

    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    // handleClick functions
    function handleVote() {
        const copyVotes = [...votes];
        copyVotes[selected] += 1;
        setVotes(copyVotes);
    }

    function handleNext() {
        setSelected(getRandomIndex(anecdotes));
    }

    // return index of most voted anecdote
    function mostVoted() {
        function reducer(guessIndex, currentValue, currentIndex) {
            if (votes[guessIndex] < currentValue) {
                return currentIndex;
            } else {
                return guessIndex;
            }
        }

        const firstIndex = 0;

        return votes.reduce(reducer, firstIndex);
    }

    // new array filled with zeros
    const baseArray = new Array(anecdotes.length).fill(0);

    const [selected, setSelected] = useState(getRandomIndex(anecdotes));
    const [votes, setVotes] = useState(baseArray);

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button handleClick={handleVote} text="vote" />
            <Button handleClick={handleNext} text="next anecdote" />

            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[mostVoted()]}</p>
        </div>
    );
};

export default App;

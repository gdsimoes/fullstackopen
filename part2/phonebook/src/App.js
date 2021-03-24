import React, { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Dan Abramov", number: "12-43-234345" },
        { name: "Mary Poppendieck", number: "39-23-6423122" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newFilter, setNewFilter] = useState("");

    function handleChange(setFunction) {
        return (event) => setFunction(event.target.value);
    }

    function addPerson(event) {
        event.preventDefault();
        const person = {
            name: newName,
            number: newNumber,
        };

        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            // I'm not sure if I should reset newName and newNumber
            setNewName("");
            setNewNumber("");
        } else {
            setPersons(persons.concat(person));
            setNewName("");
            setNewNumber("");
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with
                <input
                    value={newFilter}
                    onChange={handleChange(setNewFilter)}
                />
            </div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:{" "}
                    <input
                        value={newName}
                        onChange={handleChange(setNewName)}
                    />
                </div>
                <div>
                    number:{" "}
                    <input
                        value={newNumber}
                        onChange={handleChange(setNewNumber)}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons
                .filter((person) =>
                    person.name.toLowerCase().includes(newFilter.toLowerCase())
                )
                .map((person) => (
                    <p key={person.name}>
                        {person.name} {person.number}
                    </p>
                ))}
        </div>
    );
};

export default App;

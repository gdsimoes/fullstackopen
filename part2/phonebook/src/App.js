import React, { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-1234567" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    function handleNameChange(event) {
        setNewName(event.target.value);
    }

    function handleNumberChange(event) {
        setNewNumber(event.target.value);
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
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number:{" "}
                    <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <p key={person.name}>
                    {person.name} {person.number}
                </p>
            ))}
        </div>
    );
};

export default App;

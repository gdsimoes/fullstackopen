import React, { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    function handleNameChange(event) {
        setNewName(event.target.value);
    }

    function addPerson(event) {
        event.preventDefault();
        const person = {
            name: newName,
        };

        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            setNewName(""); // I'm not sure if I should reset newName
        } else {
            setPersons(persons.concat(person));
            setNewName("");
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
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <p key={person.name}>{person.name}</p>
            ))}
        </div>
    );
};

export default App;

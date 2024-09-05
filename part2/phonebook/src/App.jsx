import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1234567" }]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        const newPersons = [...persons, { name: newName, number: newNumber }];
        setPersons(newPersons);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
                    </label>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <div key={person.name}>
                    {person.name} {person.number}
                </div>
            ))}
        </div>
    );
};

export default App;

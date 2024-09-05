import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [search, setSearch] = useState("");

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
            <div>
                <label>
                    filter shown with <input value={search} onChange={(event) => setSearch(event.target.value)} />
                </label>
            </div>
            <h2>add a new</h2>
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
            {persons
                .filter((person) => person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                .map((person) => (
                    <div key={person.name}>
                        {person.name} {person.number}
                    </div>
                ))}
        </div>
    );
};

export default App;

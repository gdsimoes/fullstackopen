import { useState } from "react";

function Filter({ search, setSearch }) {
    return (
        <div>
            <label>
                filter shown with <input value={search} onChange={(event) => setSearch(event.target.value)} />
            </label>
        </div>
    );
}

function PersonForm({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) {
    function handleSubmit(event) {
        event.preventDefault();

        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        const newPersons = [...persons, { name: newName, number: newNumber }];
        setPersons(newPersons);
        setNewName("");
        setNewNumber("");
    }

    return (
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
    );
}

function Persons({ persons, search }) {
    return (
        <>
            {persons
                .filter((person) => person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                .map((person) => (
                    <div key={person.name}>
                        {person.name} {person.number}
                    </div>
                ))}
        </>
    );
}

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

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter search={search} setSearch={setSearch} />

            <h2>add a new</h2>

            <PersonForm
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
                persons={persons}
                setPersons={setPersons}
            />

            <h2>Numbers</h2>

            <Persons persons={persons} search={search} />
        </div>
    );
};

export default App;

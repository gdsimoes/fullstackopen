import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already in the phone book`);
            return;
        }

        const newPersons = [...persons, { name: newName }];
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
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <div key={person.name}>{person.name}</div>
            ))}
        </div>
    );
};

export default App;

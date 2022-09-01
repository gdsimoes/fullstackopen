import { useState, useEffect } from "react";

import Person from "./components/Person";
import Input from "./components/Input";

import personsService from "./services/persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        personsService
            .getAll()
            .then((personsFromServer) => setPersons(personsFromServer));
    }, []);

    const addPerson = (event) => {
        event.preventDefault();

        if (persons.every((person) => person.name !== newName)) {
            const personObject = {
                name: newName,
                number: newNumber,
            };

            personsService
                .create(personObject)
                .then((serverObj) => setPersons(persons.concat(serverObj)));
        } else {
            const msg = `${newName} is already added to phonebook, replace the old number with a new one?`;
            const personIndex = persons.findIndex(
                (person) => person.name === newName
            );
            const personObject = {
                ...persons[personIndex],
                number: newNumber,
            };

            if (window.confirm(msg)) {
                const personsCopy = [...persons];
                personsCopy[personIndex] = personObject;
                personsService
                    .update(personObject)
                    .then((serverObj) => setPersons(personsCopy));
            }
        }

        setNewName("");
        setNewNumber("");
    };

    const delPerson = (person) => {
        if (window.confirm(`Delete ${person.name}?`)) {
            personsService.del(person.id);
            setPersons(persons.filter((p) => p.id !== person.id));
        }
    };

    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                <Input
                    label={"filter shown with "}
                    value={filter}
                    setState={setFilter}
                />
            </div>
            <h3>add a new</h3>
            <form onSubmit={addPerson}>
                <div>
                    <Input
                        label={"name: "}
                        value={newName}
                        setState={setNewName}
                    />
                </div>
                <div>
                    <Input
                        label={"number: "}
                        value={newNumber}
                        setState={setNewNumber}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h3>Numbers</h3>
            {filteredPersons.map((person) => (
                <Person
                    key={person.id}
                    name={person.name}
                    number={person.number}
                    delPerson={() => delPerson(person)}
                />
            ))}
        </div>
    );
};

export default App;

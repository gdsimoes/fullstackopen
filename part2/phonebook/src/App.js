import React, { useState, useEffect } from "react";

import personService from "./services/personService";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newFilter, setNewFilter] = useState("");

    useEffect(() => {
        personService
            .getAll()
            .then((initialPersons) => setPersons(initialPersons));
    }, []);

    return (
        <>
            <h2>Phonebook</h2>
            <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
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
            <Persons persons={persons} newFilter={newFilter} />
        </>
    );
};

export default App;

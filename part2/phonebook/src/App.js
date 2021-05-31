import React, { useState, useEffect } from "react";

// Module responsible for the interaction with the database
import personService from "./services/personService";

// Components
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newFilter, setNewFilter] = useState("");
    const [notification, setNotification] = useState(null);

    // Fetch all people from the database after first render
    useEffect(() => {
        personService
            .getAll()
            .then((initialPersons) => setPersons(initialPersons));
    }, []);

    return (
        <>
            <h2>Phonebook</h2>
            <Notification notification={notification} />
            <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
            <h2>add a new</h2>
            <PersonForm
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
                persons={persons}
                setPersons={setPersons}
                setNotification={setNotification}
            />
            <h2>Numbers</h2>
            <Persons
                persons={persons}
                setPersons={setPersons}
                newFilter={newFilter}
            />
        </>
    );
};

export default App;

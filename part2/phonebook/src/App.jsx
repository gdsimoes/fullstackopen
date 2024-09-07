import { useState, useEffect } from "react";

import personService from "./services/persons";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState({ value: "", type: "" });

    useEffect(() => {
        personService.read().then((initialPersons) => {
            setPersons(initialPersons);
        });
    }, []);

    // Remove Notification after 5 seconds
    useEffect(() => {
        if (message.value === "") {
            return;
        }

        const timer = setTimeout(() => {
            setMessage({ value: "", type: "" });
        }, 5000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <div>
            <h2>Phonebook</h2>

            <Notification message={message} />

            <Filter search={search} setSearch={setSearch} />

            <h2>add a new</h2>

            <PersonForm
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
                persons={persons}
                setPersons={setPersons}
                setMessage={setMessage}
            />

            <h2>Numbers</h2>

            <Persons persons={persons} setPersons={setPersons} search={search} />
        </div>
    );
};

export default App;

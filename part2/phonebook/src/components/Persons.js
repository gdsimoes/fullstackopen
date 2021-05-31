import React from "react";
import personService from "../services/personService";

// I usually define only one component per file, but since this one will
// not be helpful outside of the 'Persons' component, I defined it here.
const DeleteButton = ({ persons, setPersons, person }) => {
    const handleClick = () => {
        if (window.confirm(`Delete ${person.name}?`)) {
            personService
                .remove(person.id)
                .then(setPersons(persons.filter((p) => p.id !== person.id)));
        }
    };
    return <button onClick={handleClick}>delete</button>;
};

const Persons = ({ persons, setPersons, newFilter }) => {
    const personsFiltered = persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
    );

    return personsFiltered.map((person) => (
        <p key={person.id}>
            {person.name} {person.number}{" "}
            <DeleteButton
                persons={persons}
                setPersons={setPersons}
                person={person}
            />
        </p>
    ));
};

export default Persons;

import React from "react";
import personService from "../services/personService";

const DeleteButton = ({ persons, setPersons, person }) => {
    const handleClick = () => {
        if (window.confirm(`Delete ${person.name}?`)) {
            personService
                .remove(person.id)
                .then(setPersons(persons.slice(0, persons.length - 1)));
        }
    };
    return <button onClick={handleClick}>delete</button>;
};

const Persons = ({ persons, setPersons, newFilter }) => {
    const personsFiltered = persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
    );

    return personsFiltered.map((person) => (
        <p key={person.name}>
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

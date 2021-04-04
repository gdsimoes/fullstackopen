import React from "react";

const Persons = ({ persons, newFilter }) => {
    const personsFiltered = persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
    );

    return personsFiltered.map((person) => (
        <p key={person.name}>
            {person.name} {person.number}
        </p>
    ));
};

export default Persons;

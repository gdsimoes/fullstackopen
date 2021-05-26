import React from "react";
import personService from "../services/personService";
import NameForm from "./NameForm";
import NumberForm from "./NumberForm";

const PersonForm = (props) => {
    const {
        newName,
        setNewName,
        newNumber,
        setNewNumber,
        persons,
        setPersons,
    } = props;

    function addPerson(event) {
        event.preventDefault();

        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            // I'm not sure if I should reset newName and newNumber
            setNewName("");
            setNewNumber("");
        } else {
            const personObj = {
                name: newName,
                number: newNumber,
            };

            personService.create(personObj).then((person) => {
                setPersons(persons.concat(person));
                setNewName("");
                setNewNumber("");
            });
        }
    }

    return (
        <form onSubmit={addPerson}>
            <NameForm newName={newName} setNewName={setNewName} />
            <NumberForm newNumber={newNumber} setNewNumber={setNewNumber} />

            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;

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
        setNotification,
    } = props;

    // set the notification and remove it after 5 seconds
    function notify(msg, error) {
        setNotification({ msg, error });
        setTimeout(() => {
            setNotification(null);
        }, 5000);
    }

    function updatePerson(person) {
        const question = `${person.name} is already added to phonebook, replace the old number with a new one?`;

        if (window.confirm(question)) {
            const updatedObject = {
                ...person,
                number: newNumber,
            };

            personService
                .update(updatedObject)
                .then((returnedPerson) => {
                    // render the updated entry and the notification
                    setPersons(
                        persons.map((p) =>
                            p.name !== returnedPerson.name ? p : updatedObject
                        )
                    );
                    notify(
                        `Number for ${returnedPerson.name} was changed`,
                        false
                    );
                })
                .catch((error) => {
                    // In case the user was removed from the database since the last render
                    // notify the user about it and render the component again.
                    notify(
                        `Information of ${newName} has already been removed from server`,
                        true
                    );
                    setPersons(persons.filter((p) => p.id !== person.id));
                });
        }
        setNewName("");
        setNewNumber("");
    }

    // onSubmit function
    function addPerson(event) {
        event.preventDefault();

        // check if the person is already in the database
        const person = persons.find((p) => p.name === newName);

        if (person) {
            // if the person is in the database update their number
            updatePerson(person);
        } else {
            // otherwise create a new entry
            const personObj = {
                name: newName,
                number: newNumber,
            };

            personService.create(personObj).then((person) => {
                setPersons(persons.concat(person));
                notify(`Added ${newName}`, false);
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

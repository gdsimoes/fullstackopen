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

    function addPerson(event) {
        event.preventDefault();

        const person = persons.find((p) => p.name === newName);
        if (person) {
            const question = `${person.name} is already added to phonebook, replace the old number with a new one?`;

            if (window.confirm(question)) {
                const updatedObject = {
                    ...person,
                    number: newNumber,
                };

                personService
                    .update(updatedObject)
                    .then((returnedPerson) => {
                        // Render the updated entry and the notification
                        setPersons(
                            persons.map((p) =>
                                p.name !== returnedPerson.name
                                    ? p
                                    : updatedObject
                            )
                        );
                        setNotification({
                            msg: `Number for ${returnedPerson.name} was changed`,
                            error: false,
                        });
                        setTimeout(() => {
                            setNotification(null);
                        }, 5000);
                    })
                    .catch((error) => {
                        setNotification({
                            msg: `Information of ${newName} has already been removed from server`,
                            error: true,
                        });
                        setTimeout(() => {
                            setNotification(null);
                        }, 5000);
                        setPersons(persons.filter((p) => p.id !== person.id));
                    });
            }
            setNewName("");
            setNewNumber("");
        } else {
            const personObj = {
                name: newName,
                number: newNumber,
            };

            personService.create(personObj).then((person) => {
                setPersons(persons.concat(person));
                setNotification({ msg: `Added ${newName}`, error: false });
                setTimeout(() => {
                    setNotification(null);
                }, 5000);
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

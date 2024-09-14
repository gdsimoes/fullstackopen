import personService from "../services/persons";

function PersonForm({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, setMessage }) {
    async function handleSubmit(event) {
        event.preventDefault();

        if (persons.some((person) => person.name === newName)) {
            if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const { id } = persons.find((person) => person.name === newName);
                try {
                    const updatedPerson = await personService.update(id, { name: newName, number: newNumber });
                    setPersons(persons.map((person) => (person.id !== id ? person : updatedPerson)));
                    setMessage({ value: `Updated ${newName}`, type: "" });
                } catch (error) {
                    // console.log(error.response.data);
                    if (error.response.status === 404) {
                        setMessage({
                            value: `Information of ${newName} has already been removed from the server`,
                            type: "error",
                        });
                        setPersons(persons.filter((person) => person.id !== id));
                    } else if (error.response.status === 400) {
                        setMessage({ value: error.response.data.error, type: "error" });
                    }
                }
            }

            setNewName("");
            setNewNumber("");
            return;
        }

        try {
            const returnedPerson = await personService.create({ name: newName, number: newNumber });
            setMessage({ value: `Added ${newName}`, type: "" });
            setPersons([...persons, returnedPerson]);
        } catch (error) {
            setMessage({ value: error.response.data.error, type: "error" });
        } finally {
            setNewName("");
            setNewNumber("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
                </label>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
}

export default PersonForm;

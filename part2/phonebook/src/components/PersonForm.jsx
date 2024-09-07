import personService from "../services/persons";

function PersonForm({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, setMessage }) {
    async function handleSubmit(event) {
        event.preventDefault();

        if (persons.some((person) => person.name === newName)) {
            if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const { id } = persons.find((person) => person.name === newName);
                const updatedPerson = await personService.update(id, { name: newName, number: newNumber });
                setPersons(persons.map((person) => (person.id !== id ? person : updatedPerson)));
                setMessage(`Updated ${newName}`);
            }

            setNewName("");
            setNewNumber("");
            return;
        }

        const returnedPerson = await personService.create({ name: newName, number: newNumber });
        setMessage(`Added ${newName}`);
        setNewName("");
        setNewNumber("");
        setPersons([...persons, returnedPerson]);
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

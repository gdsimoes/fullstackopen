import axios from "axios";

function PersonForm({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) {
    function handleSubmit(event) {
        event.preventDefault();

        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        axios.post("http://localhost:3001/persons", { name: newName, number: newNumber }).then((response) => {
            setNewName("");
            setNewNumber("");
            setPersons([...persons, response.data]);
        });
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

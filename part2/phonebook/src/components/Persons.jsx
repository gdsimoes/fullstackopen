import personService from "../services/persons";

function Persons({ persons, setPersons, search }) {
    function handleDelete({ id, name }) {
        if (window.confirm(`Delete ${name}?`)) {
            personService
                .del(id)
                .then(setPersons(persons.filter((person) => person.id !== id)))
                .catch((error) => console.error(error));
        }
    }

    return (
        <>
            {persons
                .filter((person) => person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                .map((person) => (
                    <div key={person.id}>
                        {person.name} {person.number} <button onClick={() => handleDelete(person)}>delete</button>
                    </div>
                ))}
        </>
    );
}

export default Persons;

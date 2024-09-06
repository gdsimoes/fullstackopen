function Persons({ persons, search }) {
    return (
        <>
            {persons
                .filter((person) => person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                .map((person) => (
                    <div key={person.name}>
                        {person.name} {person.number}
                    </div>
                ))}
        </>
    );
}

export default Persons;

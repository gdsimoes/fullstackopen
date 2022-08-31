const Person = ({ name, number, delPerson }) => {
    return (
        <p>
            {name} {number}
            <button onClick={delPerson} type="button">
                delete
            </button>
        </p>
    );
};

export default Person;

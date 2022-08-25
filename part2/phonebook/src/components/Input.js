const Filter = ({ value, setState }) => {
    return (
        <input
            value={value}
            onChange={(event) => setState(event.target.value)}
        />
    );
};

export default Filter;

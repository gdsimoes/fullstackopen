const Filter = ({ label, value, setState }) => {
    return (
        <>
            {label}
            <input
                value={value}
                onChange={(event) => setState(event.target.value)}
            />
        </>
    );
};

export default Filter;

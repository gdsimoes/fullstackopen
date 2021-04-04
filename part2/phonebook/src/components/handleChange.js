function handleChange(setFunction) {
    return (event) => setFunction(event.target.value);
}

export default handleChange;

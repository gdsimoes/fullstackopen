// This function is useful in forms. Since it is such
// a simple function maybe I should have used arrow
// functions in the attributes.

function handleChange(setFunction) {
    return (event) => setFunction(event.target.value);
}

export default handleChange;

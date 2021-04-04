import React from "react";
import handleChange from "./handleChange";

const NumberForm = ({ newNumber, setNewNumber }) => (
    <div>
        number:{" "}
        <input value={newNumber} onChange={handleChange(setNewNumber)} />
    </div>
);

export default NumberForm;

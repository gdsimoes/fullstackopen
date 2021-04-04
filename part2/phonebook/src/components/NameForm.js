import React from "react";
import handleChange from "./handleChange";

const NameForm = ({ newName, setNewName }) => (
    <div>
        name: <input value={newName} onChange={handleChange(setNewName)} />
    </div>
);

export default NameForm;

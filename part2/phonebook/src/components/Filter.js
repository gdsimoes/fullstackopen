import React from "react";
import handleChange from "./handleChange";

const Filter = ({ newFilter, setNewFilter }) => {
    return (
        <div>
            filter shown with
            <input value={newFilter} onChange={handleChange(setNewFilter)} />
        </div>
    );
};

export default Filter;

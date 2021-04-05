import React from "react";

const ShowButton = ({ setQuery, name }) => {
    const handleClick = () => setQuery(name);
    return <button onClick={handleClick}>show</button>;
};

export default ShowButton;

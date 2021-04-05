import React from "react";

const FindCountries = ({ query, setQuery }) => (
    <div>
        find countries
        <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
        />
    </div>
);

export default FindCountries;

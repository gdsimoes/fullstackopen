import React from "react";
import Details from "./Details";
import ShowButton from "./ShowButton";

const Display = ({ query, setQuery, countries }) => {
    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>;
    } else if (filteredCountries.length === 1) {
        return <Details country={filteredCountries[0]} />;
    } else {
        return filteredCountries.map((country) => (
            <div key={country.numericCode}>
                {country.name}
                <ShowButton setQuery={setQuery} name={country.name} />
            </div>
        ));
    }
};

export default Display;

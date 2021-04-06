import React from "react";
import Weather from "./Weather";

const Details = ({ country }) => {
    return (
        <>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h2>languages</h2>
            <ul>
                {country.languages.map((language) => (
                    <li key={language.iso639_2}>{language.name}</li>
                ))}
            </ul>
            <img
                width="100"
                src={country.flag}
                alt={`${country.name}'s flag`}
            />
            <Weather city={country.capital} />
        </>
    );
};

export default Details;

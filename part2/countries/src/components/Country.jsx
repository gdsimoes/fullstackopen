import React from "react";

import axios from "axios";

import Weather from "./Weather";

function Country({ name }) {
    const [capitals, setCapitals] = React.useState([]);
    const [area, setArea] = React.useState("");
    const [languages, setLanguages] = React.useState([]);
    const [flagUrl, setFlagUrl] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({ lat: null, lng: null });

    React.useEffect(() => {
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`).then(({ data }) => {
            setCapitals(data.capital);
            setArea(data.area);
            setLanguages(Object.values(data.languages));
            setFlagUrl(data.flags.png);
            setCoordinates({ lat: data.capitalInfo.latlng[0], lng: data.capitalInfo.latlng[1] });
            console.log(data);
        });
    }, [name]);

    return (
        <article>
            <h2>{name}</h2>
            <p>capital: {capitals.join(", ")}</p>
            <p>area {area}</p>
            <h3>languages:</h3>
            <ul>
                {languages.map((language) => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={flagUrl} alt={`Flag of ${name}`} />
            {capitals.length > 0 ? <Weather name={capitals[0]} lat={coordinates.lat} lng={coordinates.lng} /> : null}
        </article>
    );
}

export default Country;

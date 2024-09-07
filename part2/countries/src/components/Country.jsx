import React from "react";

import axios from "axios";

function Country({ name }) {
    const [capitals, setCapitals] = React.useState([]);
    const [area, setArea] = React.useState("");
    const [languages, setLanguages] = React.useState([]);
    const [flagUrl, setFlagUrl] = React.useState("");

    React.useEffect(() => {
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`).then(({ data }) => {
            setCapitals(data.capital);
            setArea(data.area);
            setLanguages(Object.values(data.languages));
            setFlagUrl(data.flags.png);
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
        </article>
    );
}

export default Country;

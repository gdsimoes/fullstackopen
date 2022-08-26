import Weather from "./Weather";

const Country = ({ country }) => {
    // Only the first capital will be shown
    const [capitalName, lat, lon] = [
        country?.capital?.[0],
        country?.capitalInfo?.latlng?.[0],
        country?.capitalInfo?.latlng?.[1],
    ];

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital.join(", ")}</div>
            <div>area {country.area}</div>

            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                ))}
            </ul>

            <img src={country.flags.png} alt="country flag" />

            <Weather capitalName={capitalName} lat={lat} lon={lon} />
        </div>
    );
};

export default Country;

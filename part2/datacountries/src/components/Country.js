const Country = ({ country }) => {
    console.log(Object.values(country.languages));
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

            <img src={country.flags.png} alt="Flag" />
        </div>
    );
};

export default Country;

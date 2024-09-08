import React from "react";

import Country from "./components/Country";

import axios from "axios";

import "./App.css";

function App() {
    const [listOfCountries, setListOfCountries] = React.useState([]);
    const [filteredCountries, setFilteredCountries] = React.useState(null);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        axios.get("https://studies.cs.helsinki.fi/restcountries/api/all").then((response) => {
            setListOfCountries(response.data.map((country) => country.name.common));
        });
    }, []);

    function handleChange(event) {
        const newValue = event.target.value;
        setSearch(newValue);
        setFilteredCountries(
            listOfCountries.filter((country) => country.toLowerCase().includes(newValue.toLowerCase()))
        );
    }

    let content;
    if (filteredCountries === null) {
        content = null;
    } else if (filteredCountries.length > 10) {
        content = <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length === 1) {
        content = (
            <div>
                <Country name={filteredCountries[0]} />
            </div>
        );
    } else if (filteredCountries.length === 0) {
        content = <p>No country found</p>;
    } else {
        content = (
            <>
                {filteredCountries.map((country) => (
                    <p key={country}>
                        {country} <button onClick={() => handleChange({ target: { value: country } })}>show</button>
                    </p>
                ))}
            </>
        );
    }

    return (
        <>
            <label>
                find countries <input type="text" value={search} onChange={handleChange} />
            </label>
            {content}
        </>
    );
}

export default App;

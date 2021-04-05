import React, { useState, useEffect } from "react";
import FindCountries from "./components/FindCountries";
import Display from "./components/Display";
import axios from "axios";

const App = () => {
    const [query, setQuery] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then((res) => setCountries(res.data));
    }, []);

    return (
        <>
            <FindCountries query={query} setQuery={setQuery} />
            <Display query={query} countries={countries} />
        </>
    );
};

export default App;

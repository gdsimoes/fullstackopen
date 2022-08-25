import { useState, useEffect } from "react";
import axios from "axios";

import Input from "./components/Input";
import Countries from "./components/Countries";

const App = () => {
    const [filter, setFilter] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        if (filter.length === 0) return;

        axios
            .get(`https://restcountries.com/v3.1/name/${filter}`)
            .then((res) => setCountries(res.data))
            .catch(() => setCountries([]));
    }, [filter]);

    return (
        <>
            <Input
                label="find countries "
                value={filter}
                setState={setFilter}
            />
            <Countries countries={countries} />
        </>
    );
};

export default App;

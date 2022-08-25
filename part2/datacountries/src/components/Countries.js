import Country from "./Country";

const Countries = ({ countries, setFilter }) => {
    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>;
    } else if (countries.length > 1) {
        return (
            <div>
                {countries.map((country) => (
                    <div key={country.cca2}>
                        {country.name.common}
                        <button onClick={() => setFilter(country.name.common)}>
                            show
                        </button>
                    </div>
                ))}
            </div>
        );
    } else if (countries.length === 1) {
        return <Country country={countries[0]} />;
    } else {
        return <div>Please write a valid country name</div>;
    }
};

export default Countries;

import React from "react";

import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

function Weather({ name, lat, lng }) {
    const [temperature, setTemperature] = React.useState("");
    const [wind, setWind] = React.useState("");
    const [icon, setIcon] = React.useState(null);

    React.useEffect(() => {
        console.log("useEffect", name, lat, lng);

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`)
            .then(({ data }) => {
                console.log(data);
                setTemperature(data.main.temp);
                setWind(data.wind.speed);
                setIcon(data.weather[0].icon);
            });
    }, [name, lat, lng]);

    if (icon === null) return null;

    return (
        <section>
            <h2>Weather in {name}</h2>
            <p>temperature {temperature} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" />
            <p>wind {wind} m/s</p>
        </section>
    );
}

export default Weather;

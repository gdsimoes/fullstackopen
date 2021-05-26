import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios
            .get(
                `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${city}`
            )
            .then((res) => {
                const obj = {
                    temperature: res.data.current.temperature,
                    iconURL: res.data.current.weather_icons[0],
                    windSpeed: res.data.current.wind_speed,
                    windDirection: res.data.current.wind_dir,
                };
                setWeather(obj);
            });
    }, [city]);

    return (
        <>
            <h2>Weather in {city}</h2>
            <div>
                <strong>temperature: {weather.temperature} Celsius</strong>
            </div>
            <img src={weather.iconURL} alt={`${city}'s weather icon`} />
            <div>
                <strong>
                    wind: {weather.windSpeed} km/h direction{" "}
                    {weather.windDirection}
                </strong>
            </div>
        </>
    );
};

export default Weather;

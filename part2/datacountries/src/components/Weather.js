import axios from "axios";
import { useState, useEffect } from "react";

// API Key in file .env.development.local
const apiKey = process.env.REACT_APP_API_KEY;

const Weather = ({ capitalName, lat, lon }) => {
    const [temp, setTemp] = useState(0);
    const [wind, setWind] = useState(0);
    const [icon, setIcon] = useState(0);

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`
            )
            .then((res) => {
                console.log(res.data);
                setTemp(res.data.main.temp);
                setWind(res.data.wind.speed);
                setIcon(res.data.weather[0].icon);
            });
    }, [lat, lon]);

    return (
        <div>
            <h2>Weather in {capitalName}</h2>
            <p>temperature {temp} Celcius</p>
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt=""
            />
            <p>wind {wind} m/s</p>
        </div>
    );
};

export default Weather;

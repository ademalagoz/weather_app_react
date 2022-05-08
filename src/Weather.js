import React, { useState, useEffect, useRef } from "react";
import Atmosphere from "./assets/atmosphere.jpg";
import Clear from "./assets/clear.jpg";
import Clouds from "./assets/clouds.jpg";
import Drizzle from "./assets/drizzle.jpg";
import Rain from "./assets/rain.jpg";
import Snow from "./assets/snow.jpg";
import Thunderstorm from "./assets/thunderstorm.jpg";

const Weather = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("London");

  const getWeather = (e) => {
    const APIkey = "b3546e9e22f2496f6ee2975381f86c92";

    if (e.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result.name);
          setCity(result.name);
          setData(result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() +
    1}/${current.getFullYear()}`;

  return (
    <>
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8 ">
            <div className="search ">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={getWeather}
                ref={inputRef}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>

      {typeof data.main !== "undefined" ? (
        <section>
          <h4>Condition:{data.weather[0].main}</h4>
          <h4>
            City:{data.name},{data.sys.country}
          </h4>
          <h4>Date: {date}</h4>
          <h4>Temperature:{Math.round(data.main.temp)} ℃</h4>
          <h4>Humidity:{data.main.humidity}</h4>
          {data.weather[0].main.toLowerCase() === "clear" ? (
            <img className="imgCondition" src={Clear} alt="Clear" />
          ) : data.weather[0].main.toLowerCase() === "clouds" ? (
            <img className="imgCondition" src={Clouds} alt="Clouds" />
          ) : data.weather[0].main.toLowerCase() === "rain" ? (
            <img className="imgCondition" src={Rain} alt="Rain" />
          ) : data.weather[0].main.toLowerCase() === "snow" ? (
            <img className="imgCondition" src={Snow} alt="Snow" />
          ) : data.weather[0].main.toLowerCase() === "atmosphere" ? (
            <img className="imgCondition" src={Atmosphere} alt="Atmosphere" />
          ) : data.weather[0].main.toLowerCase() === "drizzle" ? (
            <img className="imgCondition" src={Drizzle} alt="Drizzle" />
          ) : data.weather[0].main.toLowerCase() === "thunderstorm" ? (
            <img
              className="imgCondition"
              src={Thunderstorm}
              alt="Thunderstorm"
            />
          ) : (
            "undefined"
          )}
        </section>
      ) : (
        <p>City can’t find!</p>
      )}
    </>
  );
};

export default Weather;

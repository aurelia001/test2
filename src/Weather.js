import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  function handleResponse(response) {
    setWeather({
      temperture: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="wrapper">
          <form id="search-form">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter your city..."
              id="search-text-input"
            />
            <input type="submit" value="Submit" />
            <input type="submit" value="Current" id="current-button" />
          </form>

          <h1>Paris</h1>
          <div className="row">
            <div className="col">
              <span className="time" id="date">
                {" "}
                Sunday 16:00{" "}
              </span>
              <br />
              <span className="description" id="weather-description">
                {" "}
                Sunny{" "}
              </span>
            </div>
            <div className="col weather-today">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="Sunny"
                id="current-icon"
              />
              <span className="temperture-today" id="current-temperture">
                {Math.round(weather.temperture)}
              </span>
              <span className="celsius"> C°</span>
            </div>
            <div className="col">
              <div className="humidity">Humidity: {weather.humidity} %</div>
              <div className="wind">Wind: {weather.wind} km/h</div>
            </div>
            <div id="forecast"></div>
          </div>
        </div>
        <p className="refrence">
          <a
            href="https://github.com/aurelia001/test2"
            target="_blank "
            className="refrence-link"
          >
            Open-sourced code
          </a>
          , by Aurelia
        </p>
      </div>
    );
  } else {
    let apiKey = "73c8674456bc85afaf789af71afc1080";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

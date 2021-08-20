import React from "react";

export default function Weather() {
  return (
    <body>
      <div className="wrapper">
        <form id="search-form">
          <input
            type="text"
            autocomplete="off"
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
            <span className="temperture-today" id="current-temperture"></span>
            <span className="celsius"> 10 C°</span>
          </div>
          <div className="col">
            <div className="humidity">
              Humidity: <span id="humidity">70 %</span>
            </div>
            <div className="wind">
              Wind: <span id="windspeed">3 km/h</span>
            </div>
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
    </body>
  );
}

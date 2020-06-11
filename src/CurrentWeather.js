import React from "react";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <h2>
        <div className="row">
          <span className="col-6">
            <span className="weatherCondition"> Light rain </span>
            <div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                alt="rain"
                id="iconElement"
              />
              <span>
                {" "}
                20
                <span className="units">°C|°F</span>
              </span>
            </div>
          </span>
        </div>
        <small>
          🌡 Real feel: 18
          <span className="units1">°C|°F</span>
        </small>
      </h2>
    </div>
  );
}

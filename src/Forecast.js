import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <small>{props.time}</small>
      <div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
          className="forecastIcon"
          alt="rain"
        />
      </div>
      <div>
        <strong>
          <span>20°</span>
        </strong>
        <span>17°</span>
      </div>
    </div>
  );
}

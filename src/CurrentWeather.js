import React,{useState} from "react";
import axios from "axios";

export default function CurrentWeather() {
  const [show, setShow]=useState(false);
  const [temperature, setTemperature]=useState(null);
  function weatherResponse(response){
    console.log(response.data)
    setTemperature(response.data.main.temp);
    setShow(true);
  }

  if (show){
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
                {Math.round(temperature)}
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
  }else{
    const apiKey="2705c3833e0eb8cc3d104831dddd5c14";
    let city="Taipei";
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherResponse);

    return"Loading....";
  }
}

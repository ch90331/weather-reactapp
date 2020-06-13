import React from "react";
import Forecast from "./Forecast";

export default function ForecastRow() {
  return (
    <div className="row">
      <div className="col-2">
        <Forecast time="04:00" />
      </div>
      <div className="col-2">
        <Forecast time="07:00" />
      </div>
      <div className="col-2">
        <Forecast time="10:00" />
      </div>
      <div className="col-2">
        <Forecast time="13:00" />
      </div>
      <div className="col-2">
        <Forecast time="16:00" />
      </div>
      <div className="col-2">
        <Forecast time="19:00" />
      </div>
    </div>
  );
}

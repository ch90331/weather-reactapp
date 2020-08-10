import React from "react";

export default function WeatherTemperature(props){
     
    if (props.unit==="celsius"){
    return(
        <div className="WeatherTemperature">
        {" "}
        {Math.round(props.celsius)} ° 
        </div>
    );
    }else{
     let fahrenheit= (props.celsius * 9/5) + 32
     return(
        <div className="WeatherTemperature">
        {" "}
        {Math.round(fahrenheit)} ° 
        </div>
    )
    }
}
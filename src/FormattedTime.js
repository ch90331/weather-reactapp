import React,{useState} from "react";
import axios from "axios";


export default function FormattedTime (props){
  const [timeData, setTimeData]=useState({show:false});
  function timeResponse(response){
    setTimeData({
      show: true,
      timezone: response.data.timezone,
    });
  }
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[props.date.getDay()];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month=months[props.date.getMonth()];
    let date=props.date.getDate();
    let year=props.date.getFullYear();
    let hours= props.date.getHours();
    if (hours < 10){
        hours=`0${hours}`;
    }
    let minutes=props.date.getMinutes();
    if (minutes<10){
        minutes=`0${minutes}`;
    }

 if (timeData.show){
      
 return (
 <div>
 <span> 📆 {day} {month} {date}, {year}</span>
 <span> ⏲ {hours+timeData.timezone/3600-1}:{minutes} </span>
 </div>
 );
 }else{
    const apiKey="2705c3833e0eb8cc3d104831dddd5c14";
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.location}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(timeResponse);

    return"Loading....";
  }
}
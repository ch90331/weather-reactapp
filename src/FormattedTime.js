import React,{useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function FormattedTime (props){
  const [timeData, setTimeData]=useState({show:false});
  const [day, setDay]=useState(null);
  const [hour, setHour]=useState({});

  function timeResponse(response){
    setTimeData({
      show: true,
      timezone: response.data.timezone,
    });
    let timeUrl=`https://worldtimeapi.org/api/timezone/`;
    axios.get(`${timeUrl}${response.data.timezone}`).then(showRealTime);
  }

  function showRealTime(response){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day= response.data.day_of_week;
    setDay(days[day]);
    let date= new Date();
    let hours= date.getUTCHours();
    let inte= parseInt(hours);
    let offset= parseInt(response.data.utc_offset);
    let realHours= inte+offset;
    if (realHours >= 24) {
      realHours= realHours -24;
    } else if (realHours < 0){
      realHours += 24;
    } else if (realHours === 0){
      realHours = `00`;
    } else if (realHours < 10) {
      realHours =`0${realHours}`;
    } else realHours=realHours;
    setHour({
      display: realHours});
  }

  let minutes=props.date.getMinutes();
    if (minutes<10){
        minutes=`0${minutes}`;
    }

 if (timeData.show){
 return (
 <div>
 <span> <FontAwesomeIcon icon="calendar-alt" size="lg"/> {day}</span>
 <span> <FontAwesomeIcon icon="clock" size="lg" /> {hour.display}:{minutes} </span>
 </div>
 );
 }else{
  const apiKey="2705c3833e0eb8cc3d104831dddd5c14";
  let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(timeResponse);
  
  return"Loading....";
  }
}
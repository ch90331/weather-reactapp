import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function FormattedTime (props){
  
 return (
 <div>
 <span> <FontAwesomeIcon icon="calendar-alt" size="lg"/> {props.day}</span>
 <span> <FontAwesomeIcon icon="clock" size="lg" /> {props.realHour}:{props.min} </span>
 </div>
 )
  }


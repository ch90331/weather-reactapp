import React,{useState} from "react";
import Mango_Shaved_Ice from "./Img/Mango_Shaved_Ice.png";

import "./Action.css";


export default function Action (props){
  const [comment, setComment]=useState(null);
  const [img,setImg]=useState("Mango_Shaved_Ice");
  const [object, setObject]=useState(null);
  
  function changeToHot (){
    setComment("Time to indulge in a delicious golden treat 😋:");
    setImg("Mango_Shaved_Ice");
    setObject("Mango Shaved Ice");
  }

  function changeToFreezinglyCold(){
    setComment("Feeling freezingly cold 🥶 ? Taiwanese rice cooker is your best tool to prepare a nostalgic soup 🥣");
    setImg("Rice_cooker");
    setObject(null);
  }

  if (props.temperature>30){
    changeToHot();
    return(
      <div className= "Action">
       <div> {comment} </div>
       <img src={require(`./Img/${img}.png`)} alt="hot" width="35%" />
       <div> {object} </div>
      </div>
    );
  }else {
    changeToFreezinglyCold();
    return(
      <div className= "Action">
       <div> {comment} </div>
       <img src={require(`./Img/${img}.png`)} alt="hot" width="35%" />
       <div> {object} </div>
      </div>
    );
  }
}
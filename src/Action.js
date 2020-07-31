import React,{useState, useEffect, useRef} from "react";

import "./Action.css";

export default function Action (props){
  const [comment, setComment]=useState(null);
  const [img,setImg]=useState("Mango_Shaved_Ice");
  const [object, setObject]=useState(null);
  const [color, setColor]= useState(null)

  function changeToHot (){
    setComment("Time to indulge in a delicious golden treat 😋:");
    setImg("Mango_Shaved_Ice");
    setObject("Mango Shaved Ice");
    setColor("hot");
  }

  function changeToComfortable (){
    setComment("Comfortable temperature to invite your friends 👩🏻‍🤝‍👩🏻 or family 👨‍👩‍👧‍👦 to do some outdoor activities! Why not visit night market?👇🏻👇🏻👇🏻");
    setImg("Night_Market");
    setObject(null);
    setColor("comfortable");
  }

  function changeToCool (){
    setComment("Weather is cooler 🍃, let's have a warm bowl of ");
    setImg("Minced_Pork_Rice");
    setObject("Minced Pork Rice");
    setColor("cool");
  }

  function changeToCold (){
    setComment("Soup dumplings with rich nutrients can warm you up 🔥 better than anything else, just need to be careful while eating!!");
    setImg("Xiaolongbao");
    setObject(null);
    setColor("cold");
  }

  function changeToFreezinglyCold(){
    setComment("Feeling freezingly cold 🥶 ? Taiwanese rice cooker is your best tool to prepare a nostalgic soup 🥣");
    setImg("Rice_cooker");
    setObject(null);
    setColor("freezinglyCold");
  }
  
  useEffect(()=> {
  if (props.temperature>30){
    changeToHot();
  }else if (props.temperature>20 && props.temperature<=30) {
    changeToComfortable();
  }else if (props.temperature>10 && props.temperature<=20) {
    changeToCool();
  }else if (props.temperature>0 && props.temperature<=10){
    changeToCold(); 
  }else {
    changeToFreezinglyCold();
  }
 },
[props.temperature]);

    return(
      <div className={color}>
       <div> {comment} </div>
       <img src={require(`./Img/${img}.png`)} alt="hot" width="35%" />
       <div> {object} </div>
      </div>
    );
  }
import React from "react";
import Mango_Shaved_Ice from "./Mango_Shaved_Ice.png";

export default function Action (){

    return(
    <div className= "Action">
      <div> Time to indulge in a delicious golden treat: </div>
      <img src={Mango_Shaved_Ice} alt="hot" width="50%" />
      <div> Mango Shaved Ice </div>
    </div>
    )
}
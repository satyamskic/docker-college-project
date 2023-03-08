import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
 const navigate = useNavigate(); 
  const myroute = props.myroutepath.toString();
  return (
    <> 
      <div class="cards">
        <div class="image">
          <img src={props.imgsrc} alt="random pic" />
        </div>
        <div class="title">
          <p>{props.title}</p>
        </div>
        <div class="desc">
          <p>{props.description}</p>
          <button onClick={()=> navigate(`${myroute}`)}>Click Here</button>
        </div>
      </div>

    </>
  );
}

export default Card;
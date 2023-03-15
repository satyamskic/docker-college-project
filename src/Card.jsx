import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
 const navigate = useNavigate(); 
  const myroute = props.myroutepath.toString();
  return (
    <> 
      <div className="cards">
        <div className="image">
          <img src={require('./images/dockerimage.png')} alt="docker" />
        </div>
        <div className="title">
          <p>{props.title}</p>
        </div>
        <div className="desc">
          <p>{props.description}</p>
          <button onClick={()=> navigate(`${myroute}`)}>Click Here</button>
        </div>
      </div>

    </>
  );
}

export default Card;
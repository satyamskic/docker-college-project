import React, { useState } from "react";

var count =0;
var date = Date().toLocaleString();

function Card(props) {
  const [count , setCount] = useState(date);

  const title = () => {
    setCount(Date().toLocaleString());
  }  
  setInterval(title,1000);  
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
          <button onClick={title}>Press {count}</button>
        </div>
      </div>

    </>
  );
}

export default Card;
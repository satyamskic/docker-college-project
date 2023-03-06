import React from "react";

function Card(props) {
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
          <button >Click here</button>
        </div>
      </div>

    </>
  );
}

export default Card;
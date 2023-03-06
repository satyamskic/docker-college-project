import React from "react";

const name = "Satyam";
const date = new Date().toLocaleDateString();
var time = new Date().toLocaleTimeString();

var img1 = "https://picsum.photos/200/300"
var img2 = "https://picsum.photos/300/300"
var img3 = "https://picsum.photos/400/300"
var link = "www.google.com"

function Galary() {
    return (
        <>
            <img src={img1} />
            <img src={img2} />
            {/* <img src={img3} /> */}
        </>
    );
}

export default Galary;
import React, { useState } from 'react';

function About() {
  const [defaultImages, setnewdefaultImages] = useState('existingimage');

  function handleListTypeChange(event) {
    setnewdefaultImages(event.target.value);
    console.log(event.target.name + ' : '+event.target.value);
  }

  return (
    <h1>This is about page</h1>
    );
}

export default About;

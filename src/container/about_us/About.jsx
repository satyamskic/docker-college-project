import React, { useState } from "react";
import './AboutUs.css';

function About() {
  const [homeClicked, setHomeClicked] = useState(true);
  const [newsClicked, setNewsClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);
  const [aboutClicked, setAboutClicked] = useState(false);

  const handleInputChange = (event) => {
    if(event == 'homeClicked'){
      setHomeClicked(true);
      setNewsClicked(false);
      setContactClicked(false);
      setAboutClicked(false);
    }
    else if(event == 'newsClicked'){
      setHomeClicked(false);
      setNewsClicked(true);
      setContactClicked(false);
      setAboutClicked(false);
    }
    else if(event == 'contactClicked'){
      setHomeClicked(false);
      setNewsClicked(false);
      setContactClicked(true);
      setAboutClicked(false);
    }
    else {
      setHomeClicked(false);
      setNewsClicked(false);
      setContactClicked(false);
      setAboutClicked(true);
    }
  };

  return (
    <div className='sidebarContainer'>
      <div class="sidebar">
        <a className={homeClicked ? 'active' : ''} onClick={() => handleInputChange('homeClicked')} >What is Docker ?</a>
        <a className={newsClicked ? 'active' : ''} onClick={() => handleInputChange('newsClicked')} >News</a>
        <a className={contactClicked ? 'active' : ''} onClick={() => handleInputChange('contactClicked')} >Contact</a>
        <a className={aboutClicked ? 'active' : ''} onClick={() => handleInputChange('aboutClicked')} >About</a>

      </div>


      <div class="content">
        {homeClicked && <p>Welcome to the home page!</p>}
        {newsClicked && <p>This is the news page.</p>}
        {contactClicked && <p>This is the contact page.</p>}
        {aboutClicked && <p>This is the about page.</p>}
      </div>
    </div>
  )
}

export default About

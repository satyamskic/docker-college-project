import React from 'react';
import './ExtNavBar.css';

function ExtNavBar() {
  return (
    <>
        <nav>
        <input type="checkbox" id="check" name="" value="" />
         <label for="check" id="checkbtn"><i className='fa fa-bars'></i></label>

            <label className='logo'>Docker GUI Application</label>
            <ul>
                <li><a className='active' href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </>
  )
}

export default ExtNavBar

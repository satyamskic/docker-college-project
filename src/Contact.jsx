import React, { useState } from 'react';
import './css/Contact.css';


const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I watn to say ${data.msg}`
    );
  };

  return (
    <div>
      <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt" style={{ color: '#3498db' }}></i>
              <div class="topic">Address</div>
              <div class="text-one">Yamuna Expy</div>
              <div class="text-two">Greater Noida</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt" style={{ color: '#3498db' }}></i>
              <div class="topic">Phone</div>
              <div class="text-one">+91 123456789</div>
              <div class="text-two">+91 987654321</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope" style={{ color: '#3498db' }}></i>
              <div class="topic">Email</div>
              <div class="text-one">satyam@gbu.ac.in</div>
              <div class="text-two">sulekha@gbu.ac.in</div>
              <div class="text-two">prakhar@gbu.ac.in</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text" style={{ color: '#3498db' }}>Send us a message</div>
            <p>If you have any work from me or any types of quries related to my docker application, you can send me message from here. It's my pleasure to help you.</p>

            <form onSubmit={formSubmit}>
              <div class="input-box">
                <input onChange={InputEvent} name="fullname" value={data.fullname} type="text" placeholder="Enter Full Name" />
              </div>
              <div class="input-box">
                <input onChange={InputEvent} name="phone" value={data.phone} type="number" placeholder="Phone Number" />
              </div>
              <div class="input-box">
                <input onChange={InputEvent} type="email" name="email" value={data.email} placeholder="Email Address" />
              </div>
              <div class="input-box message-box">
                <textarea onChange={InputEvent} name="msg" value={data.msg} placeholder="Enter your message"></textarea>
              </div>
              <div class="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact;

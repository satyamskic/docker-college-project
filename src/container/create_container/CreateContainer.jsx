import React, { useState } from "react";
import './CreateContainer.css';
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import './CreateContainerform.css';

function CreateContainer(props) {

  const [displayMessage, setDisplayMessage] = useState(<></>);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("myFormData: ", formData);
  };

  const message = (data) => {
    if (data.status == 200) {
      setDisplayMessage(
        <>
          <div className="success-msg">
            <i className="fa fa-check"> <h1>{data.container_creation}</h1></i>
          </div>
        </>
      )
    }
    else if (data.status == 400) {
      setDisplayMessage(
        <>
          <div className="error-msg">
            <i className="fa fa-close"> <h1>{data.container_creation}</h1></i>
          </div>
        </>
      );
    }

    else {
      setDisplayMessage(
        <>
          <div className="info-msg">
            <i className="fa fa-info-circle"></i>
            <h1>API is not responding</h1>
          </div>
        </>
      );
    }
  }


  const handleSubmit = (event) => {
    setDisplayMessage(<></>);
    setIsLoading(true);
    event.preventDefault();
    console.log(formData);

    fetch(`${props.apiurl}/create_container`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        message(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setDisplayMessage(
          <>
            <div className="info-msg">
              <i className="fa fa-info-circle"></i>
              <h1>API is not responding</h1>
            </div>
          </>
        );
        setIsLoading(false);
      });
    event.target.reset();
    setFormData({});
  };

  return (
    <div className="container">
      {<h1>{displayMessage}</h1>}
      <div className="aboutcontainer">
        <h1>Create Container</h1>
        <h3>This service helps to launch the Docker container over the targeted Host. Provide the uniqe name of the container in order to launch container on top of Docker Container.</h3>
        <form autoComplete="off" onSubmit={handleSubmit}>

          <div className="row">
            <div className="column">
              <label htmlFor="name">Container Name  <sup style={{ color: 'red' }}>*</sup></label> <br />
              <input
                type="text"
                name="container_name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="column">
              <label htmlFor="email">Container Image  <sup style={{ color: 'red' }}>*</sup></label><br />
              <input
                type="text"
                name="container_image"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="subject">Image Version  <sup style={{ color: 'red' }}>*</sup></label><br />
              <input
                type="text"
                name="image_version"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="column">
              <label htmlFor="contact">Container Port (optional)</label><br />
              <input
                type="text"
                name="container_port"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="subject">Volume Name (optional)</label><br />
              <input
                type="text"
                name="vol_name"
                onChange={handleInputChange}
              />
            </div>
            <div className="column">
              <label htmlFor="contact">Volume Attachment Path (optional)</label><br />
              <input
                type="text"
                name="vol_attach_path"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {isLoading ? <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop> : isLoading}
    </div>
  );
}

export default CreateContainer;

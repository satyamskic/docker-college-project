import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

function Logs(props) {
  const [displayMessage, setDisplayMessage] = useState(<></>);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const message = (data) => {
    if (data.status == 200) {
      setDisplayMessage(
        <>
          <div className="success-msg">
            <i className="fa fa-check"> <h1>{data.container_status}</h1></i>
          </div>
        </>
      )
    }
    else if (data.status == 400) {
      setDisplayMessage(
        <>
          <div className="error-msg">
            <i className="fa fa-close"> <h1>{data.container_status}</h1></i>
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


  const handleSubmit = async (event) => {
    setDisplayMessage(<></>);
    setIsLoading(true);
    event.preventDefault();
    await fetch(`${props.apiurl}/get_log_inspect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
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
  };

  return (
    <div className="container">
      {<h1>{displayMessage}</h1>}
      <h1>Logs/Inspect</h1>
      <h3>This service helps to fetch the logs from the container and helps to debug the stuffs in container. This is helpful when you deploying your application to the server.</h3>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            
          <div class="form-check">
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageNetwork1" value="get_log" />
              <label class="form-check-label" for="manageNetwork1">
                Get logs
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageNetwork2" value="get_inspect" />
              <label class="form-check-label" for="manageNetwork2">
                Get inspect
              </label>
            </div>
            <div className="column">
              <label htmlFor="subject">Container Name <sup style={{ color: 'red' }}>*</sup></label><br />
              <input
                type="text"
                name="container_name"
                onChange={handleInputChange}
                style={{ fontSize: '15px' }}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      {isLoading ? <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop> : isLoading}
    </div>
  );
}

export default Logs;

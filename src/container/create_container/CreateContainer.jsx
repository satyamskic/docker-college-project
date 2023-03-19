import React, { useState } from "react";
import './CreateContainer.css';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function CreateContainer(props) {
  const [displayMessage, setDisplayMessage] = useState(<></>);
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("myFormData: ", formData);
  };

  const message = (data) => {
    if (data.status === 200) {
      console.log("Message : " + data);
      setTimeout(() => {
        setShowPopup(false);
      }, 1500);

      setDisplayMessage(
        <>
          <div className="success-msg">
            <i className="fa fa-check"> <h1>{data.container_creation}</h1></i>
          </div>
        </>
      )
    }
    else if (data.status === 400) {
      setOpen(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      setDisplayMessage(
        <>
          <div>
            <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
              <DialogTitle id="alert-dialog-title">
                <h1>{"Container Status "}</h1>
              </DialogTitle>
              <DialogContent>
                <DialogContentText className="error-msg" id="alert-dialog-description">
                  <h3>{data.container_creation}</h3>
                </DialogContentText>
              </DialogContent>
            </Dialog>
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
    setShowPopup(true);
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
        message(data);
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
      });
      event.target.reset();
      setFormData({});
      
  };

  return (
    <div className="container">
     {showPopup && (
        <h1>{displayMessage}</h1>
      )}
      <form autoComplete="off" onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="form-group col-md-6">
            Container Name <sup style={{ color: 'red' }}>*</sup>
            <input type="text" className="form-control" name="container_name" onChange={handleInputChange} required />
          </label>
        </div>

        <div className="form-group">
          <label className="form-group col-md-6">
            Container Image <sup style={{ color: 'red' }}>*</sup>
            <input type="text" className="form-control" name="container_image" onChange={handleInputChange} required />
          </label>

        </div>
        <div className="form-group">
          <label className="form-group col-md-6">
            Image Version <sup style={{ color: 'red' }}>*</sup>
            <input type="text" className="form-control" name="image_version" onChange={handleInputChange} required />
          </label>
        </div>

        <div className="form-group">
          <label className="form-group col-md-6">
            Container Port (optional)
            <input type="text" className="form-control" name="container_port" onChange={handleInputChange} />
          </label>
        </div>

        <div className="form-group">
          <label className="form-group col-md-6">
            Volume Name (optional)
            <input type="text" className="form-control" name="vol_name" onChange={handleInputChange} />
          </label>
        </div>

        <div className="form-group">
          <label className="form-group col-md-6">
            Volume Attachment Path (optional)
            <input type="text" className="form-control" name="vol_attach_path" onChange={handleInputChange} />
          </label>
        </div>

        <button className="btn btn-default btn btn-primary" type="submit">Submit</button>
      </form>
     
    </div>
  );
}

export default CreateContainer;

import React, { useState } from "react";


function CreateContainer(props) {
  const [formData, setFormData] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("myFormData: ", formData);
  };
 

  const handleSubmit = (event) => {
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
        console.log(data.container_creation)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="form-group col-md-6">
            Container Name <sup style={{color: 'red'}}>*</sup> 
            <input  type="text" className="form-control" name="container_name" onChange={handleInputChange} required />
          </label>
        </div>

        <div className="form-group">
          <label className="form-group col-md-6">
            Container Image <sup style={{color: 'red'}}>*</sup>
            <input type="text" className="form-control" name="container_image" onChange={handleInputChange} required/>
          </label>

        </div>
        <div className="form-group">
          <label className="form-group col-md-6">
            Image Version <sup style={{color: 'red'}}>*</sup>
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

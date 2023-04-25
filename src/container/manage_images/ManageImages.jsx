import React, { useState } from "react";

function ManageImages(props) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(FormData);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${props.apiurl}/manage_image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <label htmlFor="name">Choose Action  <sup style={{ color: 'red' }}>*</sup></label> <br />

            <div class="form-check">
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageImages1" value="pull_image" />
              <label class="form-check-label" for="manageImages1">
                Download Image
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageImages2" value="delete_image" />
              <label class="form-check-label" for="manageImages2">
                Delete Image
              </label>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="subject">Image Name <sup style={{ color: 'red' }}>*</sup></label><br />
              <input
                type="text"
                name="image_name"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="column">
              <label htmlFor="subject">Image Version <sup style={{ color: 'red' }}>*</sup></label><br />
              <input
                type="text"
                name="image_version"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>


        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ManageImages;

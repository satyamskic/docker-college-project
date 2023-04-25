import React, { useState } from "react";

function ManageNetwork() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(FormData);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://192.168.2.78:5000/manage_network", {
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
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageNetwork1" value="create_network" />
              <label class="form-check-label" for="manageNetwork1">
              Create Network
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageNetwork2" value="delete_network" />
              <label class="form-check-label" for="manageNetwork2">
              Delete Network
              </label>
            </div>
            
            <div className="column">
              <label htmlFor="subject">Network Name <sup style={{ color: 'red' }}>*</sup></label><br />
              <input
                type="text"
                name="network_name"
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

export default ManageNetwork;

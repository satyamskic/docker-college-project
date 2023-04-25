import React, { useState } from "react";

function ManageContainer(props) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("Data============= "+FormData);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${props.apiurl}/manage_container`, {
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
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageContainer1" value="man_start_container" />
              <label class="form-check-label" for="manageContainer1">
                Start Container
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageContainer2" value="man_stop_container" />
              <label class="form-check-label" for="manageContainer2">
                Stop Container
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageContainer3" value="man_delete_container" />
              <label class="form-check-label" for="manageContainer3">
                Delete Container
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageContainer4" value="man_restart_container" />
              <label class="form-check-label" for="manageContainer4">
                Restart Container
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" onChange={handleInputChange} type="radio" name="action_type" id="manageContainer5" value="get_container_logs" />
              <label class="form-check-label" for="manageContainer5">
                Container logs
              </label>
            </div>
            <div className="column">
              <label htmlFor="subject">Container Name <sup style={{ color: 'red' }}>*</sup></label><br />
              <input
                type="text"
                name="container_name"
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

export default ManageContainer;

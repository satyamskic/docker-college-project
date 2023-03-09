import React, { useState } from "react";

function ManageContainer() {
  const [formData, setFormData] = useState({});
  const [output, setOutput] = useState("");
  output = "";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(FormData);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://192.168.1.151:5000/manage_container", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOutput(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="radio">
            Choose Action:
            <select name="action_type" onChange={handleInputChange}>
              <option value="man_start_container">Start Container</option>
              <option value="man_stop_container">Stop Container</option>
              <option value="man_delete_container">Delete Container</option>
              <option value="man_restart_container">Restart Container</option>
              <option value="get_container_logs">Container logs</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label className="form-group col-md-6">
            Container Name:
            <input type="text" className="form-control" name="container_name" onChange={handleInputChange} />
          </label>
        </div>
        <button className="btn btn-default btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ManageContainer;

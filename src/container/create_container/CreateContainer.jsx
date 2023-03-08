import React, { useState } from "react";

function CreateContainer() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("myFormData: ",formData);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch("http://192.168.1.151:5000/create_container", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.container_creation)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Container Name:
        <input type="text" name="container_name" onChange={handleInputChange} /> <br />
      </label>
      <label>
        Container Image:
        <input type="text" name="container_image" onChange={handleInputChange} /><br />
      </label>
      <label>
        Container Version:
        <input type="text" name="image_version" onChange={handleInputChange} /><br />
      </label>
      <label>
        Container Port:
        <input type="text" name="container_port" onChange={handleInputChange} /><br />
      </label>
      <label>
        Volume Name:
        <input type="text" name="vol_name" onChange={handleInputChange} /><br />
      </label>
      <label>
        Volume Attachment Path:
        <input type="text" name="vol_attach_path" onChange={handleInputChange} /><br />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateContainer;

import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { HiExclamation, HiCheck, HiX } from 'react-icons/hi'
import { Toast } from 'flowbite-react';
import { Button, Label, TextInput, Radio } from 'flowbite-react';

function ManageVolume(props) {
  const [displayMessage, setDisplayMessage] = useState(<></>);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(FormData);
  };
  const message = (data) => {
    if (data.status == 200) {
      setDisplayMessage(
        <>
          <div>
            <i> <h1>{data.volume_status}</h1></i>
          </div>
        </>
      )
    }
    else if (data.status == 400) {
      setDisplayMessage(
        <>
          <div>
            <i> <h1>{data.volume_status}</h1></i>
          </div>
        </>
      );
    }

    else {
      setDisplayMessage(
        <>
          <div >
            <i></i>
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
    await fetch(`${props.apiurl}/manage_volume`, {
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
            <div >
              <i></i>
              <h1>API is not responding</h1>
            </div>
          </>
        );
        setIsLoading(false);
      });
  };

  return (
    <div className="max-w-xl mx-auto">
      {displayMessage && (
        <h1 className="h-24">{displayMessage}</h1>
      )}
      <h1 className="text-2xl font-bold">Create Network</h1>
      <form autoComplete="off" onSubmit={handleSubmit} className="flex ml-20 mr-20 mt-10 mb-10 flex-col gap-4  h-64 w-108">
        <div className="flex  flex-col gap-4  ">
        <Label htmlFor="action_type text-medium">
              Select Option
            </Label>
          <div className="flex items-center gap-2">
            <Label htmlFor="action_type">
              create
            </Label>
            <Radio
              onChange={handleInputChange} name="action_type" id="manageNetwork1" value="create_network" 
            />

          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="action_type">
             Delete
            </Label>
            <Radio
              onChange={handleInputChange}  name="action_type" id="manageNetwork2" value="delete_network"
            />

          </div>
          <div className="w-108">
          <div className="mb-2 block">
            <Label
              htmlFor="manageNetwork1"
              value="Network Name"
            />
          </div>
          <TextInput
           type="text"
           name="network_name"
           onChange={handleInputChange}
           required
           />
        </div>
        </div>
        <Button type="submit" className="  bg-gray-800 hover:bg-gray-900">
          Submit
        </Button>
      </form>
      {isLoading && (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white">
            <CircularProgress color="inherit" />
          </div>
        </div>
      )}
    </div>
  );
      }  

export default ManageVolume;

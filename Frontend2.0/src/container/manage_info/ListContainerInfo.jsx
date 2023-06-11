import React from "react";
import { useEffect, useState } from 'react';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import './MainContainer.css'
 
const TABLE_HEAD = ["No", "Container Name","Container ID", "Container Image"];
 


export default function ListContainerInfo(props) {

  const [data, setData] = useState([]);
  const ListContainerAPI = async () => {
    console.log("First");
    await fetch(`${props.apiurl}/list_containers_info`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => console.error(error));

  }
  useEffect(() => {
    ListContainerAPI();
  }, [])
  return (
    <>
    <div>
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className=" flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
            <div className="animate-running-dots mt-5">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </Typography>
            
          </div>
        </div>
      </CardHeader>
      <CardBody className="  ml-15 mr-15">
        <table className="w-full min-w-max table-auto text-center">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y bg-gray-800 border-blue-gray-100 bg-blue-gray-50/50 p-4 ">
                  <Typography
                    variant="small"
                    color="text-white"
                    className="font-bold leading-none opacity-90 text-white"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {data.map((curElem, index) => {
            return (
              <tr key={index} className="transition-shadow duration-300 ease-in-out hover:shadow-lg hover:scale-105 ">
                    
                <td>
                  
                      <div className="flex items-center gap-7 w-12 h-12">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 " />
                        <Typography variant="small" color="blue-gray" className="font-normal pl-">
                          {index+1}
                        </Typography>
                       
                      </div>
                    </td>
                    
                    <td>
                      <Typography variant="small" color="text-green-500" className="font-bold">
                      {curElem.container_name}
                      </Typography>
                    </td>
                    <td>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {curElem.container_id}
                      </Typography>
                    </td>
                    <td>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                      {curElem.container_image}
                      </Typography>
                      
                    </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </CardBody>
      </Card>

    </div>
    </>
  );
  
}

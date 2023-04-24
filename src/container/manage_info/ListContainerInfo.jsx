import React from "react";
import { useEffect, useState } from 'react';
import './style.css';

export default function ListContainerInfo(props) {
  const [data, setData] = useState([]);
  const ListContainerInfoAPI = async () => {
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
    ListContainerInfoAPI();
  }, [])
  return (
    <>

      <table class="table bg-white rounded shadow-sm  table-hover">
        <thead>
          <tr>
            <th style={{backgroundColor: 'black', color: 'white'}} scope="col" width="50">No</th>
            <th style={{backgroundColor: 'black', color: 'white'}} scope="col">Container ID</th>
            <th style={{backgroundColor: 'black', color: 'white'}} scope="col">Container Name</th>
            <th style={{backgroundColor: 'black', color: 'white'}} scope="col">Container IP</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((curElem, index) => {
              return (
                <tr>
                  <th scope="row">{++index}</th>
                  <td>{curElem.container_id}</td>
                  <td>{curElem.container_name}</td>
                  <td>{curElem.container_ip}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

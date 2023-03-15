import React from "react";
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Menu from "./Menu";
import MainContainer from './container/manage_info/MainContainer';
import { BrowserRouter } from "react-router-dom";
import CreateContainer from "./container/create_container/CreateContainer";
import ManageContainer from "./container/manage_container/ManageContainer";
import ManageImages from "./container/manage_images/ManageImages";
import ManageNetwork from "./container/manage_network/ManageNetwork";
import ManageVolume from "./container/manage_volume/ManageVolume";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Error from './Error';
import Service from "./Service";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";

const apiurl = 'http://192.168.142.78:5000';
//rafce

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/home" element={<Home apiurl={apiurl}/>}></Route>
                    <Route exact path="/service" element={<Service apiurl={apiurl}/>}></Route>
                    <Route exact path="/about" element={<About apiurl={apiurl}/>}></Route>
                    <Route exact path="/contact" element={<Contact apiurl={apiurl}/>}></Route>
                    <Route exact path="/" element={<Menu apiurl={apiurl} />}></Route>
                    <Route exact path="/root" element={<MainContainer apiurl={apiurl} />}></Route>
                    <Route exact path="/createcontainer" element={<CreateContainer apiurl={apiurl} />} ></Route>
                    <Route exact path="/managecontainer" element={<ManageContainer apiurl={apiurl} />} ></Route>
                    <Route exact path="/manageimage" element={<ManageImages apiurl={apiurl}/>} ></Route>
                    <Route exact path="/managenetwork" element={<ManageNetwork apiurl={apiurl}/>} ></Route>
                    <Route exact path="/managevolume" element={<ManageVolume apiurl={apiurl}/>} ></Route>
                    <Route element={<Error />}></Route>          
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
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

const apiurl = 'http://192.168.1.151:5000';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Menu />}></Route>
                    <Route exact path="/root" element={<MainContainer apiurl={apiurl} />}></Route>
                    <Route exact path="/createcontainer" element={<CreateContainer />} ></Route>
                    <Route exact path="/managecontainer" element={<ManageContainer />} ></Route>
                    <Route exact path="/manageimage" element={<ManageImages />} ></Route>
                    <Route exact path="/managenetwork" element={<ManageNetwork />} ></Route>
                    <Route exact path="/managevolume" element={<ManageVolume />} ></Route>
     
                                
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
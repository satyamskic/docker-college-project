import React from "react";
import Card from './Card';
import './index.css';


function Menu() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <main className="grid">
                            <Card
                                title="Quick Review"
                                description="This section list all basic details about the docker container ex. list container, volume, network, image id, container id, inspect info"
                                myroutepath="/root"
                            />

                            <Card
                                title="Create Container"
                                description="This section is used to launched the docker container. you can pass image version, port, volume etc"
                                myroutepath="/createcontainer"
                            />

                            <Card
                                title="Manage Container"
                                description="This section is used to manage the container ex. start, stop delete, restart, fetch logs etc"
                                myroutepath="/managecontainer"
                            />

                            <Card
                                title="Create Network"
                                description="This section creates the network. default is host, bridge etc"
                                myroutepath="/managenetwork"
                            />

                            <Card
                                title="Create Volume"
                                description="This section is used to create the volume for make the data persistent"
                                myroutepath="/managevolume"
                            />

                            <Card
                                title="Remove/Pull Images"
                                description="This section is used to Download or delete the docker images"
                                myroutepath="/manageimage"
                            />
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
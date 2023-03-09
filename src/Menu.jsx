import React from "react";
import Card from './Card';
import './index.css';


function Menu() {
    return (
        <>
        <main className="grid">
            <Card
                imgsrc="https://raw.githubusercontent.com/satyamskic/Devops2/master/dockerimage.png"
                title="Quick Review"
                description="This section list all basic details about the docker container ex. list container, volume, network, image id, container id, inspect info"
                myroutepath="/root"
            />

            <Card
                imgsrc="https://raw.githubusercontent.com/satyamskic/Devops2/master/dockerimage.png"
                title="Create Container"
                description="This section is used to launched the docker container. you can pass image version, port, volume etc"
                myroutepath="/createcontainer"
            />

            <Card
                imgsrc="https://raw.githubusercontent.com/satyamskic/Devops2/master/dockerimage.png"
                title="Manage Container"
                description="This section is used to manage the container ex. start, stop delete, restart, fetch logs etc"
                myroutepath="/managecontainer"
            />

            <Card
                imgsrc="https://raw.githubusercontent.com/satyamskic/Devops2/master/dockerimage.png"
                title="Create Network"
                description="This section creates the network. default is host, bridge etc"
                myroutepath="/managenetwork"
            />

            <Card
                imgsrc="https://raw.githubusercontent.com/satyamskic/Devops2/master/dockerimage.png"
                title="Create Volume"
                description="This section is used to create the volume for make the data persistent"
                myroutepath="/managevolume"
            />

            <Card
                imgsrc="https://raw.githubusercontent.com/satyamskic/Devops2/master/dockerimage.png"
                title="Remove/Pull Images"
                description="This section is used to Download or delete the docker images"
                myroutepath="/manageimage"
            />
            </main>
        </>
    );
}

export default Menu;
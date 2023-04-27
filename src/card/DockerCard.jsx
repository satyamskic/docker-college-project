import { useState } from "react";
import './card.css';
import { useNavigate } from "react-router-dom";

function DockerCard(props) {
  const navigate = useNavigate();
  const [cards] = useState([
    {
      title: "Quick Review",
      myroutepath: "/root",
      description: `Provides the nessasary information about the container such as List of All Running Container, List of All Existing Container, Docker Volumes, Docker Images Information and Docker Network List etc`,

    },
    {
      title: "Create Container",
      myroutepath: "/createcontainer",
      description: `This service helps to launch the Docker container over the targeted Host. Provide the uniqe name of the container in order to launch container on top of Docker Container.`,
    },
    {
      title: "Manage Container",
      myroutepath: "/managecontainer",
      description: `This service helps to manage docker container where you can do following operations such as start container, stop container, delete container, restart container and container logs etc.`,
    },
    {
      title: "Create Network",
      myroutepath: "/managenetwork",
      description: `This service creates the network for containers so containers can communicate with each other. host and bridge network is default network comes at time of instalation of Docker Container.`,
    },
    {
      title: "Create Volume",
      myroutepath: "/managevolume",
      description: `Docker containers are used to run applications in an isolated environment. By default, all the changes inside the container are lost when the container stops. If we want to keep data between runs, Docker volumes and bind mounts can help. `,
    },
    
    {
      title: "Remove/Pull Images",
      myroutepath: "/manageimage",
      description: `This service helps to Delete the Docker images and also Download the new images. Make sure docker image is not currently been used by any container at time of deleting it otherwise it will through the errors.`,
    },
    
  ]);
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-12 mx-auto">
          <section>
            <div className="container">
              <div className="cards">
                {cards.map((card, i) => (
                  <div key={i} className="card">
                    <div className="image">
                      <img src={require('../images/dockerimage.png')} alt="docker" />
                    </div>
                    <h2 className="title">{card.title}</h2>
                    <div className="desc">
                      <h4>{card.description}</h4>
                      <button onClick={() => navigate(`${card.myroutepath}`)}><h4>Click Here</h4></button>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DockerCard;
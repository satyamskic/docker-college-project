import React, { useState } from "react";
import "./AboutUs.css";
import { EmailJSResponseStatus } from "emailjs-com";


const About = () => {
  return (
    <div className="about-container">
      <h1>About Docker</h1>
      <p>
        Docker is an open-source platform that automates the deployment,
        scaling, and management of applications. It allows you to package your
        application and its dependencies into a standardized unit called a
        container. These containers are lightweight and can run consistently on
        any infrastructure.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>Containerization: Isolate applications with their dependencies.</li>
        <li>Portability: Run containers consistently across different environments.</li>
        <li>Scalability: Scale applications horizontally with ease.</li>
        <li>Efficiency: Optimize resource utilization and reduce overhead.</li>
        <li>Versioning: Easily manage and distribute application versions.</li>
      </ul>
      <h2>Benefits</h2>
      <ul>
        <li>Accelerated Development: Encourage collaboration and faster iteration.</li>
        <li>Improved Deployment: Ensure consistency and reliability in deployments.</li>
        <li>Efficient Resource Utilization: Optimize infrastructure usage.</li>
        <li>Flexibility: Support diverse applications and technology stacks.</li>
        <li>Cost Savings: Reduce hardware and maintenance costs.</li>
        <li>Enhanced Security: Isolate applications and control access.</li>
        <li>Easy Rollbacks: Quickly revert to previous versions if needed.</li>
        <li>Continuous Integration and Deployment: Streamline CI/CD pipelines.</li>
        <li>Multi-Cloud Support: Run applications across different cloud providers.</li>
        <li>DevOps Enablement: Bridge the gap between developers and operations.</li>
        <li>Resource Isolation: Prevent conflicts between applications.</li>
      </ul>
    </div>
  );
};

export default About;

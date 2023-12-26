import React from 'react';
import "./Projects.css";

function Projects() {
  return (
    <div className='projectContainer'>
      {/* <h2>Projects</h2> */}

      <div className="project">
        <h3>Project 1: React Portfolio</h3>
        <p>
          A personal portfolio website built using React, showcasing my skills, projects, and achievements.
        </p>
        <p>Technologies: React, HTML, CSS</p>
      </div>

      <div className="project">
        <h3>Project 2: Task Tracker App</h3>
        <p>
          An application for tracking tasks and managing to-do lists. Implemented with React for the frontend.
        </p>
        <p>Technologies: React, JavaScript, CSS</p>
      </div>

      <div className="project">
        <h3>Project 3: E-commerce Website</h3>
        <p>
          Developed a fully functional e-commerce website with features like product listing, cart, and user authentication.
        </p>
        <p>Technologies: React, Node.js, Express, MongoDB, CSS</p>
      </div>

      <div className="project">
        <h3>Project 4: Weather App</h3>
        <p>
          A weather application that provides real-time weather information based on user input.
        </p>
        <p>Technologies: React, OpenWeatherMap API, CSS</p>
      </div>

      <div className="project">
        <h3>Project 5: Blogging Platform</h3>
        <p>
          Created a blogging platform where users can write, edit, and publish articles. Implemented with MERN stack.
        </p>
        <p>Technologies: React, Node.js, Express, MongoDB, CSS</p>
      </div>

      <div className="project">
        <h3>Project 6: Online Quiz App</h3>
        <p>
          Designed and developed an online quiz application with multiple-choice questions and a scoring system.
        </p>
        <p>Technologies: React, Firebase, CSS</p>
      </div>

      {/* Add more projects as needed */}
    </div>
  );
}

export default Projects;

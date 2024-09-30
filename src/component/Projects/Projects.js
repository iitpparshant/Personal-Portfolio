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
        <a href="https://github.com/iitpparshant/Personal-Portfolio" target="_blank" rel="noopener noreferrer">
          <button>Github Link</button>
        </a>
        <a href="https://personal-portfolio-two-gules.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button>Uploaded Link</button>
        </a>
      </div>

      <div className="project">
        <h3>Project 2: Resume Maker</h3>
        <p>
          An application for tracking tasks and managing to-do lists. Implemented with React for the frontend.
        </p>
        <p>Technologies: React, JavaScript, CSS</p>
        <a href="https://github.com/iitpparshant/resume" target="_blank" rel="noopener noreferrer">
          <button>Github Link</button>
        </a>
        <a href="https://resume-lake-front.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button>Uploaded Link</button>
        </a>
      </div>

      <div className="project">
        <h3>Project 3: Movie App Clone</h3>
        <p>
          Developed a fully functional e-commerce website with features like product listing, cart, and user authentication.
        </p>
        <p>Technologies: React, Node.js, Express, MongoDB, CSS</p>
        <a href="https://github.com/iitpparshant/movie" target="_blank" rel="noopener noreferrer">
          <button>Github Link</button>
        </a>
        <a href="https://movie-tau-two.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button>Uploaded Link</button>
        </a>
      </div>

      <div className="project">
        <h3>Project 4: Food Delivery</h3>
        <p>
          A weather application that provides real-time weather information based on user input.
        </p>
        <p>Technologies: React, OpenWeatherMap API, CSS</p>
        <a href="https://github.com/iitpparshant/food_delivery" target="_blank" rel="noopener noreferrer">
          <button>Github Link</button>
        </a>
        <a href="https://food-delivery-zzyz-front.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button>Uploaded Link</button>
        </a>
      </div>

      <div className="project">
        <h3>Project 5: Spotify Clone</h3>
        <p>
          Created a blogging platform where users can write, edit, and publish articles. Implemented with MERN stack.
        </p>
        <p>Technologies: React, Node.js, Express, MongoDB, CSS</p>
        <a href="https://github.com/iitpparshant/spotifyclone" target="_blank" rel="noopener noreferrer">
          <button>Github Link</button>
        </a>
        <a href="https://spotifyclone-599wflh8i-iitpparshants-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
          <button>Uploaded Link</button>
        </a>
      </div>

      

      {/* Add more projects as needed */}
    </div>
  );
}

export default Projects;

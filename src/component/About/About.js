import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Hello! My name is [Your Name], and I'm a student passionate about [your interests or field of study].
      </p>

      <section>
        <h3>Education</h3>
        <p>
          I am currently pursuing my [Degree] in [Your Major] at [Your University].
        </p>
      </section>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML/CSS</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section>
        <h3>Projects</h3>
        <p>
          Here are some projects I've worked on:
        </p>
        <ul>
          <li><a href="link-to-project-1">Project 1</a></li>
          <li><a href="link-to-project-2">Project 2</a></li>
          {/* Add more projects as needed */}
        </ul>
      </section>
      <section className="coding-profiles">
        <h3>Coding Profiles</h3>
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-icon leetcode-icon">&#xeab1;</div>
            <div className="profile-info">
              <div className="profile-point">&#8226; <a href="https://leetcode.com/your-leetcode-username" target="_blank" rel="noopener noreferrer">LeetCode</a></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptate!</p>
          </div>
          <div className="profile-card">
            <div className="profile-icon codeforces-icon">&#xeab2;</div>
            <div className="profile-info">
              <div className="profile-point">&#8226; <a href="https://codeforces.com/profile/your-codeforces-handle" target="_blank" rel="noopener noreferrer">CodeSafe</a></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, libero!</p>
          </div>
          <div className="profile-card">
            <div className="profile-icon codingninjas-icon">&#xeab3;</div>
            <div className="profile-info">
              <div className="profile-point">&#8226; <a href="https://www.codingninjas.com/profiles/in/your-coding-ninjas-profile" target="_blank" rel="noopener noreferrer">Coding Ninjas</a></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          {/* Add more profile cards as needed */}
        </div>
      </section>
      <section>
        <h3>Achievements</h3>
        <ul>
          <li>Award for [Specific Achievement]</li>
          <li>[Any other notable achievement]</li>
          {/* Add more achievements as needed */}
        </ul>
      </section>

      <section>
        <h3>Interests</h3>
        <p>
          In my free time, I enjoy [your hobbies or interests]. 
        </p>
      </section>

      <section>
        <h3>Extracurricular Activities</h3>
        <p>
          I actively participate in [any clubs, sports, or organizations] at [Your University].
        </p>
      </section>
      
      <section>
        <h3>Contact</h3>
        <p>
          Let's connect! You can reach me at <a href="mailto:your.email@example.com">your.email@example.com</a>.
        </p>
      </section>
    </div>
  );
}

export default About;

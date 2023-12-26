import React, { useState } from 'react';
import "./header.css";
// import { Link } from 'react-router-dom';
import LoginSignUp from '../LoginSign/LoginSign';
import Body from '../body/body';  // Import your section components
import About from '../About/About';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import ContactUs from '../ContactUs/ContactUs';

function Header() {
    const sections = {
        home: "home",
        about: "about",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        service: "service",
        contactus: "contactus",
        login: "login"
    };

    const [selectedSection, setSelectedSection] = useState(sections.home);

    const renderSection = () => {
        switch (selectedSection) {
            case sections.home:
                return <Body />;
            case sections.about:
                return <About />;
            case sections.service:
                return <Services />;
            case sections.project:
                return <Projects />;
            case sections.contactus:
                return <ContactUs />;
            case sections.login:
                return <LoginSignUp />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="container">
                <div className="left">Parshant Portfolio</div>
                <div className="right">
                    <ul>
                        <li onClick={() => setSelectedSection(sections.home)}>
                            <a href='#home'>Home</a>
                        </li>
                        <li onClick={() => setSelectedSection(sections.about)}>
                            <a href='#about'>About</a>
                        </li>
                        <li onClick={() => setSelectedSection(sections.service)}>
                            <a href="#services">Services</a>
                        </li>
                        <li onClick={() => setSelectedSection(sections.project)}>
                            <a href="#projects">Projects</a>
                        </li>
                        <li onClick={() => setSelectedSection(sections.contactus)}>
                            <a href="#contect">Contact Us</a>
                        </li>
                        <li onClick={() => setSelectedSection(sections.login)}>
                            <a href="#login">Sign Up / Login</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section-body">
                {renderSection()}
            </div>
        </div>
    );
}

export default Header;

import React, {useState} from 'react'
import './Services.css'
import ContactUs from '../ContactUs/ContactUs';

function Services() {
    const [showcontact, setShowContact] = useState(false);

    const handleContactButtonClick = () => {
      // You can add any logic here before showing the LoginSignUp component
      setShowContact(true);
    };
    return (
        <div className="services-container">
            <h1 className='heading'>Our Services</h1>
            <p className="intro-text">Welcome to our services page. We offer a variety of services to meet your needs.</p>

            <div className="service-item">
                <h2 className='service-heading'>Service 1</h2>
                <p className='service-description'>Description of service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="contact-button" onClick={handleContactButtonClick}>Contact Us</button>
            </div>

            <div className="service-item">
                <h2 className='service-heading'>Service 2</h2>
                <p className='service-description'>Description of service 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <button className="contact-button" onClick={handleContactButtonClick}>Contact Us</button>
            </div>

            <div className="service-item">
                <h2 className='service-heading'>Service 3</h2>
                <p className='service-description'>Description of service 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <button className="contact-button" onClick={handleContactButtonClick}>Contact Us</button>
            </div>

            {/* Add more service items as needed */}

            <p className='contact-text'>Contact us to learn more about how we can help you.</p>
            {showcontact && <ContactUs />}
        </div>
    )
}

export default Services
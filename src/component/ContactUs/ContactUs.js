import React, { useState } from 'react';
import './ContactUs.css'; // Import your CSS file for styling
import conta from '../Assets/conta.webp';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number (10 digits)';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit the data (you can add your logic here)
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      // Optionally, you can reset the form fields
      setFormData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
    } else {
      // Form is invalid, display errors
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-us-container">
      {/* <img src={conta} alt='contact'></img> */}
      
      <h1>Contact Us</h1>
      {formSubmitted ? (
        <div className="success-message">
          <p>Thank you for your message! We will get back to you soon.</p>
          <p>Name : {formData.name}</p>
          <p>Email : {formData.email}</p>
          <p>Phone : {formData.phone}</p>
          <p>Messsage : {formData.message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {formErrors.phone && <span className="error">{formErrors.phone}</span>}
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {formErrors.message && <span className="error">{formErrors.message}</span>}
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactUs;

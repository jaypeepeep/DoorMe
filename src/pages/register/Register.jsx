import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: '',
    socialStatus: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', {
        fullName: formData.fullName,
        email: formData.email,
        university: formData.university,
        socialStatus: formData.socialStatus,
        phoneNumber: formData.phoneNumber,
        password: formData.password
      });
      console.log(response.data);
      alert('User registered successfully');
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <div className="shadow-above"></div>
        <div className="header-container">
          <h1>Input your information</h1>
          <p className="header-p">
            We need you to help us with some basic information for your account creation. Here are our <span style={{ color: '#4743E0' }}>terms and conditions</span>. Please read them carefully. We are GDPR compliant
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-container">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="Full Name" className="full-name-input" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="input-container">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email Address" className="email-input" value={formData.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="input-container">
              <label>University</label>
              <input type="text" name="university" placeholder="University Name" className="university-input" value={formData.university} onChange={handleChange} required />
            </div>
            <div className="input-container">
              <label>Social Status</label>
              <input type="text" name="socialStatus" placeholder="Your Social Status" className="social-status-input" value={formData.socialStatus} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="input-container">
              <label>Phone Number</label>
              <input type="tel" name="phoneNumber" placeholder="+63 999 999 9999" className="phone-number-input" pattern="\+63 [0-9]{3} [0-9]{3} [0-9]{4}" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="input-container">
              <label>Password</label>
              <input type="password" name="password" className="password-input" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="input-container">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" className="password-input" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </div>

          <div className="button-container">
            <button className="register-button" type="submit">Register</button>
          </div>
        </form>
      </div>
      <div className="register-bg"></div>
    </div>
  );
}

export default Register;

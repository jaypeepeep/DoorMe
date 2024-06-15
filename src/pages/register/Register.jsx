import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    university: '',
    socialStatus: '',
    rentPrice: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [touched, setTouched] = useState({});
  const [showTooltip, setShowTooltip] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
    setTouched(prevTouched => ({
      ...prevTouched,
      [name]: true
    }));
  };

  const handleRentPriceClick = (price) => {
    setForm(prevForm => ({
      ...prevForm,
      rentPrice: price
    }));
    setTouched(prevTouched => ({
      ...prevTouched,
      rentPrice: true
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsFilled = Object.keys(form).every(key => form[key]);
    const passwordsMatch = form.password === form.confirmPassword;

    if (!allFieldsFilled || !passwordsMatch) {
      setShowTooltip(true);
      setPasswordMismatch(!passwordsMatch);
    } else {
      setShowTooltip(false);
      setPasswordMismatch(false);
      navigate('/success');
    }
  };

  const renderTooltip = (field) => {
    return (
      showTooltip && !form[field] && touched[field] ? (
        <span className="required-tooltip active">?</span>
      ) : (
        <span className="required-tooltip">?</span>
      )
    );
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <div className="header-container">
          <h1>Input your information</h1>
          <p className="header-p">We need you to help us with some basic information for your account creation. Here are our <span style={{color: "#4743E0"}}>terms and conditions</span>. Please read them carefully. We are GDPR compliant</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-container">
              <label>Full Name {renderTooltip('fullName')}</label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="full-name-input"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label>Email {renderTooltip('email')}</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="email-input"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-container">
              <label>University {renderTooltip('university')}</label>
              <input
                type="text"
                name="university"
                placeholder="University Name"
                className="university-input"
                value={form.university}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label>Social Status {renderTooltip('socialStatus')}</label>
              <input
                type="text"
                name="socialStatus"
                placeholder="Your Social Status"
                className="social-status-input"
                value={form.socialStatus}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-container">
              <label>Prefer Rent Prices {renderTooltip('rentPrice')}</label>
              <div className="price-range-container">
                {['<1000', '<2000', '<3000', '<4000'].map(price => (
                  <div
                    key={price}
                    className={`price-option ${form.rentPrice === price ? 'selected' : ''}`}
                    onClick={() => handleRentPriceClick(price)}
                  >
                    <p>{price}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="input-container">
              <label>Phone Number {renderTooltip('phoneNumber')}</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+63 999 999 9999"
                className="phone-number-input"
                pattern="\+63 [0-9]{3} [0-9]{3} [0-9]{4}"
                value={form.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-container">
              <label>Password {renderTooltip('password')}</label>
              <input
                type="password"
                name="password"
                className="password-input"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label>Confirm Password {renderTooltip('confirmPassword')}</label>
              <input
                type="password"
                name="confirmPassword"
                className="password-input"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
              {passwordMismatch && touched.confirmPassword && (
                <span className="password-mismatch-tooltip">Passwords do not match.</span>
              )}
            </div>
          </div>

          <div className="button-container">
            <button type="submit" className="register-button">Register</button>
          </div>
        </form>
      </div>
      <div className="register-bg"></div>
    </div>
  );
}

export default Register;

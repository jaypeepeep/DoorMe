import React from 'react';
import "./Register.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Shadow from "../../assets/shadow-above.png";

const Register = () => {
  return (
    <div className="register-container">
        <div className="register-content">
            <div className="shadow-above"></div>
            
            <div className="header-container">
                <h1>Input your information</h1>
                <p className="header-p">We need you to help us with some basic information for your account creation. Here are our <span style={{color: "#4743E0"}}>terms and conditions</span>. Please read them carefully. We are GDPR compliant</p>
            </div>

            <div className="form-row">
                <div className="input-container">
                    <label>Full Name</label>
                    <input type="text" placeholder="Full Name" className="full-name-input" required/>
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <input type="email" placeholder="Email Address" className="email-input" required />
                </div>
            </div>

            <div className="form-row">
                <div className="input-container">
                    <label>University</label>
                    <input type="text" placeholder="University Name" className="university-input" required/>
                </div>
                <div className="input-container">
                    <label>Social Status</label>
                    <input type="text" placeholder="Your Social Status" className="social-status-input" required/>
                </div>
            </div>

            <div className="form-row">
                <div className="input-container">
                    <label>Prefer Rent Prices</label>
                    <div className="price-range-container">
                        <div className="price-1000">
                            <p>&lt;1000</p>
                        </div>
                        <div className="price-2000">
                            <p>&lt;2000</p>
                        </div>
                        <div className="price-3000">
                            <p>&lt;3000</p>
                        </div>
                        <div className="price-4000">
                            <p>&lt;4000</p>
                        </div>
                    </div>
                </div>
                <div className="input-container">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+63 999 999 9999" className="phone-number-input" pattern="\+63 [0-9]{3} [0-9]{3} [0-9]{4}" required/>
                </div>
            </div>

            <div className="form-row">
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" className="password-input" required/>
                </div>
                <div className="input-container">
                    <label>Confirm Password</label>
                    <input type="password" className="password-input" required/>
                </div>
            </div>
            
            <div className="button-container">
                <button className="register-button">Register</button>
            </div>
        </div>

        <div className="register-bg"></div>
    </div>
  );
}

export default Register;

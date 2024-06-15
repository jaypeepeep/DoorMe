import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";

function Success() {
  const [seconds, setSeconds] = useState(15);  // Set the starting value here
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate("/");
    }
  }, [seconds, navigate]);

  return (
    <div className="success-container">
      <div className="success-content">
        <h1>SUCCESS</h1>
        <p>Knock, Knock! Welcome to DoorMe!</p>
        <p className="long-message">
          We have successfully created your new account. But before you start
          you will have to activate it. We have sent an activation mail to the
          email you provided during registration. It should arrive in a couple
          of minutes.
        </p>
        <div className="loading-circle">
          <div className="spinner"></div>
          <div className="timer">{seconds}s</div>
        </div>
        
        <a href="/" className="success-button">
          Go to Homepage
        </a>
      </div>
    </div>
  );
}

export default Success;

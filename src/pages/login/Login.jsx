import React from "react";
import "./Login.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Login() {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login</h1>
        <p>Knock, Knock! Welcome to DoorMe!</p>
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button">Login Now</button>
        <p>
          Don’t have an account?{" "}
          <a href="/Register" className="create-account-link">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

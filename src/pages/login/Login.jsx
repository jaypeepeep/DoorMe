import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      setUsernameError("Username is required");
    } else {
      setUsernameError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    if (username && password) {
      console.log("Username:", username);
      console.log("Password:", password);
      navigate("/success");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login</h1>
        <p>Knock, Knock! Welcome to DoorMe!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={handleUsernameChange}
          />
          {usernameError && <p className="error-message">{usernameError}</p>}
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
          <button type="submit" className="login-button">
            Login Now
          </button>
        </form>
        <p>
          Don’t have an account?{" "}
          <a href="/register" className="create-account-link">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

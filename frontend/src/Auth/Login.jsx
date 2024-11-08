import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const givenUsername = "aashish"

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(username);
    console.log(password);

    alert("Login submitted!");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

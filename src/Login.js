import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the new CSS

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(username);
    navigate('/equipment-list');
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login to MedMobilize</h2>
        <p>Doesn't have an account yet? <span className="sign-up">Sign Up</span></p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <span className="forgot-password">Forgot Password?</span>
          </div>
          <button type="submit" className="login-btn">LOGIN</button>
        </form>
        <div className="social-login">
          <button className="google-btn">Google</button>
          <button className="facebook-btn">Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

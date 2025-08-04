import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure this CSS file is created
import { Link } from 'react-router-dom';


const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Logged in Successfully", "success");
      navigate("/notes");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

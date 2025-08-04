import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // 👈 Create this CSS file

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "", email: "", password: "", cpassword: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;
    if (password !== cpassword) {
      props.showAlert("Passwords do not match", "danger");
      return;
    }

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Account created successfully", "success");
      navigate("/notes");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <p className="subtitle">Create your account to start taking smart notes.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={onChange}
            placeholder="Full Name"
            required
          />
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
            minLength={5}
          />
          <input
            type="password"
            name="cpassword"
            value={credentials.cpassword}
            onChange={onChange}
            placeholder="Confirm Password"
            required
            minLength={5}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const goToNotes = () => {
    if (localStorage.getItem('token')) {
      navigate('/notes');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="landing-wrapper">
      <style>{`
        .landing-wrapper {
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
          background: linear-gradient(to right, #f0f2f5, #ffffff);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }

        .hero {
          text-align: center;
          max-width: 800px;
          padding-top: 3rem;
        }

        .hero h1 {
          font-size: 3rem;
          color: #2c3e50;
          font-weight: 700;
        }

        .hero p {
          font-size: 1.2rem;
          color: #555;
          margin-top: 1rem;
        }

        .cta-button {
          margin-top: 2rem;
          padding: 12px 28px;
          font-size: 1.1rem;
          border: none;
          border-radius: 50px;
          background-color: #0d6efd;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .cta-button:hover {
          background-color: #084dc0;
          transform: scale(1.05);
        }

        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 4rem;
          max-width: 1100px;
        }

        .feature-box {
          background-color: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          width: 280px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.1);
        }

        .feature-box h3 {
          color: #0d6efd;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .feature-box p {
          color: #555;
          font-size: 0.95rem;
        }

        .footer {
          margin-top: 4rem;
          color: #888;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          .cta-button {
            width: 90%;
          }
        }
      `}</style>

      <div className="hero">
        <h1>Welcome to NoteStack</h1>
        <p>Your minimal, secure, and smart place to store thoughts and ideas on the go.</p>
        <button className="cta-button" onClick={goToNotes}>📁 My Notes</button>
      </div>

      <div className="features">
        <div className="feature-box">
          <h3>🎯 Easy Organization</h3>
          <p>Tag, search, and categorize notes effortlessly with our clean UI.</p>
        </div>
        <div className="feature-box">
          <h3>🔐 Privacy First</h3>
          <p>Access notes securely—only when logged in. Your data stays safe.</p>
        </div>
        <div className="feature-box">
          <h3>⚡ Instant Sync</h3>
          <p>Notes appear instantly and stay up-to-date across sessions.</p>
        </div>
      </div>

      <div className="footer">© {new Date().getFullYear()} NoteStack | Built with 💙 by Pranay</div>
    </div>
  );
};

export default Landing;

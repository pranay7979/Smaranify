import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Keep your custom styles here

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // You can log location changes or highlight active nav here
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center logo-link" to="/">
            <img
              src = { require('../assets/logo.png') }
              alt="Smaranify Logo"
              className="navbar-logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              {!localStorage.getItem('token') ? (
                <div className="d-flex flex-column flex-lg-row align-items-center w-100 justify-content-lg-end gap-2 mt-3 mt-lg-0">
                  <Link className="btn btn-outline-light w-100 w-lg-auto" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-light text-primary w-100 w-lg-auto" to="/signup">
                    Signup
                  </Link>
                </div>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-3 logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}

            </ul>
          </div>
        </div>
      </nav>

      <style>{`

      .logo-link {
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.navbar-logo {
  height: 55px;
  margin-right: 10px;
  width: 160px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: transform 0.3s ease;
}

.logo-link:hover .navbar-logo {
  
}

.brand-text {
  font-weight: 600;
  font-size: 1.2rem;
  color: #fff;
  transition: color 0.3s ease;
}

.logo-link:hover .brand-text {
  color: #ffd700; /* golden on hover */
}

      .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='black' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

        .custom-navbar {
  background: linear-gradient(to right,rgb(64, 6, 118),rgb(6, 102, 197));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

        .navbar-brand {
          font-weight: bold;
          font-size: 1.6rem;
          color: #fff !important;
          transition: all 0.3s ease-in-out;
        }

        .navbar-brand:hover {
          color: #ffd700 !important;
          transform: scale(1.05);
        }

        .nav-link {
          color: white !important;
          font-weight: 500;
          padding: 0.5rem 1rem;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #ffd700 !important;
        }

        .nav-link.active {
          border-bottom: 2px solid #fff;
        }

        .login-btn, .signup-btn {
          border-radius: 10px;
          background-color: white;
          color: #007BFF !important;
          font-weight: 500;
          margin-left: 10px;
          padding: 6px 14px;
          transition: all 0.3s ease;
        }

        .login-btn:hover, .signup-btn:hover {
          background-color: #ffd700;
          color: #000 !important;
        }

        .logout-btn {
          font-weight: 500;
          border-radius: 8px;
          padding: 6px 14px;
          transition: background-color 0.3s ease;
        }

        .logout-btn:hover {
          background-color: #ffd700;
          color: black;
        }

        @media (max-width: 768px) {
          .navbar-nav {
            text-align: center;
          }
          .nav-link {
            padding: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}

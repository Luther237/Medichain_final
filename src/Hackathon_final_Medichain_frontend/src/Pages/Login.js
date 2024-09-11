import React, { useState } from 'react';
//import '../Login.css';
import '../CSS/Login.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  const toggleLoginType = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-toggle">
          <button id="b" 
            className={`toggle-btn ${isAdmin ? 'active' : ''}`}
            onClick={toggleLoginType}
            style={{
              backgroundColor:"orange"
            }}
          >
            {isAdmin ? 'Log In as User' : 'Log In as Admin'}
          </button>
        </div>

        <form>
          {isAdmin ? (
            <>
              <h2>Admin Login</h2>
              <div className="form-group">
                <input type="text" placeholder="Medecin Username" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Medecin Password" />
              </div>
            </>
          ) : (
            <>
              <h2>User Login</h2>
              <div className="form-group">
                <input type="text" placeholder="Patient patientname" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="patient Password" />
              </div>
            </>
          )}
          <div className="form-group remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Password</label>
          </div>
          <NavLink to="/patient" id="b" className="login-btn" style={{
            backgroundColor: "blue", padding:"1% 10%"
          }}>Log in</NavLink>
        </form>
      </div>
          </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Layout.css';

const Layout = ({ children }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div className="layout-wrapper">
      <header>
        <div className="header-container">
          <div className="logo-burger">
            <Link to="/" className="logo-link">StayFinder 🏠</Link>
            <button
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
          </div>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>

            {!token && (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login" className="login-btn">Login</Link>
              </>
            )}

            {token && role === 'guest' && (
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            )}

            {token && role === 'host' && (
              <>
                <Link to="/create-listing">List Your Home</Link>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;

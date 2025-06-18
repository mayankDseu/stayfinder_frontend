import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Layout.css';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="layout-wrapper">
      <header>
        <div className="header-container">
          <Link to="/" className="logo-link">StayFinder 🏠</Link>

          <button className="burger" onClick={toggleMenu}>
            ☰
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

            {!token && (
              <>
                <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
                <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
              </>
            )}

            {token && role === 'guest' && (
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            )}

            {token && role === 'host' && (
              <>
                <Link to="/create-listing" onClick={() => setMenuOpen(false)}>List Your Home</Link>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;

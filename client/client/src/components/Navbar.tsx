import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main Navigation">
        {/* Brand Logo: G is Black, E is Orange */}
        <Logo size="md" />

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Action Button & Mobile Menu Button */}
        <div className="nav-actions">
          <button
            className="btn btn-primary btn-sm"
            onClick={onOpenQuoteModal}
          >
            Request Quote
          </button>

          <button
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

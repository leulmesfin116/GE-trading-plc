import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
  cartCount?: number;
  wishlistCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount = 0,
  wishlistCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchInput.trim())}`);
      setSearchOpen(false);
      setSearchInput('');
    }
  };

  return (
    <div className="floating-header-container">
      <header className="pill-navbar">
        {/* Left: Brand Logo (G is Black, E is Orange) */}
        <div className="navbar-left">
          <Logo size="sm" showSubtitle={false} />
        </div>

        {/* Center: Menu Items with Dropdowns (Same as screenshot) */}
        <nav className={`navbar-center ${mobileMenuOpen ? 'mobile-visible' : ''}`}>
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setActiveDropdown('home')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link-pill ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Home</span>
              <svg className="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
            {activeDropdown === 'home' && (
              <div className="dropdown-menu">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Modern Living</Link>
                <Link to="/products" onClick={() => setMobileMenuOpen(false)}>Featured Catalog</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>Craftsmanship Story</Link>
              </div>
            )}
          </div>

          {/* Products Category Dropdown (Consolidating all 8 categories) */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <NavLink
              to="/products"
              className={({ isActive }) => `nav-link-pill ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Products</span>
              <svg className="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
            {activeDropdown === 'products' && (
              <div className="dropdown-menu mega-products-menu">
                <Link to="/products?category=Woodworks" onClick={() => setMobileMenuOpen(false)}>
                  Woodworks
                </Link>
                <Link to="/products?category=Wardrobe" onClick={() => setMobileMenuOpen(false)}>
                  Wardrobe
                </Link>
                <Link to="/products?category=Beds" onClick={() => setMobileMenuOpen(false)}>
                  Beds
                </Link>
                <Link to="/products?category=Kitchen Cabinets" onClick={() => setMobileMenuOpen(false)}>
                  Kitchen Cabinets
                </Link>
                <Link to="/products?category=Shoe Racks" onClick={() => setMobileMenuOpen(false)}>
                  Shoe Racks
                </Link>
                <Link to="/products?category=Sofa / Coffee Tables" onClick={() => setMobileMenuOpen(false)}>
                  Sofa / Coffee Tables
                </Link>
                <Link to="/products?category=Interior Design Finishing" onClick={() => setMobileMenuOpen(false)}>
                  Interior Design Finishing
                </Link>
                <Link to="/products?category=Dining Tables" onClick={() => setMobileMenuOpen(false)}>
                  Dining Tables
                </Link>
                <div style={{ height: '1px', background: '#f5f5f4', margin: '4px 0' }} />
                <Link
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: '#ff6b00', fontWeight: '700' }}
                >
                  View All Products →
                </Link>
              </div>
            )}
          </div>

          {/* About Link */}
          <div className="nav-item-dropdown">
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link-pill ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About</span>
            </NavLink>
          </div>
        </nav>

        {/* Right: Minimalist Action Icons (Same as screenshot: Search, User, Wishlist, Cart) */}
        <div className="navbar-right">
          {/* Search Trigger */}
          <button
            className="icon-action-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search furniture"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* User Account */}
          <Link to="/about#contact" className="icon-action-btn" aria-label="Customer account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>

          {/* Wishlist Icon with count badge */}
          <Link to="/products" className="icon-action-btn badge-btn" aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className="icon-counter-badge">{wishlistCount}</span>
          </Link>

          {/* Cart Icon with count badge */}
          <Link to="/products" className="icon-action-btn badge-btn" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="icon-counter-badge">{cartCount}</span>
          </Link>

          {/* Mobile hamburger menu toggle */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Expandable Quick Search Bar */}
        {searchOpen && (
          <form className="navbar-quick-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search beds, tables, chairs..."
              value={searchInput}
              autoFocus
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="quick-search-submit">
              Search
            </button>
            <button
              type="button"
              className="quick-search-close"
              onClick={() => setSearchOpen(false)}
            >
              ✕
            </button>
          </form>
        )}
      </header>
    </div>
  );
};

export default Navbar;

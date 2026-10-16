import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#0a0d14', color: '#a8a29e', padding: 'clamp(40px, 8vw, 70px) 0 30px 0', borderTop: '1px solid #1c1917' }}>
      <div className="container">
        <div className="footer-columns-grid">
          {/* Brand Info */}
          <div>
            <Logo size="md" darkMode={true} />
            <p style={{ marginTop: '18px', color: '#a8a29e', fontSize: '0.92rem', lineHeight: '1.7', maxWidth: '320px' }}>
              <strong>GE Trading PLC</strong> designs and crafts architectural furniture for modern interior living — bespoke wooden beds, sculptural tables, and artisanal chairs.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <span style={{ background: '#1c1917', border: '1px solid #292524', color: '#ff6b00', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '9999px', fontWeight: 600 }}>
                100% Solid Hardwood
              </span>
              <span style={{ background: '#1c1917', border: '1px solid #292524', color: '#f5f5f4', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '9999px', fontWeight: 600 }}>
                Bespoke Joinery
              </span>
            </div>
          </div>

          {/* Furniture Collections */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '18px', fontFamily: 'var(--font-heading)' }}>
              Products & Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
              <li><Link to="/products?category=Woodworks" style={{ color: '#a8a29e' }}>Woodworks</Link></li>
              <li><Link to="/products?category=Wardrobe" style={{ color: '#a8a29e' }}>Wardrobe</Link></li>
              <li><Link to="/products?category=Beds" style={{ color: '#a8a29e' }}>Beds</Link></li>
              <li><Link to="/products?category=Kitchen Cabinets" style={{ color: '#a8a29e' }}>Kitchen Cabinets</Link></li>
              <li><Link to="/products?category=Shoe Racks" style={{ color: '#a8a29e' }}>Shoe Racks</Link></li>
              <li><Link to="/products?category=Sofa / Coffee Tables" style={{ color: '#a8a29e' }}>Sofa / Coffee Tables</Link></li>
              <li><Link to="/products?category=Interior Design Finishing" style={{ color: '#a8a29e' }}>Interior Design Finishing</Link></li>
              <li><Link to="/products?category=Dining Tables" style={{ color: '#a8a29e' }}>Dining Tables</Link></li>
            </ul>
          </div>

          {/* Design Studio */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '18px', fontFamily: 'var(--font-heading)' }}>
              Studio & Care
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><Link to="/about" style={{ color: '#a8a29e' }}>Our Woodworking Story</Link></li>
              <li><Link to="/about" style={{ color: '#a8a29e' }}>Hardwood & Joinery Care</Link></li>
              <li><Link to="/about#contact" style={{ color: '#a8a29e' }}>Trade & Architect Program</Link></li>
              <li><Link to="/about#contact" style={{ color: '#a8a29e' }}>Custom Commission Inquiries</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '18px', fontFamily: 'var(--font-heading)' }}>
              Showroom & Workshop
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <li style={{ color: '#d6d3d1' }}>
                📍 Dessie, Menafesha, Ethiopia
              </li>
              <li style={{ color: '#d6d3d1' }}>
                📞 <a href="tel:+251901151559" style={{ color: '#ffffff', textDecoration: 'none' }}>+251 90 115 1559</a> / <a href="tel:+251943183568" style={{ color: '#ffffff', textDecoration: 'none' }}>+251 94 318 3568</a>
              </li>
              <li style={{ color: '#d6d3d1' }}>
                ✉️ info@getradingplc.com / furniture@getradingplc.com
              </li>
              <li style={{ color: '#a8a29e' }}>
                🕒 Workshop Hours: Mon – Sat: 8:30 AM – 6:30 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1c1917', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            © {new Date().getFullYear()} <strong>GE Trading PLC</strong>. All rights reserved. Master Furniture & Interior Living.
          </div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <span>Privacy</span>
            <span>•</span>
            <span>Terms of Craftsmanship</span>
            <span>•</span>
            <span>Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

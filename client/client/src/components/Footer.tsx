import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-column">
            <Logo size="md" darkMode={true} />
            <p style={{ marginTop: '16px', color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6' }}>
              <strong>GE Trading PLC</strong> is a premier global trade and distribution company, connecting worldwide suppliers and local industries with trusted import and export solutions.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <span className="badge badge-orange">ISO 9001 Certified</span>
              <span className="badge badge-dark" style={{ background: '#1e293b', color: '#f8fafc' }}>
                Licensed Importer/Exporter
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/products">Product Catalog</Link></li>
              <li><Link to="/about">About GE Trading PLC</Link></li>
              <li><Link to="/about#values">Mission & Core Values</Link></li>
              <li><Link to="/about#contact">Contact & Inquiry</Link></li>
            </ul>
          </div>

          {/* Trade Categories */}
          <div className="footer-column">
            <h4>Trading Sectors</h4>
            <ul>
              <li><Link to="/products">Agricultural Commodities</Link></li>
              <li><Link to="/products">Heavy Machinery & Equipment</Link></li>
              <li><Link to="/products">Construction & Steel Products</Link></li>
              <li><Link to="/products">FMCG & Consumer Goods</Link></li>
              <li><Link to="/products">Industrial Spares & Tools</Link></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="footer-column">
            <h4>Corporate Office</h4>
            <ul style={{ gap: '10px' }}>
              <li style={{ color: '#cbd5e1' }}>
                📍 Bole Sub-City, Commercial District, Addis Ababa, Ethiopia
              </li>
              <li style={{ color: '#cbd5e1' }}>
                📞 +251 11 654 3210 / +251 91 122 3344
              </li>
              <li style={{ color: '#cbd5e1' }}>
                ✉️ info@getradingplc.com / trade@getradingplc.com
              </li>
              <li style={{ color: '#cbd5e1' }}>
                🕒 Mon – Sat: 8:30 AM – 6:00 PM (EAT)
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>GE Trading PLC</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Trade</span>
            <span>•</span>
            <span>Incoterms Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

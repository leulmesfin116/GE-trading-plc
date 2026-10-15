import React, { useState } from 'react';
import Logo from '../components/Logo';

export const AboutPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Bespoke Bed',
    message: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#fafaf9' }}>
      <div className="container">
        {/* About Editorial Hero */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#78716c', fontWeight: 700 }}>
            Artisanal Woodworking & Modern Living
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.6rem', fontWeight: 400, marginTop: '10px', color: '#1c1917', lineHeight: 1.15 }}>
            Crafting Timeless Beds, Tables & Chairs
          </h1>
          <p style={{ color: '#78716c', fontSize: '1.15rem', marginTop: '18px', lineHeight: 1.7 }}>
            <strong>GE Trading PLC</strong> is a design studio and master furniture manufacturer specializing in architectural wooden platform beds, sculptural dining & coffee tables, and ergonomic accent chairs. We marry traditional joinery with clean, contemporary Scandinavian aesthetics.
          </p>
        </div>

        {/* Brand Card & Craftsmanship Grid */}
        <div className="editorial-split-grid" style={{ marginBottom: '80px' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid #e7e5e4' }}>
            <div style={{ marginBottom: '24px' }}>
              <Logo size="lg" showSubtitle={false} />
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '14px', fontFamily: 'var(--font-heading)' }}>
              The GE Design Philosophy
            </h3>
            <p style={{ color: '#78716c', lineHeight: 1.7, marginBottom: '20px' }}>
              Our logo features an authoritative black <strong>G</strong> representing architectural stability and durable engineering, and a vibrant orange <strong>E</strong> symbolizing energetic creativity and warm organic living.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ background: '#f5f5f4', padding: '16px', borderRadius: '14px' }}>
                <strong style={{ display: 'block', fontSize: '1.2rem', color: '#1c1917' }}>100%</strong>
                <span style={{ fontSize: '0.85rem', color: '#78716c' }}>Solid Sustainably Harvested Hardwood</span>
              </div>
              <div style={{ background: '#f5f5f4', padding: '16px', borderRadius: '14px' }}>
                <strong style={{ display: 'block', fontSize: '1.2rem', color: '#1c1917' }}>10-Year</strong>
                <span style={{ fontSize: '0.85rem', color: '#78716c' }}>Structural Joinery Warranty</span>
              </div>
            </div>
          </div>

          <div className="split-image-frame">
            <img src="/images/bed.jpg" alt="Artisan wooden platform bed" />
          </div>
        </div>

        {/* 3 Pillars of our Collection */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: 400 }}>
            Our Three Signatures
          </h2>
        </div>

        <div className="grid-3" style={{ marginBottom: '80px' }}>
          <div style={{ background: '#ffffff', padding: '36px', borderRadius: '20px', border: '1px solid #e7e5e4' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🛏️</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Architectural Beds</h3>
            <p style={{ color: '#78716c', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Low-profile platform frames, floating wood borders, and textured linen upholstered headboards engineered for deep rest.
            </p>
          </div>

          <div style={{ background: '#ffffff', padding: '36px', borderRadius: '20px', border: '1px solid #e7e5e4' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🪵</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Sculptural Tables</h3>
            <p style={{ color: '#78716c', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Solid oak dining tables with ribbed pedestal bases, monolithic Roman travertine coffee tables, and bedside companion plinths.
            </p>
          </div>

          <div style={{ background: '#ffffff', padding: '36px', borderRadius: '20px', border: '1px solid #e7e5e4' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🪑</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Artisanal Chairs</h3>
            <p style={{ color: '#78716c', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Turned spindle dining chairs, plush bouclé lounge chairs, and woven cane armchairs designed with ergonomic precision.
            </p>
          </div>
        </div>

        {/* Contact & Custom Commission Form */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '50px 40px', border: '1px solid #e7e5e4', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#ff6b00', fontWeight: 700 }}>
              Workshop & Showroom
            </span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginTop: '6px' }}>
              Visit Our Studio or Inquire Online
            </h3>
            <p style={{ color: '#78716c', fontSize: '0.95rem', maxWidth: '540px', margin: '8px auto 20px auto' }}>
              Our workshop and showroom is located in <strong>Dessie, Menafesha</strong>. Reach us directly via phone or WhatsApp for custom woodworks and interior finishing orders.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <div style={{ background: '#f5f5f4', padding: '10px 18px', borderRadius: '12px', fontSize: '0.9rem' }}>
                📍 <strong>Location:</strong> Dessie, Menafesha, Ethiopia
              </div>
              <div style={{ background: '#f5f5f4', padding: '10px 18px', borderRadius: '12px', fontSize: '0.9rem' }}>
                📞 <strong>Direct Line:</strong> <a href="tel:+251901151559" style={{ color: '#ff6b00', fontWeight: '700' }}>+251 90 115 1559</a>
              </div>
              <div style={{ background: '#f5f5f4', padding: '10px 18px', borderRadius: '12px', fontSize: '0.9rem' }}>
                📞 <strong>Secondary:</strong> <a href="tel:+251943183568" style={{ color: '#ff6b00', fontWeight: '700' }}>+251 94 318 3568</a>
              </div>
            </div>
          </div>

          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <div style={{ fontSize: '2.5rem', color: '#16a34a', marginBottom: '12px' }}>✓</div>
              <h4>Thank you for reaching out!</h4>
              <p style={{ color: '#78716c', marginTop: '6px' }}>
                Our master design team at GE Trading PLC will review your commission inquiry and call you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Elena Rostova"
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>Email Address *</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="elena@studio.com"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>Phone / WhatsApp</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+251 90 115 1559"
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>Piece Category</label>
                  <select
                    className="form-control"
                    value={contactData.projectType}
                    onChange={(e) => setContactData({ ...contactData, projectType: e.target.value })}
                  >
                    <option value="Bespoke Bed">Platform Bed</option>
                    <option value="Dining / Coffee Table">Dining / Coffee Table</option>
                    <option value="Chairs Set">Dining / Accent Chairs</option>
                    <option value="Full Room Project">Full Interior Furniture Project</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>Specifications or Notes</label>
                <textarea
                  rows={4}
                  className="form-control"
                  placeholder="Share dimensions, timber preferences (White Oak, Walnut, Ash), or custom delivery requests..."
                  value={contactData.message}
                  onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-black-pill" style={{ width: '100%', padding: '14px', fontSize: '1rem' }}>
                Send Commission Request →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

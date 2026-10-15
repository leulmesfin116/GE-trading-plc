import React, { useState } from 'react';
import Logo from '../components/Logo';

export const AboutPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* ================= ABOUT HERO ================= */}
      <section className="about-hero">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="badge badge-orange" style={{ marginBottom: '14px' }}>
                Corporate Profile & Heritage
              </span>
              <h2>Pioneering Reliable International Trade & Supply Chains</h2>
              <p>
                <strong>GE Trading PLC</strong> is a registered general trading, import, and export enterprise based in Addis Ababa, Ethiopia, operating across key trade corridors across Africa, the Middle East, Europe, and Asia.
              </p>
              <p>
                Founded on the cornerstone of trade integrity and transparent contract fulfillment, we bridge the gap between regional agricultural producers and demanding international commodity markets, while concurrently facilitating the import of critical industrial and construction infrastructure.
              </p>
              <div style={{ display: 'flex', gap: '20px', marginTop: '24px' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ff6b00', fontFamily: 'var(--font-heading)' }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Contract Integrity</div>
                </div>
                <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '20px' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#111827', fontFamily: 'var(--font-heading)' }}>
                    ISO 9001
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Quality Management</div>
                </div>
                <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '20px' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ff6b00', fontFamily: 'var(--font-heading)' }}>
                    Global
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Banking & LC Compliant</div>
                </div>
              </div>
            </div>

            {/* Visual Box with Brand Logo Showcase */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'inline-block', marginBottom: '20px' }}>
                <Logo size="lg" showSubtitle={false} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
                GE Trading Private Limited Company
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '24px' }}>
                The official emblem reflects our corporate foundation: <strong>G</strong> in authoritative black representing stability and corporate governance, alongside <strong>E</strong> in dynamic orange embodying vitality, growth, and commercial innovation.
              </p>

              <div
                style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'left',
                  fontSize: '0.88rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div><strong>Registration:</strong> Commercial Registration & Business License</div>
                <div><strong>Taxpayer ID (TIN):</strong> Fully Registered & Tax Compliant</div>
                <div><strong>Chamber Member:</strong> Addis Ababa & Sectoral Chamber of Commerce</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION, VISION & VALUES ================= */}
      <section className="section" id="values">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-dark">Our Foundation</span>
            <h2>Mission, Vision & Core Values</h2>
            <p>
              Guiding our operations, supplier relations, and cross-border commercial transactions.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-num">01</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and progressive trading gateway in East Africa, recognized globally for superior commodity standards, supply resilience, and sustainable trade ethics.
              </p>
            </div>

            <div className="value-card">
              <div className="value-num">02</div>
              <h3>Our Mission</h3>
              <p>
                To empower industries and global partners through timely sourcing, stringent quality verification, cost-effective freight management, and long-term bilateral trade relationships.
              </p>
            </div>

            <div className="value-card">
              <div className="value-num">03</div>
              <h3>Core Values</h3>
              <p>
                Integrity in every contract, transparency in grading and pricing, unwavering respect for environmental stewardship, and continuous technological modernization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPERATIONAL MILESTONES ================= */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="section-header">
            <span className="badge badge-orange">Growth & Trajectory</span>
            <h2>Milestones in Our Trading Journey</h2>
            <p>
              A consistent record of expanding product lines, entering overseas markets, and scaling logistical capacity.
            </p>
          </div>

          <div className="milestones-track">
            <div className="milestone-item">
              <div className="milestone-year">2010</div>
              <div className="milestone-title">Establishment & Local Wholesale Distribution</div>
              <div className="milestone-desc">
                Initiated domestic distribution of industrial hardware and construction supplies across major regional hubs.
              </div>
            </div>

            <div className="milestone-item">
              <div className="milestone-year">2015</div>
              <div className="milestone-title">Agricultural Commodity Export Accreditation</div>
              <div className="milestone-desc">
                Obtained official export clearance for Arabica green coffee beans, sesame seeds, and pulses to Europe and the Middle East.
              </div>
            </div>

            <div className="milestone-item">
              <div className="milestone-year">2019</div>
              <div className="milestone-title">Heavy Equipment & Machinery Division Launch</div>
              <div className="milestone-desc">
                Partnered with international OEMs to supply mining machinery, excavators, and industrial diesel generation units.
              </div>
            </div>

            <div className="milestone-item">
              <div className="milestone-year">Present Day</div>
              <div className="milestone-title">Multi-Corridor Trade Infrastructure & Modernization</div>
              <div className="milestone-desc">
                Operating integrated freight handling, multimodal port clearances, and digital client quotation portals.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT & LOCATION ================= */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-dark">Get in Touch</span>
            <h2>Contact GE Trading PLC</h2>
            <p>
              Have a trade inquiry, commodity request, or partnership proposal? Reach our trade desk directly.
            </p>
          </div>

          <div className="grid-2">
            {/* Contact Details Card */}
            <div className="contact-card-box">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>
                Corporate Headquarters
              </h3>
              <p style={{ marginBottom: '24px' }}>
                Our corporate offices and customer liaison desk are situated in the heart of the capital’s commercial district.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="feature-icon-box">📍</div>
                  <div>
                    <strong>Head Office Address</strong>
                    <p style={{ margin: 0, fontSize: '0.92rem' }}>
                      Bole Commercial District, Africa Avenue, Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="feature-icon-box">📞</div>
                  <div>
                    <strong>Phone & Trade Hotline</strong>
                    <p style={{ margin: 0, fontSize: '0.92rem' }}>
                      Main: +251 11 654 3210 / Mobile: +251 91 122 3344
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="feature-icon-box">✉️</div>
                  <div>
                    <strong>Official Email</strong>
                    <p style={{ margin: 0, fontSize: '0.92rem' }}>
                      General: info@getradingplc.com | Orders: trade@getradingplc.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="feature-icon-box">🕒</div>
                  <div>
                    <strong>Working Hours</strong>
                    <p style={{ margin: 0, fontSize: '0.92rem' }}>
                      Monday – Friday: 8:30 AM – 5:30 PM | Saturday: 8:30 AM – 1:00 PM (EAT)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="contact-card-box">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: '#ecfdf5',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      margin: '0 auto 16px auto',
                    }}
                  >
                    ✓
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
                    Message Dispatched Successfully!
                  </h3>
                  <p style={{ color: '#64748b', marginBottom: '20px' }}>
                    Thank you for reaching out to GE Trading PLC. Our representative will contact you shortly.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setFormSubmitted(false);
                      setContactData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>
                    Send Direct Trade Inquiry
                  </h3>

                  <div className="form-group">
                    <label>Full Name / Enterprise Rep *</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. Dawit Haile"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="dawit@example.com"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+251 91 ..."
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Subject / Sector Interest *</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. Sesame Export or Structural Steel Inquiry"
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Inquiry Message *</label>
                    <textarea
                      rows={4}
                      required
                      className="form-control"
                      placeholder="Provide specific details about your supply requirements..."
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message to GE Trading PLC →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_DATA, type Product } from '../data/products';

interface HomePageProps {
  onOpenQuoteModal: (product?: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const featuredProducts = PRODUCTS_DATA.filter((p) => p.featured);

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="badge badge-orange" style={{ marginBottom: '14px' }}>
                ⭐ Premier Import & Export Trading Partner
              </span>
              <h1>
                Powering Global Trade with <span className="hero-highlight">GE Trading PLC</span>
              </h1>
              <p className="hero-subtitle">
                We deliver world-class agricultural commodities, industrial machinery, and construction materials with uncompromised quality, verified origins, and streamlined international logistics.
              </p>

              <div className="hero-actions">
                <Link to="/products" className="btn btn-primary btn-lg">
                  Explore Products & Commodities →
                </Link>
                <button
                  className="btn btn-outline btn-lg"
                  onClick={() => onOpenQuoteModal()}
                >
                  Request a Trade Quote
                </button>
              </div>

              {/* Stats Banner */}
              <div className="hero-stats-banner">
                <div className="stat-item">
                  <div className="stat-num">15<span>+</span></div>
                  <div className="stat-label">Years of Trading Trust</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">30<span>+</span></div>
                  <div className="stat-label">Destination Markets</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">100<span>k+</span></div>
                  <div className="stat-label">Tons Shipped</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">99.8<span>%</span></div>
                  <div className="stat-label">Fulfillment Accuracy</div>
                </div>
              </div>
            </div>

            {/* Visual Card / Graphic Showcase */}
            <div className="hero-visual">
              <div className="hero-visual-card">
                <div className="hero-card-header">
                  <div>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#ff6b00', fontWeight: '700' }}>
                      Certified Enterprise
                    </div>
                    <div className="hero-card-title">GE Trading PLC Operations</div>
                  </div>
                  <span className="badge badge-success">● Active Shipments</span>
                </div>

                <div className="hero-feature-list">
                  <div className="hero-feature-item">
                    <div className="feature-icon-box">☕</div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Specialty Agricultural Exports</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Specialty Coffee, Sesame Seeds, Pulses & Spices</div>
                    </div>
                  </div>

                  <div className="hero-feature-item">
                    <div className="feature-icon-box" style={{ background: '#111827', border: '1px solid #ff6b00' }}>🏗️</div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Construction & Industrial Sourcing</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>High-grade Rebars, Cement, Heavy Machinery</div>
                    </div>
                  </div>

                  <div className="hero-feature-item">
                    <div className="feature-icon-box">🚢</div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Seamless End-to-End Logistics</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Port clearance, multimodal freight, and custom storage</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Standard Incoterms: CIF, FOB, CFR</span>
                  <Link to="/about" style={{ fontSize: '0.85rem', color: '#ff6b00', fontWeight: '700' }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE TRADING SECTORS ================= */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-orange">Diverse Capabilities</span>
            <h2>Our Core Trading Sectors</h2>
            <p>
              GE Trading PLC operates across strategic sectors essential for modern industry, national infrastructure, and commercial markets.
            </p>
          </div>

          <div className="grid-4">
            <div className="feature-card">
              <div className="feature-icon-wrapper">🌱</div>
              <h3>Agricultural Commodities</h3>
              <p>
                Direct-from-origin export of Ethiopian specialty coffee beans, high-purity sesame seeds, pulses, and whole spices tested to international lab standards.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">🏗️</div>
              <h3>Construction Materials</h3>
              <p>
                Import and distribution of prime structural steel rebars, EN-compliant Portland cement, commercial tiles, and architectural supplies for large-scale projects.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">🚜</div>
              <h3>Machinery & Equipment</h3>
              <p>
                Heavy earthmoving machinery, crawler excavators, diesel generators, and industrial manufacturing spare parts from world-renowned producers.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">📦</div>
              <h3>Consumer Goods (FMCG)</h3>
              <p>
                Bulk supply of refined edible oils, packaged staples, and commercial food products supporting wholesale distribution networks and supermarkets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS SPOTLIGHT ================= */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-dark">In-Demand Inventory</span>
            <h2>Featured Trade Commodities</h2>
            <p>
              High-volume commodities currently available for immediate containerized shipment and contracted delivery schedules.
            </p>
          </div>

          <div className="grid-3">
            {featuredProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrapper">
                  <span className="product-category-tag badge badge-orange">
                    {product.category}
                  </span>
                  <span className="product-origin-tag">
                    📍 {product.origin}
                  </span>
                  <div className="product-img-symbol">{product.icon}</div>
                </div>

                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>

                  <div className="product-specs">
                    <div className="product-spec-row">
                      <span>Standard / Grade:</span>
                      <strong>{product.grade}</strong>
                    </div>
                    <div className="product-spec-row">
                      <span>Min Order Quantity:</span>
                      <strong>{product.moq}</strong>
                    </div>
                    <div className="product-spec-row">
                      <span>Estimated Lead Time:</span>
                      <strong>{product.leadTime}</strong>
                    </div>
                  </div>

                  <div className="product-card-footer">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onOpenQuoteModal(product)}
                      style={{ width: '100%' }}
                    >
                      Inquire / Request Quote →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/products" className="btn btn-secondary btn-lg">
              View All Products & Full Specifications ({PRODUCTS_DATA.length} Items) →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE GE TRADING PLC ================= */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-orange">Why Partner With Us</span>
            <h2>Reliability Built on Integrity and Speed</h2>
            <p style={{ color: '#94a3b8' }}>
              International trade demands absolute precision in contract execution, banking security, and logistics reliability.
            </p>
          </div>

          <div className="grid-3">
            <div className="feature-card" style={{ background: '#131b2e', borderColor: '#1e293b' }}>
              <div className="feature-icon-box" style={{ marginBottom: '16px' }}>✓</div>
              <h3 style={{ color: '#ffffff' }}>Direct Origin Sourcing</h3>
              <p style={{ color: '#94a3b8' }}>
                We work directly with certified farm unions, extraction mills, and verified manufacturing factories, eliminating middlemen markups and safeguarding authenticity.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#131b2e', borderColor: '#1e293b' }}>
              <div className="feature-icon-box" style={{ marginBottom: '16px' }}>🛡️</div>
              <h3 style={{ color: '#ffffff' }}>Stringent Quality Controls</h3>
              <p style={{ color: '#94a3b8' }}>
                Every consignment undergoes independent pre-shipment inspections (SGS / Bureau Veritas standard) with comprehensive purity, moisture, and grade certifications.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#131b2e', borderColor: '#1e293b' }}>
              <div className="feature-icon-box" style={{ marginBottom: '16px' }}>⚡</div>
              <h3 style={{ color: '#ffffff' }}>Flexible Financing & Terms</h3>
              <p style={{ color: '#94a3b8' }}>
                Support for Letters of Credit (LC), Documentary Collections (CAD), and standard international banking arrangements compliant with ICC rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #fff5eb 0%, #ffffff 100%)', borderTop: '1px solid #fee0c8' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="badge badge-orange" style={{ marginBottom: '12px' }}>
            Ready to Expand Your Supply Chain?
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Get Competitive Quotations for Your Business Today
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
            Whether you require full container loads of export-grade commodities or bulk imports of structural supplies, GE Trading PLC guarantees unmatched pricing and seamless dispatch.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => onOpenQuoteModal()}>
              Submit Quotation Inquiry →
            </button>
            <Link to="/about#contact" className="btn btn-outline btn-lg">
              Contact Our Trade Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

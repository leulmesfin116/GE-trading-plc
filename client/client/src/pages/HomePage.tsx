import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_DATA, type Product } from '../data/products';

interface HomePageProps {
  onOpenQuoteModal: (product?: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: 'The Art of Modern\nInterior Living',
      image: '/images/hero.jpg',
      subtitle: 'Masterfully crafted beds, tables, and chairs engineered for timeless tranquility.',
    },
    {
      title: 'Pure Form &\nArtisanal Woodwork',
      image: '/images/bed.jpg',
      subtitle: 'Natural European oak and architectural joinery for contemporary sanctuaries.',
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const bestsellers = PRODUCTS_DATA.filter((p) => p.bestseller).slice(0, 4);

  return (
    <div>
      {/* ================= HERO SECTION (MATCHING SCREENSHOT) ================= */}
      <section
        className="hero-editorial"
        style={{
          backgroundImage: `url(${heroSlides[activeSlide].image})`,
          transition: 'background-image 0.6s ease-in-out',
        }}
      >
        <div className="hero-editorial-content">
          <h1 className="hero-title-editorial">
            The Art of Modern<br />Interior Living
          </h1>
        </div>

        {/* Carousel Arrows (< and >) */}
        <div className="hero-carousel-nav">
          <button className="hero-nav-arrow" onClick={prevSlide} aria-label="Previous Slide">
            ‹
          </button>
          <button className="hero-nav-arrow" onClick={nextSlide} aria-label="Next Slide">
            ›
          </button>
        </div>
      </section>

      {/* ================= BENEFIT STRIP (MATCHING SCREENSHOT) ================= */}
      <section className="benefits-strip">
        <div className="benefits-grid">
          <div className="benefit-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span className="benefit-text">Free Shipping Over $50</span>
          </div>

          <div className="benefit-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
            <span className="benefit-text">Quality Assurance</span>
          </div>

          <div className="benefit-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <polyline points="21 8 21 21 3 21 3 8"></polyline>
              <rect x="1" y="3" width="22" height="5"></rect>
              <line x1="10" y1="12" x2="14" y2="12"></line>
            </svg>
            <span className="benefit-text">Return within 14 days</span>
          </div>

          <div className="benefit-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span className="benefit-text">Support 24/7</span>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY CARDS (BEDS, TABLES, CHAIRS, LIVING) ================= */}
      <section className="category-row-section">
        <div className="category-cards-grid">
          {/* Category 1: Beds */}
          <Link to="/products?category=Beds" className="cat-card">
            <img src="/images/bed.jpg" alt="Modern Minimalist Beds" />
            <div className="cat-card-overlay">
              <div className="cat-card-title">Beds</div>
              <div className="cat-card-count">6 Items Available</div>
            </div>
          </Link>

          {/* Category 2: Chairs */}
          <Link to="/products?category=Chairs" className="cat-card">
            <img src="/images/chair.jpg" alt="Artisanal Chairs" />
            <div className="cat-card-overlay">
              <div className="cat-card-title">Chairs</div>
              <div className="cat-card-count">12 Items Available</div>
            </div>
          </Link>

          {/* Category 3: Tables */}
          <Link to="/products?category=Tables" className="cat-card">
            <img
              src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80"
              alt="Sculptural Tables"
            />
            <div className="cat-card-overlay">
              <div className="cat-card-title">Tables</div>
              <div className="cat-card-count">14 Items Available</div>
            </div>
          </Link>

          {/* Category 4: Decor & Living */}
          <Link to="/products" className="cat-card">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
              alt="Living and Accent Furniture"
            />
            <div className="cat-card-overlay">
              <div className="cat-card-title">Living & Decor</div>
              <div className="cat-card-count">8 Items Available</div>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= EDITORIAL SPLIT (MATCHING SCREENSHOT) ================= */}
      <section className="editorial-split-section">
        <div className="editorial-split-grid">
          <div>
            <span className="split-eyebrow">ENLIGHTEN YOUR HOME</span>
            <h2 className="split-title">
              Luminous Living: Architectural Furniture Designs
            </h2>
            <p className="split-description">
              At <strong>GE Trading PLC</strong>, every bed, dining table, and ergonomic chair is sculpted from premium hardwood and stone, balancing European minimalism with warm, organic textures designed to enrich your sanctuary.
            </p>
            <Link to="/products" className="btn-black-pill">
              Shop Collection →
            </Link>
          </div>

          <div className="split-image-frame">
            <img
              src="/images/hero.jpg"
              alt="Living room with sculptural furniture"
            />
          </div>
        </div>
      </section>

      {/* ================= BESTSELLER SECTION (DARK THEME FROM SCREENSHOT) ================= */}
      <section className="bestseller-dark-section">
        <div className="bestseller-container">
          <div className="bestseller-header">
            <div>
              <h2>Bestseller</h2>
              <p>Experience the most coveted furniture creations at GE Trading PLC</p>
            </div>
            <Link to="/products" className="btn-outline-pill-white">
              View All Collection
            </Link>
          </div>

          <div className="bestseller-grid">
            {bestsellers.map((product, idx) => (
              <div key={product.id} className="bestseller-card">
                {idx === 0 && (
                  <span className="bestseller-tag sale">-15%</span>
                )}
                {idx === 2 && (
                  <span className="bestseller-tag badge-custom">Signature</span>
                )}

                <div className="bestseller-img-box">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="bestseller-info">
                  <span className="bestseller-category">{product.category}</span>
                  <h3 className="bestseller-title">{product.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span className="bestseller-price">{product.price}</span>
                    <button
                      className="btn-black-pill"
                      style={{ padding: '6px 16px', fontSize: '0.8rem' }}
                      onClick={() => onOpenQuoteModal(product)}
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

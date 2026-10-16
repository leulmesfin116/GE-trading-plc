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
      subtitle: 'Bespoke woodworks, wardrobes, beds, kitchen cabinets, and luxury interior finishing.',
    },
    {
      title: 'Artisanal Joinery &\nCustom Millwork',
      image: '/images/bed.jpg',
      subtitle: 'Natural European hardwoods and contemporary architectural craftsmanship.',
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const bestsellers = PRODUCTS_DATA.filter((p) => p.bestseller).slice(0, 4);

  // The 8 specified categories with pictures
  const categoriesList = [
    {
      name: 'Woodworks',
      count: 'Custom Wall Panels & Credenzas',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      link: '/products?category=Woodworks',
    },
    {
      name: 'Wardrobe',
      count: 'Walk-In & Built-In Systems',
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
      link: '/products?category=Wardrobe',
    },
    {
      name: 'Beds',
      count: 'Platform & Upholstered Beds',
      image: '/images/bed.jpg',
      link: '/products?category=Beds',
    },
    {
      name: 'Kitchen Cabinets',
      count: 'Modular Island & Pantry Joinery',
      image: '/images/kitchen.jpg',
      link: '/products?category=Kitchen Cabinets',
    },
    {
      name: 'Shoe Racks',
      count: 'Slatted Entryway Consoles',
      image: '/images/shoerack.jpg',
      link: '/products?category=Shoe Racks',
    },
    {
      name: 'Sofa / Coffee Tables',
      count: 'Curved Sofas & Monolith Tables',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      link: '/products?category=Sofa / Coffee Tables',
    },
    {
      name: 'Interior Design Finishing',
      count: 'Turnkey Fit-Outs & Mouldings',
      image: '/images/hero.jpg',
      link: '/products?category=Interior Design Finishing',
    },
    {
      name: 'Dining Tables',
      count: 'Solid Slab & Pedestal Tables',
      image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
      link: '/products?category=Dining Tables',
    },
  ];

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

      {/* ================= CATEGORY CARDS SECTION (ALL 8 CATEGORIES WITH PICTURES) ================= */}
      <section className="category-row-section">
        <div className="container" style={{ marginBottom: '32px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#78716c', fontWeight: 700 }}>
            Craftsmanship Portfolio
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', fontWeight: 600, color: '#1c1917', marginTop: '6px' }}>
            Our Signature Creations & Services
          </h2>
        </div>

        <div className="category-cards-grid">
          {categoriesList.map((cat) => (
            <Link key={cat.name} to={cat.link} className="cat-card">
              <img src={cat.image} alt={cat.name} />
              <div className="cat-card-overlay">
                <div className="cat-card-title">{cat.name}</div>
                <div className="cat-card-count">{cat.count}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= EDITORIAL SPLIT (MATCHING SCREENSHOT) ================= */}
      <section className="editorial-split-section">
        <div className="editorial-split-grid">
          <div>
            <span className="split-eyebrow">ENLIGHTEN YOUR HOME</span>
            <h2 className="split-title">
              Luminous Living: Architectural Furniture & Millwork
            </h2>
            <p className="split-description">
              At <strong>GE Trading PLC</strong>, our workshop specializes in custom woodworks, walk-in wardrobes, architectural beds, modular kitchen cabinets, entryway shoe racks, designer sofa & coffee tables, turnkey interior design finishings, and grand dining tables. Every creation is tailored to your space with unyielding structural integrity and natural elegance.
            </p>
            <Link to="/products" className="btn-black-pill">
              Explore All Products →
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

      {/* ================= BESTSELLER SECTION (WITH PICTURES & WITHOUT PRICE) ================= */}
      <section className="bestseller-dark-section">
        <div className="bestseller-container">
          <div className="bestseller-header">
            <div>
              <h2>Featured Commissions</h2>
              <p>Experience our master woodwork pieces — handcrafted to your exact architectural dimensions</p>
            </div>
            <Link to="/products" className="btn-outline-pill-white">
              View All Products
            </Link>
          </div>

          {/* Grid of Bestsellers - WITH PICTURES & WITHOUT PRICE */}
          <div className="bestseller-grid">
            {bestsellers.map((product, idx) => (
              <div key={product.id} className="bestseller-card">
                {idx === 0 && (
                  <span className="bestseller-tag sale">Popular</span>
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

                  {/* Without price: shows bespoke sizing & inquire button */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '10px' }}>
                    <span style={{ fontSize: '0.78rem', color: '#ff6b00', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Bespoke Order
                    </span>
                    <button
                      className="btn-black-pill"
                      style={{ padding: '6px 18px', fontSize: '0.8rem' }}
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

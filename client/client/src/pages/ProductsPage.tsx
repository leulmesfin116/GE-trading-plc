import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, type Product } from '../data/products';

interface ProductsPageProps {
  onOpenQuoteModal: (product?: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Agricultural', 'Construction', 'Industrial & Machinery', 'Consumer Goods'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.grade.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)', minHeight: '80vh', paddingBottom: '70px' }}>
      {/* Header Banner */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid var(--border-light)', padding: '50px 0 40px 0' }}>
        <div className="container">
          <span className="badge badge-orange" style={{ marginBottom: '10px' }}>
            International Trade Catalog
          </span>
          <h1 style={{ fontSize: '2.6rem', marginBottom: '12px' }}>
            Commodities & Product Catalog
          </h1>
          <p style={{ maxWidth: '750px', fontSize: '1.1rem' }}>
            Browse through our portfolio of certified export-grade agricultural goods, heavy industrial equipment, construction steel, and commercial products. All items are backed by strict quality inspection certificates.
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '40px' }}>
        {/* Filters and Search Bar */}
        <div className="product-filters">
          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-input-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by product, grade, origin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.92rem', color: '#64748b' }}>
            Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'}
            {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
            {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
          </p>

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#ff6b00',
                cursor: 'pointer',
                fontSize: '0.88rem',
                fontWeight: '600',
              }}
            >
              Reset Filters ↺
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid-3">
            {filteredProducts.map((product) => (
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
                      <span>Specification / Grade:</span>
                      <strong>{product.grade}</strong>
                    </div>
                    <div className="product-spec-row">
                      <span>Minimum Order (MOQ):</span>
                      <strong>{product.moq}</strong>
                    </div>
                    <div className="product-spec-row">
                      <span>Standard Lead Time:</span>
                      <strong>{product.leadTime}</strong>
                    </div>
                  </div>

                  <div className="product-card-footer">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onOpenQuoteModal(product)}
                      style={{ width: '100%' }}
                    >
                      Request Quotation (CIF / FOB) →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '60px 20px',
              textAlign: 'center',
              border: '1px solid var(--border-light)',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '14px' }}>🔍</div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>No products found</h3>
            <p style={{ color: '#64748b', maxWidth: '450px', margin: '0 auto 20px auto' }}>
              We could not find any products matching your search criteria. You can request a custom sourcing inquiry directly with our trading team.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => onOpenQuoteModal()}
            >
              Request Custom Sourcing / Commodity Inquiry
            </button>
          </div>
        )}

        {/* Custom Commodity Sourcing Banner */}
        <div
          style={{
            marginTop: '60px',
            background: '#ffffff',
            borderRadius: '16px',
            padding: '36px',
            border: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <span className="badge badge-dark" style={{ marginBottom: '8px' }}>
              Bespoke Procurement
            </span>
            <h3 style={{ fontSize: '1.4rem', marginTop: '6px' }}>
              Need a commodity or industrial specification not listed here?
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              GE Trading PLC maintains an extensive partner network across Europe, Asia, and Africa for custom procurement.
            </p>
          </div>
          <button className="btn btn-secondary" onClick={() => onOpenQuoteModal()}>
            Submit Custom Sourcing Request →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

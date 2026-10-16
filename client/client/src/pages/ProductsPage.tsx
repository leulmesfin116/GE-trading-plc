import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, type Product } from '../data/products';

interface ProductsPageProps {
  onOpenQuoteModal: (product?: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'All');
  const [searchQuery, setSearchQuery] = useState<string>(searchParam || '');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [categoryParam, searchParam]);

  const categories = ['All', ...PRODUCT_CATEGORIES];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="catalog-page-wrapper">
      <div className="container">
        {/* Editorial Catalog Header */}
        <div className="catalog-header">
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#78716c', fontWeight: 700 }}>
            GE Trading PLC Portfolio
          </span>
          <h1>Artisanal Products & Custom Woodwork</h1>
          <p style={{ color: '#78716c', fontSize: '1.05rem', marginTop: '10px' }}>
            Explore our custom creations: bespoke woodworks, tailored wardrobes, architectural beds, contemporary kitchen cabinets, entryway shoe racks, luxury sofa & coffee tables, interior design finishings, and handcrafted dining tables.
          </p>
        </div>

        {/* Filter Pills and Search */}
        <div className="catalog-filter-bar">
          <div className="catalog-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`catalog-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-input-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search category, timber, piece..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.92rem', color: '#78716c' }}>
            Showing <strong>{filteredProducts.length}</strong> items {selectedCategory !== 'All' && <span>in <strong>{selectedCategory}</strong></span>}
          </p>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                searchParams.delete('category');
                searchParams.delete('search');
                setSearchParams(searchParams);
              }}
              style={{ background: 'none', border: 'none', color: '#ff6b00', fontWeight: '600', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              Show All Products ↺
            </button>
          )}
        </div>

        {/* Product Cards Grid - WITH PICTURES & WITHOUT PRICE */}
        <div className="grid-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bestseller-card" style={{ border: '1px solid #e7e5e4' }}>
              {product.tag && (
                <span className="bestseller-tag badge-custom">{product.tag}</span>
              )}

              {/* Picture Display */}
              <div className="bestseller-img-box" style={{ height: '260px' }}>
                <img src={product.image} alt={product.name} />
              </div>

              {/* Product Info - NO PRICE */}
              <div className="bestseller-info">
                <span className="bestseller-category">{product.category}</span>
                <h3 className="bestseller-title">{product.name}</h3>
                <p style={{ fontSize: '0.88rem', color: '#78716c', lineHeight: '1.5', marginBottom: '14px' }}>
                  {product.description}
                </p>

                <div style={{ background: '#f5f5f4', padding: '12px 14px', borderRadius: '12px', fontSize: '0.82rem', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div><strong>Material:</strong> {product.material}</div>
                  <div><strong>Dimensions:</strong> {product.dimensions}</div>
                  <div><strong>Fabrication:</strong> {product.leadTime}</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #f5f5f4' }}>
                  <span style={{ fontSize: '0.82rem', color: '#ff6b00', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Custom Commission
                  </span>
                  <button
                    className="btn-black-pill"
                    style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                    onClick={() => onOpenQuoteModal(product)}
                  >
                    Request Quote →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 20px', background: '#ffffff', borderRadius: '20px' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 16px auto', display: 'block' }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <h3>No items found in this collection</h3>
            <p style={{ color: '#78716c', marginTop: '8px' }}>
              We could not find any pieces matching "{searchQuery}". You can request a custom wood design directly from our studio.
            </p>
            <button
              className="btn-black-pill"
              style={{ marginTop: '20px' }}
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

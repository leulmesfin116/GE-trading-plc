import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS_DATA, type Product } from '../data/products';

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

  const categories = ['All', 'Beds', 'Tables', 'Chairs'];

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
            Curated Living Collection
          </span>
          <h1>Artisanal Beds, Tables & Chairs</h1>
          <p style={{ color: '#78716c', fontSize: '1.05rem', marginTop: '10px' }}>
            Discover minimalist wooden architecture, natural upholstery, and sculpted silhouettes designed for modern living by GE Trading PLC.
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

          <div className="search-input-box" style={{ minWidth: '280px' }}>
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search wood, dimensions, pieces..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bestseller-card" style={{ border: '1px solid #e7e5e4' }}>
              {product.tag && (
                <span className="bestseller-tag badge-custom">{product.tag}</span>
              )}

              <div className="bestseller-img-box" style={{ height: '260px' }}>
                <img src={product.image} alt={product.name} />
              </div>

              <div className="bestseller-info">
                <span className="bestseller-category">{product.category}</span>
                <h3 className="bestseller-title">{product.name}</h3>
                <p style={{ fontSize: '0.88rem', color: '#78716c', lineHeight: '1.5', marginBottom: '12px' }}>
                  {product.description}
                </p>

                <div style={{ background: '#f5f5f4', padding: '10px 14px', borderRadius: '10px', fontSize: '0.8rem', marginBottom: '16px' }}>
                  <div><strong>Material:</strong> {product.material}</div>
                  <div><strong>Dimensions:</strong> {product.dimensions}</div>
                  <div><strong>Availability:</strong> {product.leadTime}</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid #f5f5f4' }}>
                  <span className="bestseller-price">{product.price}</span>
                  <button
                    className="btn-black-pill"
                    style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                    onClick={() => onOpenQuoteModal(product)}
                  >
                    Custom Order / Inquire →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 20px', background: '#ffffff', borderRadius: '20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🪑</div>
            <h3>No furniture pieces found</h3>
            <p style={{ color: '#78716c', marginTop: '8px' }}>
              We could not find anything matching "{searchQuery}". Try selecting "All" or submit a custom inquiry.
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

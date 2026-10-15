import React, { useState } from 'react';
import type { Product } from '../data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    destinationPort: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      quantity: '',
      destinationPort: '',
      notes: '',
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 16px auto',
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>
              Quotation Request Received!
            </h3>
            <p style={{ marginBottom: '24px', color: '#475569' }}>
              Thank you, <strong>{formData.name || 'valued partner'}</strong>. Our international trading desk at <strong>GE Trading PLC</strong> will prepare CIF/FOB specifications and get in touch within 24 business hours.
            </p>
            <button className="btn btn-primary" onClick={handleReset}>
              Close & Continue Browsing
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span className="badge badge-orange" style={{ marginBottom: '8px' }}>
                Trade Inquiry Desk
              </span>
              <h3 style={{ fontSize: '1.5rem', marginTop: '6px' }}>
                {product ? `Request Quote: ${product.name}` : 'Request a Trade Quotation'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                {product
                  ? `Category: ${product.category} | MOQ: ${product.moq}`
                  : 'Specify your commodity, volume, and destination requirements for instant quotation.'}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Company / Enterprise *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Atlas Commodities Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label>Business Email *</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="john@atlas.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    placeholder="+251 91 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label>Estimated Quantity *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder={product ? `Min: ${product.moq}` : 'e.g. 50 Metric Tons'}
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Destination Port / City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Djibouti / Mombasa / Dubai"
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Trade Notes & Incoterms (CIF / FOB / EXW)</label>
                <textarea
                  rows={3}
                  className="form-control"
                  placeholder="Specify packaging requirements, target delivery timelines, or specific certification needs..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px' }}
              >
                Submit Quotation Request →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;

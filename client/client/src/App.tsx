import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import type { Product } from './data/products';

// Auto scroll to top on page route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenQuoteModal = (product?: Product) => {
    setSelectedProduct(product || null);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route
            path="/products"
            element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          {/* Fallback route */}
          <Route
            path="*"
            element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
        </Routes>
      </main>

      <Footer />

      {/* Global Quotation Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        product={selectedProduct}
      />
    </BrowserRouter>
  );
}

export default App;

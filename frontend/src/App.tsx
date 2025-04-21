import React, { useEffect, useState } from 'react';
import Carousel from './components/Carousel';
import { Product } from './types/product';
import './styles/header.css'; // 👈 Add this

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://product-listing-api.onrender.com/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading products...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

  return (
    <div>
      <div className="page-title">
        Product List
      </div>


      <Carousel products={products} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { Product } from '../types/product';
import '../styles/ProductCard.css';
import ColorPicker from './ColorPicker';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<'yellow' | 'white' | 'rose'>('yellow');

  const stars = Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;
    return (
      <span key={index}>
        {value <= Math.floor(product.popularityOutOfFive) ? '★' : '☆'}
      </span>
    );
  });

  return (
    <div className="product-card">
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)} USD</p>

        <ColorPicker selectedColor={selectedColor} onChange={setSelectedColor} />

        <div className="stars">
          {stars} <span>{product.popularityOutOfFive}/5</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

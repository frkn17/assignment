import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Product } from '../types/product';
import ProductCard from './ProductCard';
import { useIsMobile } from '../hooks/useIsMobile';

import '../styles/Carousel.css';

const Carousel: React.FC<{ products: Product[] }> = ({ products }) => {
  const isMobile = useIsMobile(480); 

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={isMobile} 
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          480: { slidesPerView: 1.3 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

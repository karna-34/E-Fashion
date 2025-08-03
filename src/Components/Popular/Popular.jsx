import React, { useState } from 'react'
import "./Popular.css"
import data_product from "../Assets/data"
import Item from '../Item/Item'

export default function Popular() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Show 3 items at a time
  const totalPages = Math.ceil(data_product.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const getVisibleItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return data_product.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className='popular'>
        <h1>Populars For Womens</h1>
        <hr/>
        <div className='popular-slider-container'>
            <button 
                className='slider-btn prev-btn' 
                onClick={prevSlide}
                aria-label="Previous items"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            
            <div className='Popular-item'>
                {getVisibleItems().map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                })}
            </div>
            
            <button 
                className='slider-btn next-btn' 
                onClick={nextSlide}
                aria-label="Next items"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
        
        <div className='slider-dots'>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    </div>
  )
}

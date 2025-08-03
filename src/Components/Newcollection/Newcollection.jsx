import React, { useState } from 'react'
import "./Newcollection.css"
import new_collections from '../Assets/new_collections'
import Item from "../Item/Item"

export default function Newcollection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Show 3 items at a time
  const totalPages = Math.ceil(new_collections.length / itemsPerPage);

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
    return new_collections.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className='new-collection'>
      <h1>New Collection</h1>
      <hr/>
      <div className='new-collection-slider-container'>
        <button 
          className='slider-btn prev-btn' 
          onClick={prevSlide}
          aria-label="Previous items"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className='collection'>
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

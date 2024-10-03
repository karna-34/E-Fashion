import React from 'react'
import "./Breedcrum.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"

const Breedcrum = (props) => {
    const {product}=props;
    console.log(product) 
  return (
    <div className='breedcrum'>
      HOME <img src={arrow_icon } alt="" /> Shop <img src={arrow_icon } alt="" /> {product.category} <img src={arrow_icon } alt="" /> {product.name }
    </div>
  )
}
 
export default Breedcrum

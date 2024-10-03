import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Context'
import { useParams } from 'react-router-dom'
import Breedcrum from '../Breedcrum/Breedcrum';
import Productdisplay from '../Productdisplay/Productdisplay';
import Descriptionbox from '../description/Descriptionbox';
import Related from '../related/Related';

export default function Product() {
  const {all_product}=useContext(Shopcontext);
  const {productId} =useParams();
  console.info(productId, all_product)
  const product=all_product.find((e)=>
    e.id=== Number(productId) 
  );
  console.log(product)
  return (
    <div>
      <Breedcrum product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Related/>
      
    </div>
  )
}

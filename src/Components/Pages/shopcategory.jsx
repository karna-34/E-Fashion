import React, { useContext } from 'react'
import "./CSS/Shopcategory.css"
import { Shopcontext } from '../Context/Context'
import dropdown_icon from "../Assets/dropdown_icon.png"
import Item from '../Item/Item';


export default function Shopcategory(props) {

  const { all_product } = useContext(Shopcontext);
  console.log(all_product)

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
        <p><span>1 to 12</span> out of 36 product</p>
        <div className='shopcategory-sort'>
          sort by<img src={dropdown_icon} alt="" />
        </div>
      </div> 
      <div className='shopcategory-products'>
        {all_product.map((item, i) => {
            console.log(item)
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
            } else {
              return null
            }
          })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>

    </div>
  )
}

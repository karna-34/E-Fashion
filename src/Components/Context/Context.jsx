import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";
export const Shopcontext = createContext()

const getdefaultcart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0

  }
  return cart;
}

const Shopcontextprovider = (props) => {

  const [cartitem, setcartitem] = useState(getdefaultcart());


  const addToCart = (itemId) => {
    setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeToCart = (itemId) => {
    setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    console.info(cartitem);

    for (const item in cartitem) {
      console.log(cartitem[item], item);
      if (cartitem[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartitem[item];
      }
    }

    return totalAmount; // Moved outside the loop
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartitem) {

      if (cartitem[item] > 0) {

        totalItem += cartitem[item];
      }
    }
    return totalItem;
  };

  const Contextvalue = {getTotalCartItems, getTotalCartAmount, all_product, cartitem, addToCart, removeToCart };

  return (
    <Shopcontext.Provider value={Contextvalue}>{props.children}</Shopcontext.Provider>)

}
export default Shopcontextprovider;
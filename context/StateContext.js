'use client';
import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();
// FIX JUMPING DURING CHANGE OF QTY WITH MULTIPLE PRODUCTS
export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)

    
    const onAdd = (product) => {

        const indexOfFoundProduct = cartItems.findIndex((item) => item.productid === product.productid)
        
        if(indexOfFoundProduct >= 0) {
            return incQty(product)
        } else {
        product.quantity = 1;
        setCartItems([...cartItems, { ...product }]);
        }

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price );
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } 
// with such manipulation we updating array through setState(rerender triggering) and this exact logic prevents from changing product position in array
    const incQty = (product) => {
        const indexOfFoundProduct = cartItems.findIndex((item) => item.productid === product.productid)
        const dublicatedArray = cartItems.map(a => {return {...a}});
        dublicatedArray[indexOfFoundProduct].quantity = dublicatedArray[indexOfFoundProduct].quantity + 1;
        
        setCartItems(dublicatedArray)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    }

    const decQty = (product) => {
        if(product.quantity === 1){
            return onRemove(product)
            
        }
        const indexOfFoundProduct = cartItems.findIndex((item) => item.productid === product.productid)
        const dublicatedArray = cartItems.map(a => {return {...a}});
        dublicatedArray[indexOfFoundProduct].quantity = dublicatedArray[indexOfFoundProduct].quantity - 1;

        setCartItems(dublicatedArray)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
    }

    const onRemove = (product) => {
        const newCartItems = cartItems.filter((item) => item.productid !== product.productid);

        setCartItems(newCartItems)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
        if(newCartItems.length === 0){
            localStorage.removeItem('items')
            localStorage.removeItem('itemsTotalPrice')
            localStorage.removeItem('itemsTotalQty')
        }
    }
    
    useEffect(() => {
        if(cartItems.length !== 0){
            localStorage.setItem('items', JSON.stringify(cartItems))
            localStorage.setItem('itemsTotalPrice', JSON.stringify(totalPrice))
            localStorage.setItem('itemsTotalQty', JSON.stringify(totalQuantities))
        }
      })
    
      useEffect(() => {
        if(localStorage.getItem('items')){
            const data = localStorage.getItem('items')
            const storageTotalPrice = localStorage.getItem('itemsTotalPrice')
            const storageQty = localStorage.getItem('itemsTotalQty')
        
            setCartItems(JSON.parse(data))
            setTotalPrice(JSON.parse(storageTotalPrice))
            setTotalQuantities(JSON.parse(storageQty))
        }
      }, [])
    
    
    return (
        <Context.Provider
        value={{showCart, setShowCart, onAdd, cartItems, totalPrice, totalQuantities, incQty, decQty}} 
        >
          {children}
        </Context.Provider>
      )
}

export const useStateContext = () => useContext(Context);
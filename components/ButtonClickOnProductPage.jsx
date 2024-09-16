"use client";
import { useStateContext } from "../context/StateContext";

export const ButtonClick =({product})=> {
    
  const {onAdd} = useStateContext();

    return (
      <button className="main-btn-black-bg" style={{width: '100%'}} onClick={() => onAdd(product)}>Add to Cart</button>
    )
  }
import React from 'react'
import { useStateContext } from '../context/StateContext'

const Cart = () => {
    const {setShowCart, cartItems, totalPrice, totalQuantities} = useStateContext();

  return (
    <div className='cart-container'>
        <div className='cart-name'>
            <p>
                Cart
            </p>
            <button onClick={() => setShowCart(false)}>
                <img src='/close-svgrepo-com.svg' height={25} width={25}/>
            </button>
        </div>
        <div className='cart-products'>
            {cartItems.map((product) => {
            return <CartItem product={product} key={product.productid}/>
})}
        </div>
        <div className='checkout'>
            <div className='subtotal'>
                <p>Subtotal</p>
                <p>${totalPrice}</p>
            </div>
            <p>Shipping costs are calculated uring checkout</p>
            <button className='main-btn-black-bg' onClick={()=>console.log(cartItems)}>Checkout</button>
        </div>
    </div>
  )
}

const CartItem = ({product}) => {

    const {name, color, quantity, price} = product;
    const {incQty, decQty} = useStateContext();


    return (
        <div className='cart-item'>
            <img src={product.images[0].url} />
            <div className='name'>
                <p>{name}</p>
                <p>{color ? color : 'As shown'}</p>
                <div className='qty-change'>
                    <button onClick={() => decQty(product)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => incQty(product)}>+</button>
                </div>
            </div>
            <div className='price'>
                <p>${price*quantity}</p>
            </div>
        </div>
    )
}

export default Cart


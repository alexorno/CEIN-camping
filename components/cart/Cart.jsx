import React, {useEffect, useState} from 'react'
import { useStateContext } from '../../context/StateContext';
import { loadStripe } from "@stripe/stripe-js";
import updateSaleRecordSql from '../../utils/updateSaleRecordSql';
import styles from "./cart.module.css";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
/* disable scroll */
const Cart = () => {
    const {setShowCart, cartItems, totalPrice, totalQuantities} = useStateContext();
    const [success, setSuccess] = useState(0);
// fix salenumber update
    useEffect(() => {
        async function fetchData() {
          // You can await here
          await updateSaleRecordSql(cartItems)
          // ...
        }
        fetchData();
      }, [success]);

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
          setSuccess(success + 1);
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
      }, []);


      const handleSubmit = async (e) => {
        // e.preventDefault();
    
        const response = await fetch('/api/checkout_sessions', {
            method: "POST",
            mode:  'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Referrer-Policy': 'strict-origin',
            },
            body: (JSON.stringify(cartItems)),
        }).then((res) => {
            return res.json()
        }).then((res) => {
            // manual redirect
            window.location.href = res;
        })
      }
    

    
      

  return (
    <div className={styles.container}>
        <div className={styles.name}>
            <p>
                Cart
            </p>
            <button onClick={() => setShowCart(false)}>
                <img src='/close-svgrepo-com.svg' height={25} width={25}/>
            </button>
        </div>
        <div className={styles.products}>
            {cartItems.map((product) => {
            return <CartItem product={product} key={product.productid}/>
})}
        </div>
        <div className={styles.checkout}>
            <div className={styles.subtotal}>
                <p>Subtotal</p>
                <p>${totalPrice}</p>
            </div>
            <p>Shipping costs are calculated uring checkout</p>
            <button className='main-btn-black-bg' onClick={(e) => handleSubmit(e)}>Checkout</button>
        </div>
    </div>
  )
}

const CartItem = ({product}) => {

    const {name, color, quantity, price, images} = product;
    const {incQty, decQty} = useStateContext();


    return (
        <div className={styles.item}>
            <img src={images.length>0 ? images[0].url : '/no-image-available.png'} />
            <div className={styles.itemName}>
                <p>{name}</p>
                <p>{color ? color : 'As shown'}</p>
                <div className={styles.qtyChange}>
                    <button onClick={() => decQty(product)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => incQty(product)}>+</button>
                </div>
            </div>
            <div className={styles.price}>
                <p>${parseFloat(+price * +quantity).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Cart


"use client"
import React, {useState, useEffect} from 'react';
import { Product } from './Product';

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/api/getProducts')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
            }
        )
    }, [])


    return (
        <>
            <div className='products'>
                <div className='main-product'>
                    <h6 style={{fontSize: '1.5rem', marginTop: '10px'}}>New In</h6>
                    <p>Latest products from CEIN</p>
                    <button className='main-black-btn'>Shop All</button>
                </div>
                {products.slice(0,7).map((product) => {
                    return <Product product={product} key={product.productid}/>
                })
                }
            </div>
            <div className='products'>
            <div className='main-product'>
                <h6 style={{fontSize: '1.5rem', marginTop: '10px'}}>Best Seller</h6>
                <p>Gear up for your great outdoor</p>
                <button className='main-black-btn'>Shop All</button>
            </div>
            {products.slice(0,7).map((product) => {
                return <Product product={product} key={product.productid}/>
            })
            }
            </div>
        </>
    )
}

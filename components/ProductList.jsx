"use client"
import React, {useState, useEffect} from 'react';
import { Product } from './Product';
import Link from "next/link";
import getSortedProducts from '../utils/getSortedProducts';

export const ProductList = () => {
    const [popularProducts, setPopularProducts] = useState([])
    const [newProducts, setNewProducts] = useState([])

// getting new Products
    useEffect(() => {
        async function fetchData() {
            setNewProducts(await getSortedProducts('descDate'))
            setPopularProducts(await getSortedProducts('descPopularity'))
        }
        fetchData()
      }, []); 
    
    return (
        <>
            <div className='products'>
                <div className='main-product'>
                    <h6 style={{fontSize: '1.5rem', marginTop: '10px'}}>New In</h6>
                    <p>Latest products from CEIN</p>
                    <Link href={{pathname: '/products', query: {sort: 'descDate'}}}>
                        <button className='main-black-btn'>
                            Shop All
                        </button>
                    </Link>
                </div>
                {newProducts.slice(0,7).map((product) => {
                    return <Product product={product} key={product.productid}/>
                })
                }
            </div>
            <div className='products'>
            <div className='main-product'>
                <h6 style={{fontSize: '1.5rem', marginTop: '10px'}}>Best Seller</h6>
                <p>Gear up for your great outdoor</p>
                <Link href={{pathname: `/products`, query: {sort: 'descPopularity'}}}>
                <button className='main-black-btn'>
                    Shop All
                </button>
                </Link>
            </div>
            {popularProducts.slice(0,7).map((product) => {
                return <Product product={product} key={product.productid}/>
            })
            }
            </div>
        </>
    )
}

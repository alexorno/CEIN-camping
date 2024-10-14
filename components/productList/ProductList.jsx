"use client"
import React, {useState, useEffect} from 'react';
import { Product } from '../Product';
import Link from "next/link";
import getSortedProducts from '../../utils/getSortedProducts';
import styles from './productList.module.css'

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
            <div className={styles.products}>
                <div className='main-product'>
                    <h6 style={{fontSize: '1.5rem', margin: '5%'}}>New In</h6>
                    <p style={{ margin: '2% 5%'}}>Latest products from CEIN</p>
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
            <div className={styles.products}>
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

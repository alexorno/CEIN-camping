'use client'
import Link from 'next/link';
import React from 'react'

export const Product = ({product}) => {
    const {productid, name, description, price, images} = product;


  return (
    <div className='main-product'>
        <Link href={`/products/${productid}`}>
            {/* <img src={product.images[0].url} /> */}
            { images ? <img src={images[0].url} /> : 'no image'}
            <div className='category-price'>
                <h6>category</h6>
                <p> {price}$</p>
            </div>
            <h6>{name}</h6>
        </Link>
    </div>
  )
}

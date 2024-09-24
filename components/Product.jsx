'use client'
import Link from 'next/link';
import React from 'react'

export const Product = ({product}) => {
    const {productid, name, description, price, images, category_name} = product;

  return (
    <div className='main-product'>
        <Link href={`/products/${productid}`}>
            {/* <img src={product.images[0].url} /> */}
            { images.length>0 ? <img src={images[0].url} /> : <img src='/no-image-available.png' alt='no image available' />}
            <div className='category-price'>
                <h6>{category_name}</h6>
                <p> {price}$</p>
            </div>
            <h6>{name}</h6>
        </Link>
    </div>
  )
}

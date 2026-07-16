'use client'
import Link from 'next/link';
import React from 'react'

export const Product = ({product}) => {
    if (!product) {
        return null;
    }

    const {productid, name, price, images = [], category_name} = product;
    const imageUrl = Array.isArray(images) && images.length > 0 && images[0]?.url
        ? images[0].url
        : '/no-image-available.png';

  return (
    <div className='main-product'>
        <Link href={`/products/${productid}`}>
            <img src={imageUrl} alt={name || 'Product image'} />
            <div className='category-price'>
                <h6>{category_name}</h6>
                <p> {price}$</p>
            </div>
            <h6>{name}</h6>
        </Link>
    </div>
  )
}

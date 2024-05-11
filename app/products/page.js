'use client'
import React, {useState, useEffect} from 'react';
import { Product } from '../../../components/Productuct';
// import 


const index = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1/api/getProducts')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
            }
        )
    }, [])


    return (
        <>
        <div className='category-title'>
            <p>Shop Collection</p>
            <div className='category-name'>
                <img src='/arrow-right.svg'/>
                <h1>TENT</h1>
            </div>
        </div>
            <div className='products'>
                {products.map((product) => {
                    return <Product product={product} key={product.productid}/>
                })
                }
            </div>
        </>
    )
}

export default index
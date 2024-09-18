'use client'
import React, {useState, useEffect} from 'react';
import { Product } from '../../../components/Product';
import { sql } from '@vercel/postgres';
import getSortedProducts from '../../../utils/getSortedProducts';
import {FilterForProducts} from '../../../components/FilterForProducts.jsx';

const getProducts = async () => {
   return (await getSortedProducts('ascDate'))
}

const index = () => {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true)

    // getting products with filter or not
    useEffect(() => {
        async function fetchData() {
            if(filter.length === 0){
                const data = await getProducts()
                    .then((res) => setProducts(res));
                    setLoading(false)
            }else{
                const data = await getSortedProducts(filter)
                    .then((res) => setProducts(res));
                    setLoading(false)
            }
        }
        fetchData();
      }, [filter]); 


    return (
    <>
        <div className='category-title'>
            <p>Shop Collection</p>
            <div className='category-name'>
                <img src='/arrow-right.svg'/>
                <h1>All products</h1>
            </div>
        </div>
        <FilterForProducts filter={filter} setFilter={setFilter}/>
        {loading ? <img src='/loading.gif' width={100} style={{margin:'auto'}} /> : ''}
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
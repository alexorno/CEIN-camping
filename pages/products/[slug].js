"use client"
import React from 'react'


export default function Page({ product }) {

    return (
        <>
        {product.name}
        </>
        )
  }

export const getStaticPaths = async () => {
    // Get the paths we want to pre-render based on products
    const products = await fetch('http://localhost:3000/api/getProducts')
        .then((res) => res.json())
        .then((data) => data);
        
    const paths = products.map(product => ({
      params: { slug: `${product.productid}` }
    }));
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false};
  };
  
  export async function getStaticProps({ params }) {

    const product = await fetch('http://localhost:3000/api/getProductById', {
        method: "POST",
        body: JSON.stringify({id: params.slug}),
        })
        .then((res) => res.json())
        .then((data) =>  {return data}
        )
    return { props: { product } }
  }
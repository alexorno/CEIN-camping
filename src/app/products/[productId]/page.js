

export async function generateStaticParams() {
    const products = await fetch('http://localhost:3000/api/getProducts').then((res) => res.json())

   return products.map((product) => ({
    id: (product.productid).toString(),
  }))

  }

  export default async function Page({ params }) {
    const product = await getProductInfo(params);

    return (
        <>
        {product.productid}
        <br />
        {product.name}
        </>
        )
  }

  async function getProductInfo(params){
    const product = await fetch('http://localhost:3000/api/getProductById', {
        method: "POST",
        body: JSON.stringify({id: params.productId}),
        })
        .then((res) => res.json())
        .then((data) => data)
    
    return product;
  }
import { Product } from "../../../../components/Product";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const categoryId = await fetch('http://localhost:3000/api/getCategories').then((res) => res.json())

   return categoryId.map((category) => ({
    id: (category.id).toString(),
  }))

  }
   
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default async function Page({ params }) {
    const products = await getProductsWithinCategory(params);

    if(products === 'no data'){
        return "Sorry, but there's no products within this category"
    }

    return (
        <>
        <div className="products">
            {products.map((product) => {
            return (<Product product={product} key={product.productid}/>)
        })}
        </div>
        

        </>
        )
  }

  async function getProductsWithinCategory(params) {
    const products = await fetch('http://localhost:3000/api/getProductsWithinCategory', {
        method: "POST",
        body: JSON.stringify({id: params.id}),
        })
        .then((res) => res.json())
        .then((data) => data)

    return products;
  }
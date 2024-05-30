"use server"
import { sql } from "@vercel/postgres";
import getProducts from "../../../../utils/getProducts";
import getProductById from "../../../../utils/getProductInfoById";


export async function generateStaticParams() {
  const products = await getProducts();

   return products.map((product) => ({
    id: (product.productid).toString(),
  }))

  }

  export default async function Page({ params }) {
    const product = await getProductById(params.productId);
    return (
        <>
        {params.productId}
        <br />
        {product.name}
        </>
        )
  }


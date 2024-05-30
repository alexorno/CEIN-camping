import { Product } from "../../../../components/Product";
import getCategories from "../../../../utils/getCategories";
import getProductsWithinCategory from "../../../../utils/getProductsWithinCategory";

export const dynamic = 'force-dynamic';
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const categoryId = await getCategories();

   return categoryId.map((category) => ({
    id: (category.id).toString(),
  }))

  }
    
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default async function Page({ params }) {
    const products = await getProductsWithinCategory(params.id);

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
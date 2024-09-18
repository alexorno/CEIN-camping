import { sql } from "@vercel/postgres";
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
    let loading = true;
    const products = await getProductsWithinCategory(params.id);
    const categoryNameQuery = await sql `SELECT name FROM categories WHERE id=${params.id}`
    const categoryName = categoryNameQuery.rows[0].name;
    if(products){
        loading = false;
    }
    if(products === 'no data'){
        loading = false;
        return "Sorry, but there's no products within this category"
    }

    return (
        <>
        <div className='category-title'>
            <p>Shop Collection</p>
            <div className='category-name'>
                <img src='/arrow-right.svg'/>
                <h1>{categoryName}</h1>
            </div>
        </div>
        <div className="products">
            {loading ? <img src='/loading.gif' width={100} style={{margin:'auto'}} /> : ''}
            {products.map((product) => {
            return (<Product product={product} key={product.productid}/>)
        })}
        </div>
        

        </>
        )
  }
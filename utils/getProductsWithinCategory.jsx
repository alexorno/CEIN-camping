'use server'

import { sql } from "@vercel/postgres";

export default async function getProductsWithinCategory(id){
    const products = await sql`SELECT * from products WHERE categoryid=${id}`;
    if(products.rows.length <= 1){
        return 'no data';
    }
    return products.rows;
}
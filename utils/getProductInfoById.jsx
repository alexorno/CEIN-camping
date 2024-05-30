'use server'

import { sql } from "@vercel/postgres";

export default async function getProductById(id){
    const product = await sql`SELECT * from products WHERE productId=${id}`;
    return product.rows[0];
}
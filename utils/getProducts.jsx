'use server'

import { sql } from "@vercel/postgres";

export default async function getProducts(){
    const products = await sql`select * from products`;
    return products.rows;
}
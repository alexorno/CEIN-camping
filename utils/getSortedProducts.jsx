'use server'

import { sql } from "@vercel/postgres";

export default async function getSortedProducts(sortType){
    var products = '';
    switch(sortType){
        case 'ascDate':
            products = await sql`select * from products ORDER BY created_at ASC`;
            break;
        case 'descDate': 
            products = await sql`select * from products ORDER BY created_at DESC`;
            break;
        case 'ascPrice':
            products = await sql`select * from products ORDER BY price ASC`;
            break;
        case 'descPrice':
            products = await sql`select * from products ORDER BY price DESC`;
            break;
        case 'descPopularity':
            products = await sql`select * from products ORDER BY sale_number DESC`;
            break;
        case 'ascPopularity':
            products = await sql`select * from products ORDER BY price ASC`;
            break;
        default:
            products = await sql `SELECT * FROM products`;
    }
    return products.rows;
}
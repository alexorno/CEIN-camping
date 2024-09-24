'use server'

import { sql } from "@vercel/postgres";

export default async function getColors(){
    const colors = await sql`select * from colors`;
    return colors.rows;
}

// UPDATE products
// SET colorhex=c.colorhex, 
// color_name=c.name
// FROM colors c
// WHERE color_id=c.id

// UPDATE products
// SET color_name = (SELECT name FROM colors WHERE colors.id = products.color_id),
// colorhex = (SELECT colorhex FROM colors WHERE colors.id = products.color_id)
// WHERE products.color_id IN (SELECT id FROM colors)
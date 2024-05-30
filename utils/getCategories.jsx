'use server'

import { sql } from "@vercel/postgres";

export default async function getCategories(){
    const categories = await sql`select * from categories`;
    return categories.rows;
}
'use server'

import { sql } from "@vercel/postgres";

export default async function updateSaleRecordSql(req, res){

    req.map(async (item) => {
        const update = await sql `UPDATE products SET sale_number=sale_number+${item.quantity} WHERE productid=${item.productid}`;
    })

}
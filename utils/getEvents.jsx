'use server'

import { sql } from "@vercel/postgres";

export default async function getEvents(req, res){
    const event = await sql `SELECT * FROM events`;
    console.log(event.rows)
    return event.rows;
}
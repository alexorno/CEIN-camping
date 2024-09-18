'use server'

import { sql } from "@vercel/postgres";

export default async function getEvents(req, res){
    const event = await sql `SELECT * FROM events`;
    return event.rows;
}
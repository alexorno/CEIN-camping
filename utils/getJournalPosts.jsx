'use server'

import { sql } from "@vercel/postgres";

export default async function getJournalPosts(limit, offset){
    const journal = await sql `SELECT * FROM journal_posts LIMIT ${limit} OFFSET ${offset}`;
    return journal.rows;
}
'use server'

import { sql } from "@vercel/postgres";

export default async function getJournalPostById(id){
    const post = await sql`SELECT * from journal_posts WHERE id=${id}`;
    return post.rows[0];
}
'use server'

import { sql } from "@vercel/postgres";

export default async function getJournalPostByTag(tag, limit, offset, excludedId){
    const preparedTags = tag.replaceAll(',', '|').replaceAll(' ', '');
    if(excludedId){
        const post = await sql`SELECT * FROM journal_posts WHERE tags ~* ${preparedTags} AND id != ${excludedId} LIMIT ${limit} OFFSET ${offset}`;
        return post.rows;
    }
    
    const post = await sql`SELECT * FROM journal_posts WHERE tags ~* ${preparedTags} LIMIT ${limit} OFFSET ${offset}`;
    return post.rows;
}
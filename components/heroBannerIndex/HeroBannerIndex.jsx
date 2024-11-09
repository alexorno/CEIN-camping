"use client"
import React from "react";
import { useState, useEffect } from "react";
import styles from "./heroBannerIndex.module.css";
import {FirstPost} from "../../src/app/journal/page";
import getJournalPosts from "../../utils/getJournalPosts";

  

export const HeroBannerIndex = () => {    
    const [journalPost, setJournalPost] = useState([])
    // const journalPost = getJournalPosts(1);
    useEffect(() => {
      async function fetch(){
        setJournalPost(await getJournalPosts(1,4))
      }
    fetch()
    }, [])
    return (
        <>
            <div className="main-container">
                <div className={styles.top}>
                    <h1>Gear up for Great Outdoors<span>&#174;</span></h1>
                    <p>Premium Camping Gear </p>
                </div>
            </div>
            {journalPost.length!=0 ? <FirstPost post={journalPost[0]} /> : ''}
        </>
    )
}
"use client"
import React from "react";
import { useState, useEffect } from "react";
import styles from "./heroBanner.module.css";


  

export const HeroBanner = () => {    

    return (
        <>
            <div className="main-container">
                <div className={styles.top}>
                    <h1>Gear up for Great Outdoors<span>&#174;</span></h1>
                    <p>Premium Camping Gear </p>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.text}>
                        <div>
                            <div className={styles.originDate}>
                                <p>Journal</p>
                                <p>2023.2.21</p>
                            </div>
                            <h3>
                                The practical bonfire stand.
                            </h3>
                        </div>
                        <div>
                            <p className={styles.description}>
                                CEIN has released yet another playful bonfire stand.
                                Its name is "Ringwo Moyase".As you can see, this bonfire stand is modeled after the ring, a stage familiar to boxing and professional wrestling.
                            </p>
                                <button>
                                    <img src="/link-button.svg" />
                                </button>
                        </div>
                    </div>

                    <div className={styles.image}>
                        <img src="/hero-first.png">
                        </img>
                    </div>
                </div>
            </div>
        </>
    )
}
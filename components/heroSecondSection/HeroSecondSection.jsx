import React from "react";
import { Product } from "../Product";
import { sql } from "@vercel/postgres";
import getEvents from "../../utils/getEvents";
import styles from "./heroSecondSection.module.css"

export const HeroSecondSection = async() => {
    const popularItem = await sql`select * from products ORDER BY sale_number DESC LIMIT 1`;
    const events = await getEvents();
    const {title, description, images } = events[0]
    return(
        <div className={styles.secondSection}>
             <div className={styles.ctaImage}>
                <div className={styles.container}>
                    <h4>
                        The Eco Camping Solution
                    </h4>
                    <p>
                        There is no waste, but there is a lot of consideration. “Base and Packana” is a large shelter that is spacious, light, easy to set up, and cost-effective.
                    </p>
                    <button className="main-btn">Read More</button>
                </div>
             </div>
             <div className={styles.content}>
                <div className={styles.post}>
                    <p>Journal</p>
                    <img src="/second-journal.png"/>
                    <div className={styles.text}>
                        <h6>Introducing the All-New Adventure Dome Tent</h6>
                        <p>Your Ultimate Shelter for Outdoor Escapades! Experience easy setup, superior durability, and ample space, ensuring comfort and security wherever your adventures take you. Get ready to elevate your camping experience with our premium tent!</p>
                    </div>
                </div>

                <div className={styles.post}>
                    <p>Event</p>
                    <img src={images[0].url}/>
                    <div className={styles.text}>
                        <h6>{title}</h6>
                        <p>{description}</p>
                    </div>
                </div>

                <div className={styles.feature}>
                    <p>Feature</p>
                    <Product product={popularItem.rows[0]} />
                </div>
             </div>
        </div>  
    )
}
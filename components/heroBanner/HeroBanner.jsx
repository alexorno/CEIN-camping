import React from 'react';
import styles from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <div className={styles.events}>
        <p className={styles.title}>
            Gear up for Great Outdoors®
        </p>
        <p className={styles.description}>
            Premium Camping Gear
        </p>
        <img src='https://kvahiabqmr5ceih5.public.blob.vercel-storage.com/29318807325_a43308ffcc_k-X5HlbvmmfKVx2gNWqzoh4ew9OO1Zsa.jpg' />
    </div>
  )
}

export default HeroBanner
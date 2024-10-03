import Link from 'next/link'
import React from 'react';
import styles from './heroBannerShop.module.css'

export const HeroBannerShop = () => {
  return (
    <div className={styles.shop}>
        <div className={styles.container}>
            <h2 className={styles.title}>food collaboration →this fall</h2>
            <p className={styles.description}>CEIN first food collaboration product will be released this fall.By collaborating with K&K, a canned food brand known for its canned goods and canned beef, CEIN collaboration products have been added to K&K's series, a lineup specializing in outdoor activities.</p>
            <Link href={`/products`}>
              <button className='main-btn'>
                  Shop Now
              </button>
            </Link>
        </div>
    </div>
  )
}

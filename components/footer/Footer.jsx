import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className='main-container'>
            <div className={styles.footerAddress}>
                <img src='/Logo.svg' />
                <p className={styles.address}>
                    52619 Spinka Course, Dannyfor, PL 28832-1229
                </p>
                <p className={styles.scheduleNum}>
                    OPEN 11:00 -19:00<br/>
                    TEL +1(789)123-5678
                </p>
                <div className={styles.socialMedia}>
                    <a href='https://www.facebook.com'>
                        <img src='/5305153_fb_facebook_facebook logo_icon.svg' />
                    </a>
                    <a href='https://www.twitter.com'>
                        <img src='/5305170_bird_social media_social network_tweet_twitter_icon.svg' />
                    </a>
                    <a href='https://www.instagram.com'>
                        <img src='/5335781_camera_instagram_social media_instagram logo_icon.svg' />
                    </a>
                </div>
            </div>
            <div className={styles.navigation}>
                <h6>Online Store</h6>
                <Link href={'/'}>
                    Products
                </Link>
                <Link href={'/'}>
                    Orders
                </Link>
                <Link href={'/'}>
                    Payment
                </Link>
                <Link href={'/'}>
                    Delivery
                </Link>
                <Link href={'/'}>
                    Point Service
                </Link>
                <Link href={'/'}>
                    Returns and Exchanges
                </Link>
                <Link href={'/'}>
                    Inquiries
                </Link>
                <Link href={'/'}>
                    Terms of Service
                </Link>
                <Link href={'/'}>
                    Privacy Policy
                </Link>
            </div>
            <div className={styles.footerSupport}>
                <h6>Customer Service</h6>
                <p>
                    The staff at the stores that carry the products will be happy to discuss the products you are interested in online. Use video calls or messages.
                    <br />
                    Add the account as a friend and send message saying "I would like to receive online service"
                </p>
                <button className='main-black-btn'>
                    <a href='https://www.whatsapp.com'>
                    Contact Us    
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import styles from './journalPostVertical.module.css';
import Link from 'next/link';

const JournalPostVertical = ({post}) => {
const {images, title, subtitle, id} = post;

  return (
    <div className={styles.container}>
        <div className={styles.category}>
            <p>
                Journal
            </p>
        </div>
        <div className={styles.image}>
            <img src={images.length > 1 ? images[0].url : 'https://kvahiabqmr5ceih5.public.blob.vercel-storage.com/nature-landscape-nature-night-c9d1f081ac901fb80f20762c1e9c2c07%20Medium-CnrMfaygNU2oQG1SxyVvwUnDxN5X3h.jpeg'}/>
        </div>
        <div className={styles.title}>
            <h6>
                {title}
            </h6>
        </div>
        <div className={styles.subtitle}>
            <p>
                {subtitle}
            </p>
        </div>
        <div className={styles.link}>
            <Link href={'/journal/'+id} >
                <img src='/link-button.svg' alt='link-button' width={56} height={56}/>
            </Link>
        </div>
    </div>
  )
}

export default JournalPostVertical
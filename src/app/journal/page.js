"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import styles from './journal.module.css'

const page = () => {
  const [filter, setFilter] = useState('feature')

  const handleRadioOption = (e) => {
    setFilter(e.target.value)
  }
// make table with different posts 
  return (
    <div>
      <HeroBannerJournal title={'Under the stars → this fall'} description={'Step into the nocturnal realm with our latest camping blog post, where we uncover the enchanting experience of camping under the night sky. From, stargazing tips to embracing the tranquility of nature after dark, join us as we illuminate the magic of outdoor nocturnal adventures. Get ready to discover the allure of camping beneath a blanket of stars'}/>
      <div className={styles.header + ' main-container'}>
        <p>NEWS & EVENTS</p>
        <h1>→ OUR JOURNAL</h1>
        <div className={styles.categories}>
          <input defaultChecked type="radio" name="filter" id="feature" value={'feature'} onClick={(e)=>handleRadioOption(e)}/>
          <label htmlFor='feature' className='main-black-btn'>Feature</label>

          <input type="radio" name="filter" id="information" value={'information'}  onClick={(e)=>handleRadioOption(e)}/>
          <label htmlFor='information' className='main-black-btn'>Information</label>

          <input type="radio" name="filter" id="lifestyle" value={'lifestyle'} onClick={(e)=>handleRadioOption(e)}/>
          <label htmlFor='lifestyle' className='main-black-btn'>Life Style</label>
        </div>
      </div>

      <div className={styles.firstPost}>
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
  )
}


const HeroBannerJournal = ({title, description, imageURL}) => {
  return (
  <div className={styles.main}>
    <div className={styles.container}>
        <p className={styles.title}>
            {title}
        </p>
        <p className={styles.description}>
            {description}
        </p>
        <Link href={'/products'}>
          <button className='main-btn'>Shop Now</button>
        </Link>
    </div>
    <img className={styles.bgImage} src='/nature-landscape-nature-night-c9d1f081ac901fb80f20762c1e9c2c07 Medium.jpeg' />
  </div>
  )
}

export default page
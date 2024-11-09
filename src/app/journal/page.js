"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import styles from './journal.module.css'
import { sql } from '@vercel/postgres';
import getJournalPostById from '../../../utils/getJournalPostById';
import getJournalPostByTag from '../../../utils/getJournalPostByTag';
import { useEffect } from 'react';
import JournalPostVertical from '../../../components/JournalPostVertical/JournalPostVertical';

const page = () => {
  const [filter, setFilter] = useState('feature');
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([]);
  const [isMobile, setIsMobile] = useState()

  useEffect(() => {
    setIsMobile(global?.window && (window.innerWidth > 768))
  },[])

  const handleRadioOption = (e) => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const data = await getJournalPostByTag(filter)
      .then((res) => {
        setPosts(res);
        setLoading(false)
      })
      .catch(error => console.log(error));
    }
    fetchData(); 
  }, [filter]); 

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

          <input type="radio" name="filter" id="new" value={'new'}  onClick={(e)=>handleRadioOption(e)}/>
          <label htmlFor='new' className='main-black-btn'>New</label>

          <input type="radio" name="filter" id="info" value={'info'} onClick={(e)=>handleRadioOption(e)}/>
          <label htmlFor='info' className='main-black-btn'>Information</label>
        </div>
      </div>
      {/* 1if loading,2 check if posts not empty, 3 viewportwidth>768 show vertical post */}
      {loading ? <img src='/loading.gif' alt='loading' width={50} height={50} style={{margin: 'auto'}}/> : (posts.length>0 ? (isMobile ? <FirstPost post={posts[0]}/> : <JournalPostVertical post={posts[0]}  /> ) : 'No posts right now with such tag') }
      
      <div style={{display: (isMobile ? 'flex' : 'block')}}>
        {loading && posts.length>1 ? '' : 
        posts.slice(1).map(post => <JournalPostVertical post={post} key={post.id}/>)}
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
    <img className={styles.bgImage} src={imageURL || '/nature-landscape-nature-night-c9d1f081ac901fb80f20762c1e9c2c07 Medium.jpeg'} />
  </div>
  )
}


export const FirstPost = ({post}) => {
  const {title, subtitle, id, images} = post;

  return (
      <div className={styles.firstPost}>
        <div className={styles.text}>
            <div>
                <div className={styles.originDate}>
                    <p>Journal</p>
                    {post.updated_at.toDateString()}
                </div>
                <h3>
                    {title}
                </h3>
            </div>
            <div>
                <p className={styles.description}>
                  {subtitle}
                </p>
                <Link href={'/journal/'+id}>
                  <button>
                      <img src="/link-button.svg" alt='link-button'/>
                  </button>
                </Link>
            </div>
        </div>

        <div className={styles.image}>
            <img src={images[0].url} />
        </div>
      </div>
  )
}

export default page
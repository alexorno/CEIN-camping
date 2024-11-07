import JournalPostVertical from "../../../../components/JournalPostVertical/JournalPostVertical";
import getJournalPostById from "../../../../utils/getJournalPostById";
import getJournalPostByTag from "../../../../utils/getJournalPostByTag";
import getJournalPosts from "../../../../utils/getJournalPosts";
import styles from "./journalPost.module.css";
import Link from "next/link";


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const postId = await getJournalPosts();

   return postId.map((post) => ({
    id: (post.id).toString(),
  }))

  }
    
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default async function Page({ params }) {
    const post = await getJournalPostById(params.id)

    const {id, title, subtitle, content, images,product_title,product_url, updated_at, tags} = post;
    let recomendations = await getJournalPostByTag(tags, 3, 0, id)
    console.log(recomendations)
    if(recomendations.length===0){
      console.log('notning')
      recomendations = await getJournalPosts(3)
    }
    return (
        <>
          <div className={"main-container" + ' ' + styles.main}>
            <div className={styles.heroBanner}>
              <img src={images[0].url} alt="banner-photo" />
              <div className={styles.shareBar}>
                <p>
                  Journal
                </p>
                <div className={styles.shareButtons}>
                  <Link href={'/'}>
                    <button>Share</button>
                  </Link>
                  <Link href={'/'}>
                    <button>
                      <img src="/5305153_fb_facebook_facebook logo_icon.svg" alt="facebook-icon"/>
                    </button>
                  </Link>
                  <Link href={'/'}>
                    <button>
                      <img src="/5305170_bird_social media_social network_tweet_twitter_icon.svg" alt="twitter-icon"/>
                    </button>
                  </Link>
                </div>
              </div>
              <div className={styles.heroBannerContent}>
                <h1>
                  {title}
                </h1>
                <p>
                  {subtitle}
                </p>
                <p>
                  {updated_at.toDateString()}
                </p>
              </div>
            </div>
            <div className={styles.content}>

          {/* html text + images */}
            </div>
          </div>
          <div className={styles.recomendations}>
            {recomendations.map((data) => 
              <JournalPostVertical post={data} key={post.id}/>
            )}
          </div>
        </>
        )
  }
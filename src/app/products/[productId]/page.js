"use server"
import { sql } from "@vercel/postgres";
import getSortedProducts from "../../../../utils/getProducts";
import getProductById from "../../../../utils/getProductInfoById";
import Gallery from '../../../../utils/Gallery.jsx'
import { ButtonClick } from "../../../../components/ButtonClickOnProductPage";
import styles from "./productId.module.css";

export async function generateStaticParams() {
  const products = await getSortedProducts();

   return products.map((product) => ({
    id: (product.productid).toString(),
  }))

  }

  export default async function Page({ params }) {
    const product = await getProductById(params.productId);

    // preparing array for gallery
    const images = []
    if(product.images.length > 0){
        product.images.map((image) => {
          images.push({original: image.url})
      })
    }else{
      images.push({
        original: "/no-image-available.png"
      })
    }

    const lastThreeImages = () => {

      if(images.length > 3){
        return [<img src={images[images.length-1].original} />,
                <img src={images[images.length-2].original} />,
                <img src={images[images.length-3].original} />]
      }else{
        return [<img src={images[0].original} />,
                <img src={images[0].original} />,
                <img src={images[0].original} />]
      }
    }

    
    
    return (
      <>
        <div className={styles.page}>
          <div className={styles.photos}>
            <Gallery images={images}/>
          </div>
          <div className={styles.info}>
            <h1>
              {product.name}
            </h1>
            <div className={styles.price}>
              <p>
              ${product.price}
              </p>
              <p>
                {/* <img src="/heart-svgrepo-com.svg" style={{display: 'inline', height: '1em'}}/> Wishlist */}
              </p>
            </div>
            <div className={styles.color}>
              <p>Color:</p>
              {product.color || 'As shown'}
            </div>
            <ButtonClick product={product}/>
            <div className={styles.payments}>
              <img src="/icons8-apple-pay.svg" alt="payment-icon"/>
              <img src="/icons8-google-pay.svg" alt="payment-icon"/>
              <img src="/icons8-mastercard.svg" alt="payment-icon"/>
              <img src="/icons8-visa.svg" alt="payment-icon"/>
              <img src="/icons8-paypal.svg" alt="payment-icon"/>
            </div>
          </div>
        </div>

        <div className={styles.presentation}>
          {lastThreeImages()}
          <div className={styles.presentationText}>
            <h6>Description</h6>
            <p>
              {product.description}
            </p>
          </div>
        </div>

        <div className={styles.productDetails}>
          <div className={styles.photo}>
            <img src={images[1] && images[1].original || images[0] && images[0].original} />
          </div>
          <div className={styles.details}>
            <ul>
              <li>
                <p>Color</p>
                <p>{product.color || 'As shown'}</p>
              </li>
              <li>
                <p>Material</p>
                <p>{product.material || '-'}</p>
              </li>
              <li>
                <p>Occupant Capacity</p>
                <p>{product.occupcapacity || 'Not applicable'}</p>
              </li>
              <li>
                <p>Seasons</p>
                <p>{product.seasons || "Not applicable"}</p>
              </li>
              <li>
                <p>Product Dimensions</p>
                <p>{product.dimensions || '-'}</p>
              </li>
            </ul>
            <p className={styles.disclaimer}>
              The published photos have been processed and adjusted  to be as close to the actual color as possible.
              <br />
              The color may look different from actual color ddepending on your monitor settings, weather, lighting condition, etc.
            </p>
          </div>
        </div>
      </>
        )
  }


"use server"
import { sql } from "@vercel/postgres";
import getSortedProducts from "../../../../utils/getProducts";
import getProductById from "../../../../utils/getProductInfoById";
import Gallery from '../../../../utils/Gallery.jsx'


export async function generateStaticParams() {
  const products = await getSortedProducts();

   return products.map((product) => ({
    id: (product.productid).toString(),
  }))

  }

  export default async function Page({ params }) {
    const product = await getProductById(params.productId);
    // console.log(product)

    // preparing array for gallery
    const images = []

    if(product.images){
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
        <div className="product-page">
          <div className="photos">
            <Gallery images={images}/>
          </div>
          <div className="product-info">
            <h1>
              {product.name}
            </h1>
            <div className="price">
              <p>
              ${product.price}
              </p>
              <p>
                <img src="/heart-svgrepo-com.svg" style={{display: 'inline', height: '1em'}}/> Wishlist
              </p>
            </div>
            <div className="color">
              <p>Color:</p>
              {product.color || 'Standart'}
            </div>
            <button className="main-btn-black-bg" style={{width: '100%'}}>Add to Cart</button>
            <div className="payments">
              payment icons
            </div>
          </div>
        </div>
{/* add real data from database */}
        <div className="product-presentation">
          {lastThreeImages()}
          <div className="product-presentation-text">
            <h6>Convenience</h6>
            <p>
              {product.description}
            </p>
          </div>
        </div>

        <div className="product-details">
          <div className="photo">
            <img src={images[1] && images[1].original || images[0] && images[0].original} />
          </div>
          <div className="details">
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
            <p className="disclaimer">
              The published photos have been processed and adjusted  to be as close to the actual color as possible.
              <br />
              The color may look different from actual color ddepending on your monitor settings, weather, lighting condition, etc.
            </p>
          </div>
        </div>
      </>
        )
  }


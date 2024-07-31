"use server"
import { sql } from "@vercel/postgres";
import getProducts from "../../../../utils/getProducts";
import getProductById from "../../../../utils/getProductInfoById";
import Gallery from '../../../../utils/Gallery.jsx'


export async function generateStaticParams() {
  const products = await getProducts();

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

        <div className="product-presentation">
          <img src='/tent-detail-assembly.jpeg'/>
          <img src='/tent-interior.jpg'/>
          <img src='/tent-storage.jpeg'/>
          <div className="product-presentation-text">
            <h6>Rain-Ready Convenience</h6>
            <p>Discover all-weather versatility! With the specially designed flysheet (compatible with one-touch tent
(M) TF3-619-TN), your one-touch tent becomes rain-resistant, offering added protection and peace of mind during your outdoor adventures.</p>
          </div>
        </div>

        <div className="product-details">
          <div className="photo">
            <img src="/tent-interior.jpg" />
          </div>
          <div className="details">
            <ul>
              <li>
                <p>Color</p>
                <p>Brown</p>
              </li>
              <li>
                <p>Material</p>
                <p>Nylon, Aluminium, fabric</p>
              </li>
              <li>
                <p>Occupant Capacity</p>
                <p>8</p>
              </li>
              <li>
                <p>Product Dimensions</p>
                <p>148.8"L x 148.8"W x 93.6"H</p>
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


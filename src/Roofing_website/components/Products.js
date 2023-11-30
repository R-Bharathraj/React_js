import React from 'react'
import "../style/product.css"
import img1 from "../images/product-1.jpg"
import img2 from "../images/product-2-1.jpg"
import img3 from "../images/product-3.jpg"
import img4 from "../images/product-4.jpg"
import img5 from "../images/product-5.jpg"
import img6 from "../images/product-6.jpg"

function Products() {
  return (
    <div id='products'>
        <h1>PRODUCTS FROM OUR COMPANY</h1>
        <div id='product-images'>
        <div id='img-boxs'>
        <img src={img1} width={350} height={200} id='img1'/>

        <div id='img1-back'></div>
        
        <h3>Terracotta roofing</h3>
        </div>
        <div id='img-boxs'>
        <img src={img2} width={350} height={200} id='img1'/>
        <div id='img2-back'></div>
        <h3>Reflective metal roofing</h3>
        </div>
        <div id='img-boxs'>
        <img src={img3} width={350} height={200} id='img1'/>
        <div id='img3-back'></div>
        <h3>Foam Tiles</h3>
        </div>
        <div id='img-boxs'>
        <img src={img4} width={350} height={200} id='img1'/>
        <div id='img4-back'></div>
        <h3>Slate roofing</h3>
        </div>
        <div id='img-boxs'>
        <img src={img5} width={350} height={200} id='img1'/>
        <div id='img5-back'></div>
        <h3>Asphalt Shingles</h3>
        </div>
        <div id='img-boxs'>
        <img src={img6} width={350} height={200} id='img1'/>
        <div id='img6-back'></div>
        <h3>Overlays and Radiant Barriers</h3>
        </div>
        </div>
    </div>
  )
}

export default Products

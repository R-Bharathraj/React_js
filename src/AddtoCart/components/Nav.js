import React from 'react'
import "../styles/nav.css"
import images from "../images/Watch-Logos-and-How-to-Make-Your-Own-for-Free-image1.jpg"

function Nav({size}) {
  return (
  <>
  <div className='nav'>
  <div className='nav_box'><span className='shop_name'><img src={images} className='watch'/></span></div>
  <div className='nav_box'><span className='shop_icon'><i class="fa-solid fa-cart-shopping"></i></span><span>{size}</span></div>
  </div>
  </>
  )
}

export default Nav

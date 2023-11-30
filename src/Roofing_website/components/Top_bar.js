import React from 'react'
import imgs from "../images/WhatsApp Image 2023-11-27 at 16.30.14_edf93c4d.jpg"
import "../style/style.css"

function Top_bar() {
  return (
    <>
    <div className='header'>
    <div className='top-bar'>
        <span className='logo-img'>
        <img src={imgs} width={200} height={100}></img>
        </span>
        <div className='menu-items'>
            <ul className='list-item'>
                <li><a href='http://hariomroofing.com/'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li className='pro'><a href='#'> Product</a>

                  <div className='drop'>
                   <ul className='drop-product-list'>
                    <li>Sheets</li>
                    <li>Tubes</li>
                    <li>Shutter</li>
                    <li>Louver</li>
                    <li>Ventilators</li>
                    <li>Sections</li>
                   </ul>
                  </div>

                </li>
                <li><a href='#'>Color Range</a></li>
                <li><a href='#'>Specification</a></li>
                <li><a href='#'>Client</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default Top_bar

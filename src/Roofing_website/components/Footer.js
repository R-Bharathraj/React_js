import React from 'react'
import "../style/Footer.css"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer-text'>
    <h1>Get in Touch</h1>
    <h3>Ready to elevate your home's protection and aesthetic appeal? Contact us today for a free consultation. We are here to answer your questions,
 provide expert advice, and deliver roofing solutions that exceed your expectations.</h3>
  </div>

  <div className='address'>
   <h1>Contact Us</h1>
   <address>90/1 Adhavan Industrial 
    Estate,
Athipalayam Road, opp CRI pump,
Chinnavedampatti post, Ganapathy,
Coimbatore 641006 (TN),
<h4>Ph.no: +91-9876543210,6789543210</h4>
</address>
  </div>

  <div className='icon'> 
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-facebook"></i>
  <i class="fa-brands fa-whatsapp"></i>
  <i class="fa-brands fa-twitter"></i>
  </div>
  {/* <div className='insta'>Instagram</div>
  <div className='face'>FaceBook</div>
  <div className='whats'>WhatsApp</div>
  <div className='twitter'>Twitter</div> */}
    </div>
    <div className='cpy-right'>
        <h4>© Copyright 2019. All Rights Reserved. Website developed by <span>KitKat Technologies</span></h4>
    </div>
    </>
  )
}

export default Footer

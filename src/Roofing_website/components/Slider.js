import React from 'react'
import img1 from "../images/roofing-contractor-2.PNG"
import img2 from "../images/roofing-contractor-1.PNG"
import "../style/Slider.css"

function Slider() {
  return (
    <div className='slider-box'>
    <div className='content-welcome'>
       <span> Welcome to <i><q>S.K ENGINEERING</q></i>  - Your Trusted Roofing Experts</span>
       <h3>At S.K ENGINEERING, we understand that your home is more than just a place; 
        it's an investment, a sanctuary, and a reflection of your unique style. 
        That's why we are dedicated to providing top-notch roofing solutions that protect your investment and enhance the beauty of your home.</h3>
    </div>
      {/* <img src={img1} width={1500}/>
      <img src={img2} width={1500}/> */}
    </div>
  )
}

export default Slider
